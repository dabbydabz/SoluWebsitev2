"use client"
import { useState, useRef } from "react"

const testimonials = [
  {
    quote: "Solu is the first wellness app that actually gets me. Tracking my cycle alongside my workouts changed everything.",
    name: "Amara K.",
    role: "Account manager",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  },
  {
    quote: "I love how clean and simple it is. I check Solu every morning, it's become part of my routine without feeling like another chore.",
    name: "Sophie L.",
    role: "Nutritionist",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
  },
  {
    quote: "Finally an app that shows me how my hormones impact my energy. I feel more in control of my health than ever before.",
    name: "Fatima R.",
    role: "Healthcare worker",
    avatar: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=120&q=80",
  },
  {
    quote: "Solu's cycle-based workout recommendations are spot on. My clients are seeing better results just by training with their hormones, not against them.",
    name: "Maya T.",
    role: "Personal trainer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80",
  },
  {
    quote: "I used to think my energy crashes were random. Solu showed me they're completely predictable, and manageable. Life-changing 🤯 .",
    name: "Nadia S.",
    role: "Teacher",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80",
  },
]

export function SoluTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[idx] as HTMLElement
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    setActiveIdx(idx)
  }

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F4] via-white to-[#F5F8FB] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Real women,<br />
            <span className="text-[#F7941D]">real results.</span>
          </h2>
        </div>

        {/* ── MOBILE: horizontal scroll cards ── */}
        <div className="sm:hidden -mx-6">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="snap-center shrink-0 w-[82vw] bg-white/60 backdrop-blur-2xl rounded-[28px] p-6 border border-white/80 shadow-xl"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-[#F7941D] text-sm">★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-orange-100" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators — centred, black */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-5 h-2 bg-gray-900"
                    : "w-2 h-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-column grid (unchanged) ── */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-5 mb-16">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.name}
              className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-[#F7941D] text-sm">★</span>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-orange-100" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
