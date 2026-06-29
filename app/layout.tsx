import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
  title: "Women's health, fitness & wellness in sync with your cycle | Solu",
  description: "The women's wellness app that works with your cycle, not against it. Track your period, workouts, sleep and nutrition in one beautifully simple app.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Women's health, fitness & wellness in sync with your cycle | Solu",
    description: "The women's wellness app that works with your cycle, not against it. Track your period, workouts, sleep and nutrition in one beautifully simple app.",
    url: SITE_URL,
    siteName: "Solu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/icon.svg`,
        width: 512,
        height: 512,
        alt: "Solu — Women's wellness app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's health, fitness & wellness in sync with your cycle | Solu",
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
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Solu",
                "url": "https://www.solu.ae",
                "description": "The women's wellness app that works with your cycle, not against it.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.solu.ae/blog?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Solu",
                "url": "https://www.solu.ae",
                "logo": "https://www.solu.ae/icon.svg",
                "description": "Women's wellness app that personalises health guidance to the menstrual cycle.",
                "foundingDate": "2024",
                "areaServed": "Worldwide",
                "knowsAbout": [
                  "Women's health",
                  "Menstrual cycle tracking",
                  "Hormonal health",
                  "Cycle syncing",
                  "Female fitness",
                ],
              },
            ]),
          }}
        />
        {children}
        <Analytics />
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
