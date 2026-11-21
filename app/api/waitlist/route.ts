import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function welcomeEmailHtml(name: string): string {
  const firstName = name?.split(" ")[0] || "there"
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>You're in.</title>
</head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding-bottom:40px;">
            <img src="https://solu.ae/images/solu-logo-full-white.png" alt="Solu" width="90" style="display:block;" />
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background:#1A1A1A;border-radius:24px;padding:40px 36px;">

            <!-- Founding member pill -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="background:rgba(247,148,29,0.12);border:1px solid rgba(247,148,29,0.35);border-radius:100px;padding:6px 16px;">
                  <span style="color:#F7941D;font-size:12px;font-weight:600;letter-spacing:0.04em;">FOUNDING MEMBER</span>
                </td>
              </tr>
            </table>

            <!-- Heading -->
            <h1 style="margin:0 0 16px;font-size:28px;font-weight:800;line-height:1.15;color:#ffffff;letter-spacing:-0.5px;">
              You're in, ${firstName}.
            </h1>

            <!-- Body -->
            <p style="margin:0 0 12px;font-size:16px;line-height:1.65;color:rgba(255,255,255,0.65);">
              You just locked in one of the first 300 founding member spots. That means <strong style="color:#ffffff;">AED&nbsp;149.99/year — forever</strong>, even as the price goes up.
            </p>
            <p style="margin:0 0 32px;font-size:16px;line-height:1.65;color:rgba(255,255,255,0.65);">
              The app launches <strong style="color:#ffffff;">3 December</strong>. Watch your inbox — founding members get in before anyone else.
            </p>

            <!-- CTA button -->
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:32px;">
              <tr>
                <td align="center">
                  <a href="https://solu.ae/pricing" style="display:inline-block;background:#F7941D;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:100px;">
                    Start your free trial →
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
              <tr>
                <td style="border-top:1px solid rgba(255,255,255,0.08);font-size:0;">&nbsp;</td>
              </tr>
            </table>

            <!-- Blog nudge -->
            <p style="margin:0 0 6px;font-size:13px;color:rgba(255,255,255,0.4);">In the meantime</p>
            <a href="https://solu.ae/blog" style="color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">
              Read our latest on the blog →
            </a>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding-top:32px;">
            <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.25);">— The Solu team</p>
            <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.15);">
              You're receiving this because you signed up at solu.ae.<br/>
              <a href="https://solu.ae" style="color:rgba(255,255,255,0.25);text-decoration:underline;">Visit solu.ae</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp } = await req.json()
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    const webhookUrl = process.env.SLACK_WAITLIST_WEBHOOK
    if (!webhookUrl) {
      console.error("SLACK_WAITLIST_WEBHOOK is not set")
      return NextResponse.json({ success: false }, { status: 500 })
    }

    const timestamp = new Date().toLocaleString("en-AE", {
      timeZone: "Asia/Dubai",
      dateStyle: "medium",
      timeStyle: "short",
    })

    const fields: object[] = [
      { type: "mrkdwn", text: `*Name*\n${name || "_Not provided_"}` },
      { type: "mrkdwn", text: `*Email*\n${email}` },
      { type: "mrkdwn", text: `*WhatsApp*\n${whatsapp || "_Not provided_"}` },
      { type: "mrkdwn", text: `*Signed up*\n${timestamp}` },
    ]

    const body = {
      text: `New waitlist signup: ${email}`,
      attachments: [
        {
          color: "#F7941D",
          blocks: [
            {
              type: "section",
              text: { type: "mrkdwn", text: "*New waitlist signup*" },
            },
            { type: "section", fields },
          ],
        },
      ],
    }

    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!slackRes.ok) {
      console.error("Slack webhook error:", await slackRes.text())
      return NextResponse.json({ success: false }, { status: 500 })
    }

    // Fire-and-forget: Google Sheets
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK
    if (sheetsWebhook) {
      fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name?.trim(), email: email.trim(), whatsapp }),
      }).catch((err) => console.error("Sheets webhook error:", err))
    }

    // Fire-and-forget: welcome email + newsletter signup
    const firstName = name?.trim()?.split(" ")[0] || "there"
    Promise.all([
      resend.emails.send({
        from: "Solu <hello@solu.ae>",
        to: email.trim(),
        subject: "You're in. Here's what happens next.",
        html: welcomeEmailHtml(firstName),
      }),
      process.env.RESEND_AUDIENCE_ID
        ? resend.contacts.create({
            email: email.trim(),
            firstName: name?.trim()?.split(" ")[0] || undefined,
            lastName: name?.trim()?.split(" ").slice(1).join(" ") || undefined,
            audienceId: process.env.RESEND_AUDIENCE_ID,
            unsubscribed: false,
          })
        : Promise.resolve(),
    ]).catch((err) => console.error("Resend error:", err))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist API error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
