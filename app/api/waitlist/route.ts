import { after } from "next/server"
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
<body style="margin:0;padding:0;background:#F5F4F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#F5F4F2" style="background:#F5F4F2;padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding-bottom:28px;">
            <img src="https://solu.ae/images/solu-logo-full.png" alt="Solu" width="80" style="display:block;" />
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td bgcolor="#ffffff" style="background:#ffffff;border-radius:20px;padding:36px 32px;border:1px solid #E8E6E3;">

            <!-- Founding member pill -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td bgcolor="#FEF3E7" style="background:#FEF3E7;border:1px solid #F7941D;border-radius:100px;padding:5px 14px;">
                  <span style="color:#C97415;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">Founding Member</span>
                </td>
              </tr>
            </table>

            <!-- Heading -->
            <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;line-height:1.2;color:#111111;letter-spacing:-0.3px;">
              You're in, ${firstName}.
            </h1>

            <!-- Body -->
            <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#555555;">
              You just locked in one of the first 300 founding member spots. That means <strong style="color:#111111;">AED 149.99/year, locked in forever</strong>, even as the price goes up.
            </p>
            <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#555555;">
              The app launches <strong style="color:#111111;">3 December</strong>. Watch your inbox. Founding members get in before anyone else.
            </p>

            <!-- CTA button -->
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
              <tr>
                <td align="center">
                  <a href="https://solu.ae/pricing" style="display:inline-block;background:#111111;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:100px;">
                    Start your free trial
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
              <tr>
                <td style="border-top:1px solid #EEECE9;font-size:0;">&nbsp;</td>
              </tr>
            </table>

            <!-- Blog nudge -->
            <p style="margin:0 0 4px;font-size:12px;color:#999999;text-transform:uppercase;letter-spacing:0.05em;">In the meantime</p>
            <a href="https://solu.ae/blog" style="color:#111111;font-size:15px;font-weight:600;text-decoration:none;">
              Read our latest on the blog
            </a>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding-top:28px;">
            <p style="margin:0 0 6px;font-size:13px;color:#999999;">The Solu team</p>
            <p style="margin:0;font-size:11px;color:#BBBBBB;line-height:1.6;">
              You received this because you signed up at solu.ae.<br/>
              <a href="https://solu.ae" style="color:#BBBBBB;text-decoration:underline;">Visit solu.ae</a>
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

    const trimmedEmail = email.trim()
    const trimmedName = name?.trim()
    const firstName = trimmedName?.split(" ")[0] || "there"
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK

    // Run after response is sent — keeps serverless function alive for async work
    after(async () => {
      await Promise.allSettled([
        sheetsWebhook
          ? fetch(sheetsWebhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: trimmedName, email: trimmedEmail, whatsapp }),
            })
          : Promise.resolve(),
        resend.emails.send({
          from: "Solu <hello@solu.ae>",
          to: trimmedEmail,
          subject: "You're in. Here's what happens next.",
          html: welcomeEmailHtml(firstName),
        }),
        process.env.RESEND_AUDIENCE_ID
          ? resend.contacts.create({
              email: trimmedEmail,
              firstName: trimmedName?.split(" ")[0] || undefined,
              lastName: trimmedName?.split(" ").slice(1).join(" ") || undefined,
              audienceId: process.env.RESEND_AUDIENCE_ID,
              unsubscribed: false,
            })
          : Promise.resolve(),
      ])
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist API error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
