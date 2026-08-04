import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Solu — Women's health, fitness & wellness in sync with your cycle"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top orange bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#F7941D",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.solu.ae/images/solu-logo-full.png"
          width={280}
          height={84}
          style={{ objectFit: "contain", marginBottom: 28 }}
        />

        {/* Tagline */}
        <p
          style={{
            color: "#6B7280",
            fontSize: 30,
            fontWeight: 400,
            margin: 0,
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.45,
          }}
        >
          Women&apos;s health, fitness &amp; wellness in sync with your cycle
        </p>

        {/* Bottom orange bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#F7941D",
          }}
        />
      </div>
    ),
    { ...size },
  )
}
