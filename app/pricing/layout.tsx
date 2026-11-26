import type { Metadata } from "next"

const title = "Pricing: Solu Free and Solu+ Plans | Solu"
const description =
  "Compare Solu Free and Solu+. Free cycle tracking and four-phase guidance, or Solu+ from AED 34.99/month. Founding members pay AED 149.99/year."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.solu.ae/pricing",
  },
  openGraph: {
    title,
    description,
    url: "https://www.solu.ae/pricing",
    siteName: "Solu",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.solu.ae/opengraph-image", width: 1200, height: 630, alt: "Solu: Women's health, fitness & wellness in sync with your cycle" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.solu.ae/opengraph-image"],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
