"use client"
import { useMemo, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

type Severity = "critical" | "high" | "low"
type AppContext = { v?: string; device?: string; os?: string; plan?: string; uid?: string }

// Details the Solu app appends to the link, e.g. /report?v=1.4.2&device=iPhone%2015%20Pro&os=iOS%2018.1&plan=plus&uid=abc123
const CONTEXT_KEYS = ["v", "device", "os", "plan", "uid"] as const

const subscribeNoop = () => () => {}

function parseAppContext(search: string): AppContext | null {
  const params = new URLSearchParams(search)
  const ctx: AppContext = {}
  for (const key of CONTEXT_KEYS) {
    const value = params.get(key)?.trim()
    if (value) ctx[key] = value.slice(0, 80)
  }
  return Object.keys(ctx).length ? ctx : null
}

type Category = "app-crash" | "feature-broken" | "wrong-info" | "billing" | "account" | "other"

const severities: { value: Severity; label: string; emoji: string; description: string; selectedClass: string }[] = [
  {
    value: "critical",
    label: "Critical",
    emoji: "🔴",
    description: "App is broken, data missing, or I can't use Solu at all",
    selectedClass: "border-red-400 bg-red-50 text-red-700 ring-2 ring-red-400 ring-offset-1",
  },
  {
    value: "high",
    label: "High",
    emoji: "🟠",
    description: "A key feature isn't working and it's significantly affecting my experience",
    selectedClass: "border-orange-400 bg-orange-50 text-orange-700 ring-2 ring-orange-400 ring-offset-1",
  },
  {
    value: "low",
    label: "Low",
    emoji: "🟢",
    description: "Minor issue, cosmetic bug, or something small but worth fixing",
    selectedClass: "border-green-400 bg-green-50 text-green-700 ring-2 ring-green-400 ring-offset-1",
  },
]

const categories: { value: Category; label: string }[] = [
  { value: "app-crash", label: "App crash or freeze" },
  { value: "feature-broken", label: "Feature not working" },
  { value: "wrong-info", label: "Wrong or missing information" },
  { value: "billing", label: "Subscription or billing" },
  { value: "account", label: "Account or login" },
  { value: "other", label: "Something else" },
]

export default function ReportPage() {
  const [severity, setSeverity] = useState<Severity | null>(null)
  const [category, setCategory] = useState<Category | "">("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{ severity?: string; category?: string; description?: string }>({})
  const search = useSyncExternalStore(subscribeNoop, () => window.location.search, () => "")
  const appContext = useMemo(() => parseAppContext(search), [search])

  function validate() {
    const e: typeof errors = {}
    if (!severity) e.severity = "Please select a severity level"
    if (!category) e.category = "Please select a category"
    if (!description.trim() || description.trim().length < 10) e.description = "Please describe the problem (at least 10 characters)"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState("loading")
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ severity, category, description: description.trim(), email: email.trim(), context: appContext }),
      })
      setState(res.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <>
        <SoluHeader />
        <main className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Report received</h1>
            <p className="text-gray-500 mb-8">
              Thank you for taking the time to report this. Our team has been notified and will look into it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/help" className="inline-flex items-center justify-center gap-2 bg-[#F7941D] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#C06A05] transition-colors text-sm">
                Back to Help Centre
              </Link>
              <button
                onClick={() => { setState("idle"); setSeverity(null); setCategory(""); setDescription(""); setEmail("") }}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-medium px-5 py-2.5 rounded-full hover:border-gray-300 transition-colors text-sm"
              >
                Report another problem
              </button>
            </div>
          </div>
        </main>
        <SoluFooter />
      </>
    )
  }

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen">
        <div className="max-w-xl mx-auto px-6 pt-28 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/help" className="hover:text-[#F7941D] transition-colors">Help</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-gray-500">Report a problem</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Report a problem</h1>
            <p className="text-gray-500 text-sm">
              Tell us what&apos;s wrong and we&apos;ll look into it. The more detail you give, the faster we can fix it.
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="space-y-7">
            {/* Severity */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                How severe is this problem? <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-col gap-2.5">
                {severities.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => { setSeverity(s.value); setErrors((p) => ({ ...p, severity: undefined })) }}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      severity === s.value
                        ? s.selectedClass
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <span className="text-xl mt-0.5 shrink-0">{s.emoji}</span>
                    <div>
                      <span className="text-sm font-semibold block">{s.label}</span>
                      <span className="text-xs text-gray-500 mt-0.5 block">{s.description}</span>
                    </div>
                    {severity === s.value && (
                      <svg className="w-5 h-5 ml-auto shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              {errors.severity && <p className="text-xs text-red-500 mt-2">{errors.severity}</p>}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="report-category" className="block text-sm font-semibold text-gray-800 mb-2">
                What area is affected? <span className="text-red-400">*</span>
              </label>
              <select
                id="report-category"
                value={category}
                onChange={(e) => { setCategory(e.target.value as Category); setErrors((p) => ({ ...p, category: undefined })) }}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F7941D] transition-colors text-gray-800"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="report-description" className="block text-sm font-semibold text-gray-800 mb-2">
                Describe the problem <span className="text-red-400">*</span>
              </label>
              <textarea
                id="report-description"
                rows={5}
                value={description}
                onChange={(e) => { setDescription(e.target.value); setErrors((p) => ({ ...p, description: undefined })) }}
                placeholder="What happened? What were you trying to do? What did you expect to happen?"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors resize-none text-gray-800 placeholder-gray-400"
              />
              <div className="flex justify-between items-center mt-1">
                {errors.description
                  ? <p className="text-xs text-red-500">{errors.description}</p>
                  : <span />}
                <span className="text-xs text-gray-400">{description.length} / 1000</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="report-email" className="block text-sm font-semibold text-gray-800 mb-2">
                Your email <span className="text-gray-400 font-normal">(optional — so we can follow up)</span>
              </label>
              <input
                id="report-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#F7941D] transition-colors text-gray-800 placeholder-gray-400"
              />
              {appContext && (
                <p className="text-xs text-gray-400 mt-2">
                  We&apos;ll include your app version and device to help us fix this faster.
                </p>
              )}
            </div>

            {state === "error" && (
              <div className="flex gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3.5">
                <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" />
                </svg>
                <p className="text-sm text-red-700">Something went wrong sending your report. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full bg-[#F7941D] text-white font-semibold py-3 rounded-full hover:bg-[#C06A05] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {state === "loading" ? "Sending report..." : "Send report"}
            </button>
          </form>
        </div>
      </main>
      <SoluFooter />
    </>
  )
}
