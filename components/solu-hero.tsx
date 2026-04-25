"use client"
import { useState } from "react"

export function SoluHero() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white pt-0 sm:pt-6 pb-0 sm:pb-6 px-0 sm:px-4">

        {/* Inset rounded container */}
        <div className="relative w-full rounded-none sm:rounded-[40px] overflow-hidden h-[63vh] sm:h-auto sm:min-h-[calc(100vh-48px)]">

          {/* Background photo */}
          <img
            src="/images/hero-women2.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] sm:object-center"
          />

          {/* Orange colour-wash overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/32 via-[#F7941D]/18 to-transparent" />
          {/* Dark contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* ── MOBILE layout: spacer top, everything at bottom ── */}
          <div className="sm:hidden relative z-10 h-full flex flex-col px-6 pt-0 pb-7">

            {/* SPACER — women's faces are visible here */}
            <div className="flex-1" />

            {/* BOTTOM: headline + learn more + CTA + social proof */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-[1.08] text-white tracking-tight">
                Solu helps women<br />live healthier lives.{" "}
                <button
                  onClick={() => setPopupOpen(true)}
                  className="inline-flex items-center gap-1 align-middle bg-white/20 backdrop-blur-sm border border-white/40 text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-full translate-y-[-2px]"
                >
                  Learn more
                </button>
              </h1>
              <a
                href="#download"
                className="inline-block bg-white text-[#F7941D] px-7 py-3 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all"
              >
                Try Solu for Free
              </a>
              {/* Social proof — subtle, low opacity */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=80",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80",
                    "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=60&q=80",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Solu member" className="w-7 h-7 rounded-full border-2 border-white/20 object-cover opacity-45" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-white/45 text-xs">★</span>)}
                  </div>
                  <p className="text-white/35 text-[11px] font-medium">Loved by 10,000+ women</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── DESKTOP layout: centred, unchanged ── */}
          <div className="hidden sm:flex relative z-10 h-full items-center min-h-[calc(100vh-48px)]">
            <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
              <div className="max-w-xl space-y-8 lg:max-w-lg">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full text-sm font-medium">
                  Lifestyle · Wellness · Community
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] text-white tracking-tight">
                  Solu helps women<br />live healthier lives.
                </h1>
                <p className="text-white/85 text-lg leading-relaxed font-light max-w-md">
                  Your body changes every week — your life should reflect that. Solu aligns your daily habits with your natural hormonal cycle, so you always know what your body needs, and why.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#download" className="bg-white text-[#F7941D] px-8 py-4 rounded-full font-bold text-base hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95">
                    Try Solu for Free
                  </a>
                  <a href="#why-solu" className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-base border border-white/30 hover:bg-white/25 transition-all">
                    Why Solu →
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&q=80",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=80",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80",
                      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=60&q=80",
                    ].map((src, i) => (
                      <img key={i} src={src} alt="Solu member" className="w-9 h-9 rounded-full border-2 border-white/60 object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-white text-sm">★</span>)}
                    </div>
                    <p className="text-white/70 text-xs mt-0.5 font-medium">Loved by 10,000+ women</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MOBILE: "Learn more" popup glass tile — sm:hidden ── */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm sm:hidden"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative bg-white/70 backdrop-blur-2xl rounded-[28px] p-7 shadow-2xl border border-white/80 max-w-sm w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* X button */}
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gray-300 bg-white/80 flex items-center justify-center text-gray-500 text-lg leading-none"
            >
              ×
            </button>
            <p className="text-gray-700 text-base leading-relaxed pr-6">
              Your body changes every week — your life should reflect that. Solu aligns your daily habits with your natural hormonal cycle, so you always know what your body needs, and why.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
