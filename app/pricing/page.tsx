"use client"
import { useState } from "react"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

function openWaitlist() {
  window.dispatchEvent(new CustomEvent("solu:open-waitlist"))
}

function CheckIcon() {
  return (
    <span className="w-[22px] h-[22px] rounded-full border border-[#3A3A3C]/40 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 12 12" className="w-3 h-3">
        <path d="M2.5 6.2l2.3 2.3 4.7-5" fill="none" stroke="#3A3A3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6l5 5 5-5" />
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
  "Full flexibility — make every daily action your own",
  "Up to three goals and full progress history",
  "Monthly cycle report",
  "Member pricing on Hangouts",
]

export default function PricingPage() {
  const [freeOpen, setFreeOpen] = useState(false)
  const [plusOpen, setPlusOpen] = useState(false)

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-[#0D0D0D] pt-32 pb-24 px-5">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Choose your plan</h1>
          <p className="text-lg text-white/50 mt-3">Your body deserves the full picture.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-[980px] mx-auto">

          {/* Solu+ card — first on mobile, right on desktop */}
          <div className="w-full lg:w-[460px] bg-white rounded-[34px] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.4)] order-first lg:order-last">
            <div
              className="rounded-[26px] bg-[#FBE9E4] p-7 flex flex-col relative overflow-hidden"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Blobs */}
              <div className="absolute w-[300px] h-[240px] rounded-full bg-[#F4A88A] blur-[46px] -top-[90px] left-[150px] opacity-[0.85] pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] rounded-full bg-[#B48AE8] blur-[46px] -top-[70px] -right-[60px] opacity-[0.90] pointer-events-none" />
              <div className="absolute w-[260px] h-[200px] rounded-full bg-[#F3B48C] blur-[46px] -bottom-[110px] -right-[40px] opacity-[0.85] pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div className="text-[21px] font-medium text-[#1A1A1A]">Solu+</div>
                <span className="text-[13px] font-semibold bg-white/75 text-[#7B4FB8] px-3.5 py-1.5 rounded-full">7-day free trial</span>
              </div>

              <div className="relative mt-8 flex items-baseline gap-2">
                <span className="text-[58px] sm:text-[60px] font-bold tracking-tight leading-none text-[#1A1A1A]">
                  <span className="text-[28px] font-semibold mr-1">AED</span>199
                </span>
                <span className="text-[14px] text-[#3A3A3C]">.99/year</span>
              </div>
              <div className="relative text-[14px] text-[#55555A] mt-1">or AED 34.99/month</div>

              <p className="relative text-[17px] leading-relaxed text-[#2C2C2E] mt-5 mb-6">
                More depth, more personalisation, and member access to Hangouts.
              </p>

              <button
                onClick={openWaitlist}
                className="relative h-14 rounded-full bg-gradient-to-b from-[#2A2A2C] to-[#111] text-white text-[17px] font-semibold flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Start free trial
              </button>
              <p className="relative mt-3 text-center text-[13px] text-[#4A3A63]">
                Founding members pay AED 149.99/year. First 300 only.
              </p>
            </div>

            {/* Collapsible feature list */}
            <button
              onClick={() => setPlusOpen(!plusOpen)}
              className="w-full flex items-center justify-center gap-2 py-4 text-[14px] font-medium text-[#55555A] hover:text-[#1A1A1A] transition-colors"
            >
              {plusOpen ? "See less" : "See what you get"}
              <ChevronDown open={plusOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${plusOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="px-6 pb-6 space-y-4">
                {plusFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3.5 text-[16px] text-[#2C2C2E]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Free card — second on mobile, left on desktop */}
          <div className="w-full lg:w-[460px] bg-white rounded-[34px] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.4)] order-last lg:order-first">
            <div className="rounded-[26px] bg-[#EBEAE9] p-7 flex flex-col">
              <div className="text-[21px] font-medium text-[#1A1A1A]">Solu Free</div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-[58px] sm:text-[60px] font-bold tracking-tight leading-none text-[#1A1A1A]">Free</span>
              </div>
              <div className="h-[18px]" />
              <p className="text-[17px] leading-relaxed text-[#2C2C2E] mt-4 mb-6">
                Everything you need to build a daily habit around your cycle.
              </p>
              <button
                onClick={openWaitlist}
                className="h-14 rounded-full bg-gradient-to-b from-[#2A2A2C] to-[#111] text-white text-[17px] font-semibold flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Get started
              </button>
            </div>

            {/* Collapsible feature list */}
            <button
              onClick={() => setFreeOpen(!freeOpen)}
              className="w-full flex items-center justify-center gap-2 py-4 text-[14px] font-medium text-[#55555A] hover:text-[#1A1A1A] transition-colors"
            >
              {freeOpen ? "See less" : "See what you get"}
              <ChevronDown open={freeOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${freeOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="px-6 pb-6 space-y-4">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3.5 text-[16px] text-[#2C2C2E]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <p className="text-center mt-14 text-[16px] text-white/30">More is on the way. Founding members hear about it first.</p>
      </main>
      <SoluFooter />
    </>
  )
}
