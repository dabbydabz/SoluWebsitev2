"use client"
import { useState } from "react"

const faqs = [
  {
    q: "Can I use Solu for free?",
    a: "Yes. Solu has a free tier that includes cycle tracking, four-phase guidance and daily health actions — no credit card required. You can upgrade to Solu+ at any time to unlock the full experience.",
  },
  {
    q: "What's the difference between Solu Free and Solu+?",
    a: "Solu Free gives you cycle tracking, four-phase guidance, daily Move, Nourish, Rest and Mind actions, core Smart Insights, one active goal and community access — all at no cost. Solu+ adds personalised insights for every phase of your cycle, full flexibility to customise your daily actions, up to three goals with full progress history, a monthly cycle report, member pricing on Hangouts, a weekly phase forecast and early access to every new Solu feature.",
  },
  {
    q: 'What does “founding member” mean?',
    a: "The first 300 people to subscribe to the annual Solu+ plan at AED 149.99/year are founding members. That price is locked in for as long as your subscription stays active. When the founding spots fill up, the price moves to AED 199.99/year.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Solu+ subscription at any time from your account settings. You keep access until the end of your current billing period — no questions asked.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. Your health data is yours. We never sell it, share it with advertisers or use it to target you. You can delete your data at any time. Read our Privacy Policy for the full picture.",
  },
  {
    q: "What is cycle syncing?",
    a: "Cycle syncing is the practice of aligning your workouts, nutrition, sleep and daily habits to the four phases of your menstrual cycle — menstrual, follicular, ovulatory and luteal. Each phase comes with different hormone levels that affect your energy, mood and recovery. Solu tracks your phase in real time and adapts your daily guidance accordingly.",
  },
  {
    q: "What countries is Solu available in?",
    a: "Solu is built in Dubai and designed for women everywhere. The app will be available globally on iOS at launch.",
  },
]

export function SoluFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#FBF8F4] py-20 px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold text-[#F7941D] uppercase tracking-widest mb-3 text-center">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-12">
          Your questions, answered.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-semibold text-gray-900 leading-snug">{faq.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-[14px] text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          More questions?{" "}
          <a href="/contact" className="text-[#F7941D] font-medium hover:underline">
            Get in touch
          </a>{" "}
          or visit our{" "}
          <a href="/help" className="text-[#F7941D] font-medium hover:underline">
            Help Centre
          </a>
          .
        </p>
      </div>
    </section>
  )
}
