import { NextRequest, NextResponse } from "next/server"

const SEVERITY_CONFIG = {
  critical: { emoji: "🔴", label: "Critical", color: "#ef4444" },
  high:     { emoji: "🟠", label: "High",     color: "#f97316" },
  low:      { emoji: "🟢", label: "Low",       color: "#22c55e" },
} as const

const CATEGORY_LABELS: Record<string, string> = {
  "app-crash":      "App crash or freeze",
  "feature-broken": "Feature not working",
  "wrong-info":     "Wrong or missing information",
  "billing":        "Subscription or billing",
  "account":        "Account or login",
  "other":          "Something else",
}

const PLAN_LABELS: Record<string, string> = {
  free: "Solu Free",
  plus: "Solu+",
  pro:  "Solu Pro",
}

// Strip Slack formatting characters and cap length so app details always render as plain text
function clean(value: unknown): string {
  if (typeof value !== "string") return ""
  return value.replace(/[*_~`<>|]/g, "").trim().slice(0, 80)
}

function appDetailsLine(context: unknown): string {
  if (!context || typeof context !== "object") return "🌐 Sent from web"
  const c = context as Record<string, unknown>
  const v = clean(c.v), device = clean(c.device), os = clean(c.os), plan = clean(c.plan), uid = clean(c.uid)
  const parts = [
    v && `App ${v}`,
    device,
    os,
    plan && (PLAN_LABELS[plan.toLowerCase()] ?? plan),
    uid && `User \`${uid}\``,
  ].filter(Boolean)
  return parts.length ? `📱 ${parts.join("  ·  ")}` : "🌐 Sent from web"
}

export async function POST(req: NextRequest) {
  try {
    const { severity, category, description, email, context } = await req.json()

    if (!severity || !category || !description) {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    const webhookUrl = process.env.SLACK_CUSTOMER_SUPPORT_WEBHOOK
    if (!webhookUrl) {
      console.error("SLACK_CUSTOMER_SUPPORT_WEBHOOK is not set")
      return NextResponse.json({ success: false }, { status: 500 })
    }

    const cfg = SEVERITY_CONFIG[severity as keyof typeof SEVERITY_CONFIG]
    const categoryLabel = CATEGORY_LABELS[category] ?? category
    const timestamp = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" })

    const contextElements: object[] = [
      { type: "mrkdwn", text: `🕐 ${timestamp}` },
    ]
    if (email) {
      contextElements.push({ type: "mrkdwn", text: `✉️ ${email}` })
    }

    const blocks: object[] = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${cfg.emoji} *${cfg.label} · ${categoryLabel}*`,
        },
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: description },
      },
      {
        type: "context",
        elements: contextElements,
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: appDetailsLine(context) }],
      },
    ]

    if (email) {
      blocks.push({
        type: "actions",
        elements: [{
          type: "button",
          text: { type: "plain_text", text: "Reply by email" },
          url: `mailto:${email}?subject=Re: Your Solu problem report&body=Hi,%0A%0AWe received your report and wanted to follow up.`,
          style: "primary",
        }],
      })
    }

    const body = {
      text: `${cfg.emoji} ${cfg.label} problem reported — ${categoryLabel}`,
      attachments: [{ color: cfg.color, blocks }],
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
    console.error("Report API error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
