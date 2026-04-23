export function SoluHero() {
  return (
    <section className="relative bg-white pt-6 pb-6 px-4 min-h-screen flex items-center">

      {/* Inset rounded container — full-bleed photo background */}
      <div className="relative w-full rounded-[40px] overflow-hidden min-h-[calc(100vh-48px)]">

        {/* Background photo */}
        <img
          src="/images/hero-women2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Orange colour-wash overlay (left → right, fades out) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/32 via-[#F7941D]/18 to-transparent" />

        {/* Dark contrast overlay (left-heavy so text is readable) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        {/* Bottom fade so section blends into the next */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Text — left side, vertically centered */}
        <div className="relative z-10 h-full min-h-[calc(100vh-48px)] flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="max-w-xl space-y-8 lg:max-w-lg">

              {/* Tag */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full text-sm font-medium">
                Lifestyle · Wellness · Community
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white tracking-tight">
                Solu helps women<br />live healthier lives.
              </h1>

              {/* Subtext */}
              <p className="text-white/85 text-lg leading-relaxed font-light max-w-md">
                Your body changes every week — your life should reflect that. Solu aligns your daily habits with your natural hormonal cycle, so you always know what your body needs, and why.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#download"
                  className="bg-white text-[#F7941D] px-8 py-4 rounded-full font-bold text-base hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  Try Solu for Free
                </a>
                <a
                  href="#why-solu"
                  className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-base border border-white/30 hover:bg-white/25 transition-all"
                >
                  Why Solu →
                </a>
              </div>

              {/* Social proof */}
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
                    {[1,2,3,4,5].map((s) => <span key={s} className="text-white text-sm">★</span>)}
                  </div>
                  <p className="text-white/70 text-xs mt-0.5 font-medium">Loved by 10,000+ women</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
