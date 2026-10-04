import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const SITE_URL = "https://www.solu.ae"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Women's Wellness App That Works With Your Cycle | Solu",
  description: "The women's wellness app that works with your cycle, not against it. Track your period, workouts, sleep and nutrition in one beautifully simple app.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Women's Wellness App That Works With Your Cycle | Solu",
    description: "The women's wellness app that works with your cycle, not against it. Track your period, workouts, sleep and nutrition in one beautifully simple app.",
    url: SITE_URL,
    siteName: "Solu",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Wellness App That Works With Your Cycle | Solu",
    description: "The women's wellness app that works with your cycle, not against it. Track your period, workouts, sleep and nutrition in one beautifully simple app.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`} style={{ "--font-display": "var(--font-cormorant)" } as React.CSSProperties}>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              "name": "Solu",
              "url": "https://www.solu.ae",
              "description": "The women's wellness app that works with your cycle, not against it.",
              "publisher": { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              "name": "Solu",
              "url": "https://www.solu.ae",
              "logo": "https://www.solu.ae/icon.png",
              "description": "Women's wellness app that personalises health guidance to the menstrual cycle.",
              "foundingDate": "2024",
              "areaServed": "Worldwide",
              "sameAs": [
                "https://www.instagram.com/solu.ae",
                "https://www.tiktok.com/@solu.ae",
              ],
              "knowsAbout": [
                "Women's health",
                "Menstrual cycle tracking",
                "Hormonal health",
                "Cycle syncing",
                "Female fitness",
              ],
            },
          ]}
        />
        {children}
        <Analytics />
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
