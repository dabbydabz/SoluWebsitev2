export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative overflow-hidden">

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 pointer-events-none" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-10">

        {/* Logo / wordmark */}
        <div className="flex items-center justify-center gap-3">
          <img
            src="/icon.svg"
            alt="Solu"
            className="w-10 h-10 invert"
          />
          <span className="text-2xl font-semibold tracking-tight">Solu</span>
        </div>

        {/* Divider */}
        <div className="w-px h-12 bg-white/20 mx-auto" />

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-normal leading-tight">
            We&apos;re making<br />
            <span style={{ fontFamily: "cursive", fontStyle: "italic" }}>improvements</span>
          </h1>
          <p className="text-white/50 text-lg font-light max-w-md mx-auto leading-relaxed">
            The site is currently undergoing scheduled maintenance.
            We&apos;ll be back shortly.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-white/20 mx-auto" />

        {/* Footer note */}
        <p className="text-white/25 text-sm tracking-wide uppercase">
          Thank you for your patience
        </p>

      </div>
    </main>
  )
}
