"use client"
import { useState } from "react"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

const subjects = [
  "General enquiry",
  "Partnerships",
  "Press & media",
  "Complaint",
  "Other",
]

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/soluapp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@soluapp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/xgobazvl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#F7941D]/60 focus:bg-white/8 transition-all duration-200"

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-[#0D0D0D]">

        {/* Background glow */}
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F7941D] opacity-[0.07] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-24">

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="text-[#F7941D] text-sm font-semibold uppercase tracking-widest mb-4">Get in touch</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              We&apos;d love to<br />
              <span className="text-[#F7941D]">hear from you.</span>
            </h1>
            <p className="text-white/40 text-base mt-4 font-light max-w-sm leading-relaxed">
              Whether you have a question, a partnership idea, or just want to say hello, we&apos;re here.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-7 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#F7941D]/15 border border-[#F7941D]/30 flex items-center justify-center mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-white text-2xl font-bold">Message sent.</h2>
                <p className="text-white/40 text-sm max-w-xs">Thanks for reaching out. We usually reply within 24 to 48 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[#F7941D] text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Subject</label>
                  <div className="relative">
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer pr-10 ${form.subject === "" ? "text-white/25" : "text-white"}`}
                    >
                      <option value="" disabled>Select a topic</option>
                      {subjects.map(s => (
                        <option key={s} value={s} className="bg-[#1a1a1a] text-white">{s}</option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Socials */}
                  <div className="flex items-center gap-3">
                    <p className="text-white/25 text-xs font-medium">Follow us</p>
                    {socials.map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-pulse-orange bg-[#F7941D] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#e8850d] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-orange-900/30"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </main>
      <SoluFooter />
    </>
  )
}
