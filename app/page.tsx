import { SoluHeader } from "@/components/solu-header"
import { SoluHero } from "@/components/solu-hero"
import { SoluTrack } from "@/components/solu-track"
import { SoluFeatures } from "@/components/solu-features"
import { SoluTestimonials } from "@/components/solu-testimonials"
import { SoluDownload } from "@/components/solu-download"
import { SoluFooter } from "@/components/solu-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <SoluHeader />
      <SoluHero />
      <SoluTrack />
      {/* Desktop: white → dark gradient bridge (track → features) */}
      <div className="hidden sm:block h-24 bg-gradient-to-b from-white to-[#0D0D0D]" />
      <SoluFeatures />
      {/* Desktop: dark → warm white gradient bridge (features → testimonials) */}
      <div className="hidden sm:block h-24 bg-gradient-to-b from-[#0D0D0D] to-[#FBF8F4]" />
      {/* Mobile: white → warm white subtle bridge (features is hidden on mobile) */}
      <div className="sm:hidden h-10 bg-gradient-to-b from-white to-[#FBF8F4]" />
      <SoluTestimonials />
      <SoluDownload />
      <SoluFooter />
    </main>
  )
}
