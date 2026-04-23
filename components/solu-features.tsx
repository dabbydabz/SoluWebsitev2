export function SoluFeatures() {
  return (
    <section id="for-you" className="py-32 bg-[#0D0D0D] relative overflow-hidden">

      {/* Background glows — Solu orange & green */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.18] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5B9A2E] opacity-[0.12] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F7941D] opacity-[0.07] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-[#F7941D] rounded-full text-sm font-semibold mb-6">
            The Solu app
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            All your wellness,{" "}
            <span className="text-[#F7941D]">one place.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 leading-relaxed font-light">
            A calm, intuitive experience that keeps you focused on what matters — feeling great every day.
          </p>
        </div>

        {/* Phone + floating cards */}
        <div className="relative flex items-center justify-center min-h-[640px]">

          {/* ── Left cards ── */}
          {/* Last Workout */}
          <div className="hidden lg:flex absolute left-0 top-[10%] flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 w-[220px] shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-2xl flex items-center justify-center text-xl">💪</div>
                <div>
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Last workout</p>
                  <p className="text-white font-bold text-sm">Strength · 45 min</p>
                </div>
              </div>
              <div className="flex items-end gap-1 mt-2">
                {[60, 80, 55, 90, 70, 85, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h * 0.28}px`, background: i === 3 ? "#F7941D" : "rgba(247,148,29,0.25)" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sleep quality */}
          <div className="hidden lg:flex absolute left-4 bottom-[15%]">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 w-[210px] shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-2xl flex items-center justify-center text-xl">😴</div>
                <div>
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Sleep</p>
                  <p className="text-white font-bold text-sm">7.5 hrs avg</p>
                </div>
              </div>
              <div className="mt-3 bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-[#F7941D] rounded-full" style={{ width: "78%" }} />
              </div>
              <p className="text-white/40 text-xs mt-1.5 font-medium">78% sleep quality</p>
            </div>
          </div>

          {/* ── Right cards ── */}
          {/* Nutrition */}
          <div className="hidden lg:flex absolute right-0 top-[10%]">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 w-[220px] shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-2xl flex items-center justify-center text-xl">🥗</div>
                <div>
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Nutrition</p>
                  <p className="text-white font-bold text-sm">Goals on track</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {[{ label: "Protein", val: "72%", color: "bg-[#F7941D]" }, { label: "Carbs", val: "58%", color: "bg-green-400" }, { label: "Fats", val: "81%", color: "bg-blue-400" }].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1">
                      <div className={`w-4 h-4 rounded-full ${m.color} opacity-80`} />
                    </div>
                    <p className="text-white/80 text-[10px] font-bold">{m.val}</p>
                    <p className="text-white/30 text-[9px]">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cycle */}
          <div className="hidden lg:flex absolute right-4 bottom-[15%]">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 w-[210px] shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-rose-500/20 rounded-2xl flex items-center justify-center text-xl">🩸</div>
                <div>
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Cycle</p>
                  <p className="text-white font-bold text-sm">Day 14 of 28</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1.5 rounded-full"
                    style={{ background: i < 14 ? "#F7941D" : "rgba(255,255,255,0.1)" }}
                  />
                ))}
              </div>
              <p className="text-white/40 text-xs mt-2 font-medium">Ovulation window</p>
            </div>
          </div>

          {/* ── Centre iPhone ── */}
          <div className="relative z-10 w-[220px] sm:w-[260px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#F7941D]/30 to-transparent blur-[30px] scale-110 pointer-events-none" />

            {/* Phone shell */}
            <div className="relative bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] rounded-[52px] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10">
              {/* Screen */}
              <div className="bg-[#0A0A0A] rounded-[44px] overflow-hidden aspect-[9/19.5] flex flex-col items-center justify-center relative">
                {/* Dynamic island */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 border border-white/5" />
                {/* Screen content */}
                <div className="flex flex-col items-center gap-3 px-4 text-center">
                  <img src="/images/solu-favicon.png" alt="Solu" className="w-14 h-14 object-contain" />
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-semibold">Coming soon</p>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/15 rounded-full" />
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute left-[-3px] top-[95px] w-[3px] h-8 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute left-[-3px] top-[132px] w-[3px] h-12 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute left-[-3px] top-[155px] w-[3px] h-12 bg-[#3A3A3A] rounded-l-full" />
            <div className="absolute right-[-3px] top-[115px] w-[3px] h-16 bg-[#3A3A3A] rounded-r-full" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-24 text-center">
          {[
            { number: "10K+", label: "Women using Solu" },
            { number: "6", label: "Wellness pillars" },
            { number: "4.9★", label: "App Store rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-extrabold text-3xl sm:text-4xl tracking-tight">{stat.number}</p>
              <p className="text-white/40 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
