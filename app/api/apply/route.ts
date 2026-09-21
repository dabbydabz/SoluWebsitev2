import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData()

    const name      = fd.get("name") as string
    const email     = fd.get("email") as string
    const role      = fd.get("role") as string
    const github    = fd.get("github") as string | null
    const portfolio = fd.get("portfolio") as string | null
    const message   = fd.get("message") as string | null
    const cvFile    = fd.get("attachment") as File | null

    const rows = [
      ["Name",      name],
      ["Email",     email],
      ["Role",      role],
      ...(github    ? [["GitHub",    github]]    : []),
      ...(portfolio ? [["Portfolio", portfolio]] : []),
      ...(message   ? [["Message",   message]]   : []),
    ]

    const tableRows = rows
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;background:#f9fafb;border:1px solid #e5e7eb">${k}</td><td style="padding:6px 12px;border:1px solid #e5e7eb">${v}</td></tr>`)
      .join("")

    const html = `
      <p style="font-family:sans-serif;color:#374151">Someone applied via <a href="https://www.solu.ae/careers">solu.ae/careers</a>.</p>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;color:#111827">${tableRows}</table>
    `

    const attachments: { filename: string; content: Buffer }[] = []
    if (cvFile && cvFile.size > 0) {
      const bytes = await cvFile.arrayBuffer()
      attachments.push({ filename: cvFile.name, content: Buffer.from(bytes) })
    }

    const { error } = await resend.emails.send({
      from: "Solu Careers <onboarding@resend.dev>",
      to: "solu.app.ae@gmail.com",
      replyTo: email,
      subject: `New application: ${role} — ${name}`,
      html,
      attachments,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Apply API error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
