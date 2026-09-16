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

const values = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Real equity",
    body: "Equity-based compensation until seed funding closes. You'll own a piece of what you help build.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#F7941D" strokeWidth="1.5"/>
        <path d="M11 2a9 9 0 0 1 0 18M2 11h18" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 2c-2.5 3-4 5.5-4 9s1.5 6 4 9M11 2c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="#F7941D" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Fully remote",
    body: "Work from anywhere. We care about impact, not hours or location.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M11 19.5S3 14 3 8.5a8 8 0 0 1 16 0C19 14 11 19.5 11 19.5z" stroke="#F7941D" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="8.5" r="2.5" stroke="#F7941D" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Mission first",
    body: "Every role directly shapes how women experience their health every day.",
  },
]

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <SoluHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.07] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-[#C06A05] rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
            We're hiring
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
            Build something that<br />
            matters <span className="text-[#F7941D]">for women.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed font-light max-w-xl">
            Solu is a small, mission-driven team building the first wellness app designed around how women actually live. We're looking for people who care deeply about that mission and want real ownership in what we're creating.
          </p>
        </div>
      </section>

      {/* Values strip */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-gray-100 pt-12 grid sm:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.heading} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  {v.icon}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{v.heading}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="px-6 lg:px-12 pb-28">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-gray-100 pt-12">
            <p className="text-[#F7941D] text-xs font-semibold uppercase tracking-widest mb-6">Open roles</p>
            <CareersRoles />
          </div>
        </div>
      </section>

      <SoluFooter />
    </main>
  )
}
