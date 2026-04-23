export function SoluPhone() {
  return (
    <section className="py-32 bg-[#1A1A1A] overflow-hidden relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#F7941D] text-sm font-semibold uppercase tracking-widest mb-4">The app</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            All your wellness,<br />
            <span className="italic text-[#F7941D]">one place.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 leading-relaxed">
            A calm, intuitive experience that keeps you focused on what matters — feeling great.
          </p>
        </div>

        {/* iPhone mockup */}
        <div className="flex justify-center">
          <div className="relative w-[280px] sm:w-[320px]">
            {/* Phone outer shell */}
            <div className="relative bg-[#2A2A2A] rounded-[50px] p-3 shadow-2xl border border-white/10">
              {/* Screen */}
              <div className="bg-[#111111] rounded-[40px] overflow-hidden aspect-[9/19.5] flex flex-col items-center justify-center relative">
                {/* Dynamic island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10" />

                {/* Screen content — blank with Solu branding */}
                <div className="flex flex-col items-center gap-4 px-6 text-center">
                  <img
                    src="/images/solu-logo-v2.png"
                    alt="Solu"
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-white/30 text-xs tracking-widest uppercase">Coming soon</p>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute left-[-4px] top-[100px] w-1 h-10 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute left-[-4px] top-[130px] w-1 h-14 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute left-[-4px] top-[155px] w-1 h-14 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute right-[-4px] top-[120px] w-1 h-20 bg-[#3A3A3A] rounded-r-full" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 text-center">
          {[
            { number: "10K+", label: "Women using Solu" },
            { number: "6", label: "Wellness pillars" },
            { number: "4.9★", label: "App Store rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-serif text-3xl sm:text-4xl font-normal">{stat.number}</p>
              <p className="text-white/40 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
