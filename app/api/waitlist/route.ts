import { NextRequest, NextResponse } from "next/server"

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

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist API error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
