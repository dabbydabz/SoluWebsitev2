export function SoluDownload() {
  return (
    <section id="download" className="py-32 relative overflow-hidden bg-[#0D0D0D]">
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F7941D] opacity-[0.15] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5B9A2E] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <img src="/images/solu-logo-v2.png" alt="Solu" className="w-20 h-20 mx-auto mb-8 object-contain" />

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Start your wellness<br />
          <span className="text-[#F7941D]">journey today.</span>
        </h2>

        <p className="text-white/50 text-xl leading-relaxed max-w-xl mx-auto mb-12 font-light">
          Join thousands of women who've made Solu part of their daily routine. Free to download, always.
        </p>

        {/* App store buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            {
              icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>,
              subtitle: "Download on the",
              title: "App Store",
            },
            {
              icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.65.19.98.07l12.46-7.2-2.78-2.78-10.66 9.91zM.29 1.47C.1 1.8 0 2.19 0 2.62v18.76c0 .43.1.82.29 1.15l.07.07 10.5-10.5v-.25L.36 1.4l-.07.07zM20.67 10.66l-2.93-1.7-3.09 3.09 3.09 3.09 2.95-1.71c.84-.49.84-1.28-.02-1.77zM3.18.24L15.64 7.44l-2.78 2.78L2.2.31c.32-.13.68-.11.98-.07z" /></svg>,
              subtitle: "Get it on",
              title: "Google Play",
            },
          ].map((btn) => (
            <a
              key={btn.title}
              href="#"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-7 py-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20 shadow-lg"
            >
              {btn.icon}
              <div className="text-left">
                <p className="text-[11px] text-white/50 leading-none mb-0.5 font-medium">{btn.subtitle}</p>
                <p className="text-base font-bold leading-none">{btn.title}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-white/25 text-sm mt-8 font-medium">No subscription required to get started.</p>
      </div>
    </section>
  )
}
