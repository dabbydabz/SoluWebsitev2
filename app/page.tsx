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
      <SoluFeatures />
      <SoluTestimonials />
      <SoluDownload />
      <SoluFooter />
    </main>
  )
}
