import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You're in — Solu",
  description: "Welcome to the Solu waitlist.",
  robots: { index: false, follow: false },
}

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F7941D] opacity-[0.12] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#5B9A2E] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/images/solu-logo-full.png"
            alt="Solu"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Tick */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#F7941D]/15 border border-[#F7941D]/30 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <p className="text-[#F7941D] text-sm font-semibold uppercase tracking-widest">
            You're on the list
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Welcome to Solu.
          </h1>
          <p className="text-white/50 text-lg leading-relaxed font-light max-w-sm mx-auto">
            Thank you for joining. We're building something we genuinely believe will change how women experience their health, and we can't wait to share it with you.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-white/10 mx-auto" />

        {/* What's next */}
        <div className="space-y-4 text-left">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest text-center">What happens next</p>
          <div className="space-y-3">
            {[
              { step: "1", text: "We'll email you as soon as early access opens." },
              { step: "2", text: "You'll be among the first to try the full Solu experience." },
              { step: "3", text: "Your feedback will shape what we build next." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <span className="w-6 h-6 rounded-full bg-[#F7941D]/20 border border-[#F7941D]/30 text-[#F7941D] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </span>
                <p className="text-white/60 text-sm leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to site */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 text-sm font-medium hover:text-white/70 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to solu.ae
        </Link>

      </div>
    </main>
  )
}
