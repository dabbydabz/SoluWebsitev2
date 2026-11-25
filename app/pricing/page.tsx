"use client"
import { useRef, useState } from "react"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

function openWaitlist() {
  window.dispatchEvent(new CustomEvent("solu:open-waitlist"))
}

function CheckIcon() {
  return (
    <span className="w-[20px] h-[20px] rounded-full border border-[#3A3A3C]/35 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
        <path d="M2 5.2l1.9 1.9 4-4.3" fill="none" stroke="#3A3A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 14 14"
      className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 5l4.5 4.5L11.5 5" />
    </svg>
  )
}

const freeFeatures = [
  "Cycle tracking and four-phase guidance",
  "Daily Move, Nourish, Rest and Mind actions",
  "Core Smart Insights",
  "One active goal and 28-day progress",
  "Community and Hangouts access",
  "Private Health mode",
]

const plusFeatures = [
  "Everything in Solu Free",
  "Insights personalised to every phase of your cycle",
  "Full flexibility: make every daily action your own",
  "Up to three goals and full progress history",
  "Monthly cycle report",
  "Member pricing on Hangouts",
  "Weekly phase forecast so you can plan around your cycle",
  "Early access to every new Solu feature",
]

export default function PricingPage() {
  const [freeOpen, setFreeOpen] = useState(false)
  const [plusOpen, setPlusOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    const el = trackRef.current
    if (!el) return
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    setActiveCard(ratio >= 0.5 ? 1 : 0)
  }

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-[#0D0D0D] pt-32 pb-24">

        {/* Heading */}
        <div className="text-center mb-10 px-5">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Choose your plan</h1>
          <p className="text-lg text-white/50 mt-3">Your body deserves the full picture.</p>
        </div>

        {/* Horizontal scroll track — mobile scrolls, desktop centers */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex items-start gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory md:overflow-x-visible md:justify-center md:snap-none md:pb-0 md:mb-10"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >

          {/* Free card */}
          <div className="flex-none w-[82vw] max-w-[320px] md:w-[320px] bg-white rounded-[28px] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.5)] snap-start">
            <div className="rounded-[20px] bg-[#EBEAE9] p-6 flex flex-col">
              <div className="text-[18px] font-semibold text-[#1A1A1A]">Solu Free</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[52px] font-bold tracking-tight leading-none text-[#1A1A1A]">Free</span>
              </div>
              <div className="h-[16px]" />
              <p className="text-[14px] leading-relaxed text-[#2C2C2E] mt-3 mb-5">
                Everything you need to build a daily habit around your cycle.
              </p>
              <button
                onClick={openWaitlist}
                className="h-12 rounded-full bg-gradient-to-b from-[#2A2A2C] to-[#111] text-white text-[15px] font-semibold flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Get started
              </button>
            </div>
            <button
              onClick={() => setFreeOpen(!freeOpen)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-[13px] font-medium text-[#55555A] hover:text-[#1A1A1A] transition-colors"
            >
              {freeOpen ? "See less" : "See what you get"}
              <ChevronDown open={freeOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${freeOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="px-5 pb-5 space-y-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-[#2C2C2E]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solu+ card */}
          <div className="flex-none w-[82vw] max-w-[320px] md:w-[320px] bg-white rounded-[28px] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.5)] snap-start">
            <div
              className="rounded-[20px] bg-[#FBE9E4] p-6 flex flex-col relative overflow-hidden"
              style={{ transform: "translateZ(0)", isolation: "isolate", WebkitMaskImage: "-webkit-radial-gradient(white, black)" } as React.CSSProperties}
            >
              <div className="absolute w-[220px] h-[180px] rounded-full bg-[#F4A88A] blur-[40px] -top-[70px] left-[100px] opacity-[0.85] pointer-events-none" />
              <div className="absolute w-[180px] h-[180px] rounded-full bg-[#B48AE8] blur-[40px] -top-[50px] -right-[40px] opacity-[0.90] pointer-events-none" />
              <div className="absolute w-[200px] h-[160px] rounded-full bg-[#F3B48C] blur-[40px] -bottom-[80px] -right-[30px] opacity-[0.85] pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div className="text-[18px] font-semibold text-[#1A1A1A]">Solu+</div>
                <span className="text-[11px] font-semibold bg-white/75 text-[#7B4FB8] px-3 py-1.5 rounded-full">7-day free trial</span>
              </div>

              <div className="relative mt-5 flex items-baseline gap-1.5">
                <span className="text-[52px] font-bold tracking-tight leading-none text-[#1A1A1A]">
                  <span className="text-[22px] font-semibold mr-0.5">AED</span>199
                </span>
                <span className="text-[12px] text-[#3A3A3C] self-end pb-1">.99/year</span>
              </div>
              <div className="relative text-[12px] text-[#55555A] mt-1">or AED 34.99/month</div>

              <p className="relative text-[14px] leading-relaxed text-[#2C2C2E] mt-3 mb-5">
                More depth, more personalisation, and member access to Hangouts.
              </p>

              <button
                onClick={openWaitlist}
                className="relative h-12 rounded-full bg-gradient-to-b from-[#2A2A2C] to-[#111] text-white text-[15px] font-semibold flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Start free trial
              </button>
              <p className="relative mt-2.5 text-center text-[11px] text-[#4A3A63]">
                Founding members pay AED 149.99/year.<br />First 300 only.
              </p>
            </div>

            <button
              onClick={() => setPlusOpen(!plusOpen)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-[13px] font-medium text-[#55555A] hover:text-[#1A1A1A] transition-colors"
            >
              {plusOpen ? "See less" : "See what you get"}
              <ChevronDown open={plusOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${plusOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="px-5 pb-5 space-y-3">
                {plusFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-[#2C2C2E]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Dot indicators — mobile only */}
        <div className="flex md:hidden justify-center gap-1.5 mt-2 mb-10">
          <div className={`h-1.5 rounded-full transition-all duration-200 ${activeCard === 0 ? "w-5 bg-white/70" : "w-1.5 bg-white/20"}`} />
          <div className={`h-1.5 rounded-full transition-all duration-200 ${activeCard === 1 ? "w-5 bg-white/70" : "w-1.5 bg-white/20"}`} />
        </div>

        <p className="text-center text-[14px] text-white/25 px-5">More is on the way. Founding members hear about it first.</p>
      </main>
      <SoluFooter />
    </>
  )
}
