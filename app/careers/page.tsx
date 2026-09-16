import Image from "next/image"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import { CareersRoles } from "@/components/careers-roles"

export const metadata = {
  title: "Careers — Solu",
  description: "Join the team building the first wellness app designed around how women actually live. Equity-based roles, fully remote.",
  alternates: {
    canonical: "https://www.solu.ae/careers",
  },
  openGraph: {
    title: "Careers — Solu",
    description: "Join the team building the first wellness app designed around how women actually live. Equity-based roles, fully remote.",
    url: "https://www.solu.ae/careers",
    siteName: "Solu",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.solu.ae/opengraph-image", width: 1200, height: 630, alt: "Solu — Women's health, fitness & wellness in sync with your cycle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Solu",
    description: "Join the team building the first wellness app designed around how women actually live. Equity-based roles, fully remote.",
    images: ["https://www.solu.ae/opengraph-image"],
  },
}

const valuePills = [
  { label: "Real equity", icon: "◆" },
  { label: "Fully remote", icon: "◎" },
  { label: "Mission first", icon: "♡" },
]

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <SoluHeader />

      {/* Hero — two-column, image right */}
      <section className="relative min-h-[calc(100vh-2rem)] flex items-center overflow-hidden">

        {/* Left column — text */}
        <div className="relative z-10 w-full lg:w-[52%] px-6 lg:pl-12 xl:pl-20 pt-32 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-[#C06A05] rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              We&apos;re hiring
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-6">
              Want to build something that matters{" "}
              <span className="text-[#F7941D]">for women?</span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
              Solu is a small, mission-driven team building the first wellness app designed around how women actually live. We&apos;re looking for people who care deeply about that mission and want real ownership in what we&apos;re creating.
            </p>

            {/* Value pills — compact, replaces separate section */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1v2M7 11v2M1.5 7h2M10.5 7h2M3.1 3.1l1.4 1.4M9.5 9.5l1.4 1.4M3.1 10.9l1.4-1.4M9.5 4.5l1.4-1.4" stroke="#F7941D" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span className="text-sm font-medium text-gray-700">Real equity</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="5.5" stroke="#F7941D" strokeWidth="1.2"/><path d="M7 1.5a5.5 5.5 0 0 1 0 11M1.5 7h11" stroke="#F7941D" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span className="text-sm font-medium text-gray-700">Fully remote</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
                <svg width="14" height="14" fill="none" viewBox="0 -1 14 16" aria-hidden="true"><path d="M7 12S1.5 8.5 1.5 5a5.5 5.5 0 0 1 11 0C12.5 8.5 7 12 7 12z" stroke="#F7941D" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                <span className="text-sm font-medium text-gray-700">Mission first</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — image, desktop only */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]">
          <Image
            src="/images/careers-hero.jpg"
            alt="Two women laughing together after a workout"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient fade: white on left edge, transparent on right */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        {/* Mobile: subtle orange blob instead of image */}
        <div className="lg:hidden absolute top-0 right-0 w-[400px] h-[400px] bg-[#F7941D] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Open Roles */}
      <section className="px-6 lg:px-12 pb-28 border-t border-gray-100">
        <div className="max-w-3xl mx-auto pt-10">
          <h2 className="text-base font-semibold text-[#F7941D] uppercase tracking-widest mb-6">Open roles</h2>
          <CareersRoles />
        </div>
      </section>

      <SoluFooter />
    </main>
  )
}
