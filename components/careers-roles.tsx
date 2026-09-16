"use client"
import { useState } from "react"

const roles = [
  {
    id: "pm",
    title: "Product Manager",
    preview:
      "Solu is building the first wellness app designed around how women actually live, not a generic tracker, but something that understands the rhythm of a woman's cycle and makes her daily life better because of it.",
    description:
      "Solu is building the first wellness app designed around how women actually live, not a generic tracker, but something that understands the rhythm of a woman's cycle and makes her daily life better because of it. As our Product Manager, you'll own the roadmap from the ground up.",
    bullets: [
      "Define and prioritise the product roadmap alongside the founding team",
      "Translate user research and health insights into features women actually want",
      "Work across design, engineering, and content to ship with intention",
      "Hold the standard for what \"good\" looks and feels like at Solu",
    ],
    closing:
      "This is a founding-team-adjacent role. You'll have real influence over the direction of the product and genuine equity in what you're building.",
  },
  {
    id: "smm",
    title: "Social Media Manager",
    preview:
      "Women's wellness is one of the most talked-about spaces online right now, and Solu has a genuinely different story to tell. We need someone who understands that space, lives in it, and knows how to turn a mission into content that actually connects.",
    description:
      "Women's wellness is one of the most talked-about spaces online right now, and Solu has a genuinely different story to tell. We need someone who understands that space, lives in it, and knows how to turn a mission into content that actually connects.",
    bullets: [
      "Own Solu's presence on TikTok and Instagram (@solu.ae) from strategy to posting",
      "Create content that educates, resonates, and builds a loyal community of women",
      "Stay ahead of trends in women's health, fitness, and wellness content",
      "Grow our audience in the UAE and across the region ahead of our app launch",
    ],
    closing:
      "You'll be the voice of Solu online. If you've ever felt let down by wellness content that doesn't speak to you as a woman, this is your chance to change that.",
  },
  {
    id: "fd",
    title: "Finance Director & Investor Relations",
    preview:
      "Solu is on the path to seed funding, and we're looking for someone to help us get there and build what comes after. This combined role is for a strategic finance leader who's as comfortable in a pitch meeting as they are in a spreadsheet.",
    description:
      "Solu is on the path to seed funding, and we're looking for someone to help us get there and build what comes after. This combined role is for a strategic finance leader who's as comfortable in a pitch meeting as they are in a spreadsheet.",
    bullets: [
      "Build and manage Solu's financial model, forecasts, and reporting infrastructure",
      "Lead our investor relations strategy from first contact to term sheet",
      "Prepare pitch materials and financial due diligence documentation",
      "Advise the founding team on financial decisions as we scale toward launch",
    ],
    closing:
      "Early-stage finance roles like this rarely come with the kind of equity and strategic scope we're offering. If you've helped a company raise before and want to do it again for something you believe in, we'd love to talk.",
  },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function CareersRoles() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [applyRole, setApplyRole] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const openModal = (roleTitle: string) => {
    setApplyRole(roleTitle)
    setFormState("idle")
    setName("")
    setEmail("")
    setMessage("")
    setErrors({})
  }

  const closeModal = () => setApplyRole(null)

  const validate = () => {
    const e: { name?: string; email?: string } = {}
    if (!name.trim()) e.name = "Please enter your name."
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address."
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormState("submitting")
    try {
      const res = await fetch("https://formspree.io/f/xjykbaqz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, role: applyRole, message }),
      })
      setFormState(res.ok ? "success" : "error")
    } catch {
      setFormState("error")
    }
  }

  return (
    <>
      <div className="space-y-3">
        {roles.map((role) => {
          const isOpen = openId === role.id
          return (
            <div
              key={role.id}
              className={`bg-white rounded-[20px] border transition-colors duration-200 ${isOpen ? "border-[#F7941D]" : "border-gray-100"} shadow-sm`}
            >
              <div className="px-6 pt-5 pb-2">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4">
                  <p className="text-base font-semibold text-gray-900">{role.title}</p>
                  <div className="flex gap-2 shrink-0 pt-0.5">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-50 text-[#C06A05]">Equity-based</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700">Remote</span>
                  </div>
                </div>

                {/* Preview (collapsed) */}
                {!isOpen && (
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">{role.preview}</p>
                )}

                {/* Expanded content */}
                {isOpen && (
                  <div className="mt-3 space-y-3">
                    <p className="text-sm text-gray-500 leading-relaxed">{role.description}</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                      {role.bullets.map((b) => (
                        <li key={b} className="text-sm text-gray-500 leading-relaxed">{b}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 leading-relaxed">{role.closing}</p>
                    <button
                      onClick={() => openModal(role.title)}
                      className="inline-flex items-center gap-2 bg-[#F7941D] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e08510] transition-all shadow-md shadow-orange-200/50 mt-1"
                    >
                      Apply for this role
                      <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                )}

                {/* Toggle button */}
                <button
                  onClick={() => setOpenId(isOpen ? null : role.id)}
                  className="mt-2 mb-3 text-[#F7941D] text-sm font-medium inline-flex items-center gap-1 hover:text-[#C06A05] transition-colors"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "See less" : "See more"}
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Application modal */}
      {applyRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="bg-white rounded-[28px] w-full max-w-md shadow-2xl p-7 relative">
            {/* Close */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none"
            >
              ×
            </button>

            {formState === "success" ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true"><path d="M4 11l5 5 9-9" stroke="#F7941D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Application received!</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Thanks for applying for the {applyRole} role. We'll be in touch soon.</p>
                <button onClick={closeModal} className="mt-5 text-sm text-[#F7941D] font-medium hover:text-[#C06A05]">Close</button>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C06A05]">Applying for</span>
                  <h2 className="text-lg font-bold text-gray-900 mt-0.5">{applyRole}</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5" htmlFor="apply-name">Your name</label>
                    <input
                      id="apply-name"
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5" htmlFor="apply-email">Email address</label>
                    <input
                      id="apply-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5" htmlFor="apply-role-select">Role</label>
                    <select
                      id="apply-role-select"
                      value={applyRole}
                      onChange={(e) => setApplyRole(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors bg-white"
                    >
                      {roles.map((r) => (
                        <option key={r.id} value={r.title}>{r.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5" htmlFor="apply-message">Tell us about yourself <span className="text-gray-300">(optional)</span></label>
                    <textarea
                      id="apply-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Why does Solu's mission resonate with you?"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-xs text-red-500">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-[#F7941D] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#e08510] transition-all shadow-md shadow-orange-200/50 disabled:opacity-60"
                  >
                    {formState === "submitting" ? "Sending..." : "Submit application"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
