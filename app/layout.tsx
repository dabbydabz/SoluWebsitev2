import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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

export const metadata: Metadata = {
  title: "Solu — Live well, feel great.",
  description: "Solu helps women live healthier lives. Track your workouts, sleep, nutrition, cycle and more — all in one beautifully simple app.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`} style={{ "--font-display": "var(--font-cormorant)" } as React.CSSProperties}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
