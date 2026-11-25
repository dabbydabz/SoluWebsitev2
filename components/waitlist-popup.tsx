"use client"
import { useEffect, useState } from "react"

const STORAGE_KEY  = "solu_waitlist_dismissed"
const COUNT_KEY    = "solu_waitlist_count"
const SHOW_DELAY_MS = 3000
const LAUNCH_DATE  = new Date("2026-12-03T00:00:00+04:00")
const START_COUNT  = 99
const MAX_COUNT    = 300

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    function calc() {
      const diff = LAUNCH_DATE.getTime() - Date.now()
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return {
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      }
    }
    setT(calc())
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

function readCount(): number {
  try { const v = localStorage.getItem(COUNT_KEY); return v ? parseInt(v, 10) : START_COUNT } catch { return START_COUNT }
}
function bumpCount(): number {
  try {
    const next = Math.min(readCount() + 1, MAX_COUNT)
    localStorage.setItem(COUNT_KEY, String(next))
    return next
  } catch { return START_COUNT + 1 }
}

export function WaitlistPopup() {
  const [visible, setVisible]         = useState(false)
  const [fieldsOpen, setFieldsOpen]   = useState(false)
  const [name, setName]               = useState("")
  const [email, setEmail]             = useState("")
  const [countryCode, setCountryCode] = useState("+971")
  const [phone, setPhone]             = useState("")
  const [state, setState]             = useState<"idle" | "loading" | "success" | "error">("idle")
  const [count, setCount]             = useState(START_COUNT)
  const { days, hours, minutes, seconds } = useCountdown()

  useEffect(() => {
    setCount(readCount())
    try { if (localStorage.getItem(STORAGE_KEY)) return } catch {}
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function handleOpen() { setVisible(true) }
    window.addEventListener("solu:open-waitlist", handleOpen)
    return () => window.removeEventListener("solu:open-waitlist", handleOpen)
  }, [])

  function dismiss() {
    setVisible(false)
    try { localStorage.setItem(STORAGE_KEY, "1") } catch {}
  }

  function handleNameFocus() {
    if (!fieldsOpen) {
      setFieldsOpen(true)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim()) return
    setState("loading")
    try {
      const whatsapp = `${countryCode}${phone.trim()}`
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), whatsapp }),
      })
      if (res.ok) {
        const next = bumpCount()
        setCount(next)
        setState("success")
        try { localStorage.setItem(STORAGE_KEY, "1") } catch {}
      } else {
        setState("error")
      }
    } catch {
      setState("error")
    }
  }

  if (!visible) return null

  const spotsLeft = MAX_COUNT - count
  const showExact = spotsLeft <= 30
  const showFifty = !showExact && spotsLeft <= 50

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center animate-popup overflow-x-hidden overflow-y-auto bg-[#FBE9E4]"
      role="dialog"
      aria-modal="true"
      aria-label="Join the Solu waitlist"
    >
      {/* Gradient blobs — matching Solu+ card */}
      <div className="absolute w-[600px] h-[500px] rounded-full bg-[#F4A88A] blur-[100px] -top-[200px] -left-[100px] opacity-60 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B48AE8] blur-[100px] -top-[150px] -right-[50px] opacity-50 pointer-events-none" />
      <div className="absolute w-[600px] h-[500px] rounded-full bg-[#F3B48C] blur-[100px] -bottom-[200px] right-0 opacity-60 pointer-events-none" />

      <button
        onClick={dismiss}
        aria-label="Close"
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/18 text-[#3A3A3C] transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Disclaimer — pinned to bottom of screen */}
      <p className="absolute bottom-5 left-0 right-0 z-10 text-center text-[10px] text-gray-500/70 leading-tight px-6">
        *Forever means for as long as your subscription stays active. If you cancel and resubscribe later, standard pricing applies and founding member benefits end.
      </p>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full -translate-y-[10vh] sm:translate-y-0">

        {state === "success" ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Founding member, unlocked.</h2>
            <p className="text-gray-500 text-base">Watch your inbox. You&apos;re getting in before anyone else.</p>
          </>
        ) : (
          <>
            {/* Pulsing pill — not clickable */}
            <div className="inline-flex items-center border border-[#F7941D]/60 text-[#F7941D] text-sm font-semibold px-5 py-2 rounded-full mb-5 pulse-pill select-none">
              Early access
            </div>

            <h2 className="text-[7.5vw] sm:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight mb-4">
              The <span className="text-[1.25em] font-light">biggest</span> upgrade<br />to women&apos;s wellness
            </h2>

            <p className="text-[#3A3A3C] text-[13px] sm:text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full">
              Lock in your price{" "}
              <span className="font-black underline underline-offset-2">forever</span>*{" "}
              and get in before the public.
            </p>
            <p className="text-[#3A3A3C] text-[13px] sm:text-sm font-semibold mb-6">
              300 founding members only.
            </p>

            {/* Countdown */}
            <div className="flex items-start gap-2 sm:gap-5 mb-6">
              {[
                { value: days,    label: "DAYS"  },
                { value: hours,   label: "HOURS" },
                { value: minutes, label: "MIN"   },
                { value: seconds, label: "SEC"   },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-start gap-2 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-[40px] sm:text-7xl font-bold tracking-tight text-gray-900 tabular-nums leading-none">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-[#55555A] mt-2">{unit.label}</span>
                  </div>
                  {i < 3 && (
                    <span className="text-[28px] sm:text-6xl font-bold text-[#B48AE8]/60 leading-none mt-1">:</span>
                  )}
                </div>
              ))}
            </div>

            {/* Form card */}
            <div className="w-full max-w-sm bg-white/80 border border-gray-200/80 rounded-2xl px-5 py-5 shadow-lg backdrop-blur-md">
              <form onSubmit={handleSubmit} noValidate className="space-y-2.5">

                {/* Name — always visible */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={handleNameFocus}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F7941D] transition-colors"
                />

                {/* Email + WhatsApp — reveal on name focus */}
                <div className={`space-y-2.5 overflow-hidden transition-all duration-300 ${fieldsOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F7941D] transition-colors"
                  />
                  {/* Country code + phone */}
                  <div className="flex rounded-xl border border-gray-200 bg-white overflow-hidden focus-within:border-[#F7941D] transition-colors">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="shrink-0 bg-gray-50 border-r border-gray-200 text-sm text-gray-700 px-2 py-3 focus:outline-none cursor-pointer"
                      aria-label="Country code"
                    >
                      {[
                        ["🇦🇪", "+971", "UAE"],
                        ["🇸🇦", "+966", "Saudi Arabia"],
                        ["🇰🇼", "+965", "Kuwait"],
                        ["🇶🇦", "+974", "Qatar"],
                        ["🇧🇭", "+973", "Bahrain"],
                        ["🇴🇲", "+968", "Oman"],
                        ["🇪🇬", "+20",  "Egypt"],
                        ["🇯🇴", "+962", "Jordan"],
                        ["🇱🇧", "+961", "Lebanon"],
                        ["🇬🇧", "+44",  "UK"],
                        ["🇺🇸", "+1",   "USA"],
                        ["🇮🇳", "+91",  "India"],
                        ["🇵🇰", "+92",  "Pakistan"],
                        ["🇵🇭", "+63",  "Philippines"],
                      ].map(([flag, code, name]) => (
                        <option key={code} value={code}>{flag} {code} {name}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="WhatsApp number"
                      required
                      autoComplete="tel-national"
                      inputMode="numeric"
                      className="flex-1 px-3 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
                    />
                  </div>
                  <p className="text-xs text-gray-400 text-left px-1">We&apos;ll never sell your information.</p>
                </div>

                {state === "error" && (
                  <p className="text-xs text-red-500 text-left">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={state === "loading" || !name.trim() || !email.trim() || !phone.trim()}
                  className="w-full bg-[#F7941D] text-white font-bold py-3.5 rounded-xl hover:bg-[#C06A05] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 text-sm"
                >
                  {state === "loading" ? "Claiming your spot..." : "Claim my founding member spot"}
                </button>
              </form>

              {/* Social proof */}
              <p className="text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5 flex-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/solu-favicon.png" alt="Solu" className="w-4 h-4 shrink-0 object-contain" />
                <span>
                  Join <strong className="text-gray-600">{count}</strong> others
                  {showExact && (
                    <span className="text-[#F7941D] font-semibold ml-1">· {spotsLeft} spots remaining</span>
                  )}
                  {showFifty && (
                    <span className="text-[#F7941D] font-semibold ml-1">· 50 spots remaining</span>
                  )}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
