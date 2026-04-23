"use client"
import React, { useEffect, useState } from "react"

export function SoluHeader() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 10) {
        setVisible(true)
      } else if (currentY > lastScrollY) {
        setVisible(false) // scrolling down — hide
      } else {
        setVisible(true) // scrolling up — show
      }
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-2xl border border-white/70 rounded-full px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src="/images/solu-logo-full.png" alt="Solu" className="h-9 w-auto" />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Why Solu", href: "#why-solu" },
            { label: "Our Story", href: "#", disabled: true },
            { label: "For You", href: "#for-you" },
          ].map((item) => (
            <a
              key={item.label}
              href={(item as any).disabled ? undefined : item.href}
              onClick={(item as any).disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined}
              className={`text-sm font-medium transition-colors ${
                (item as any).disabled
                  ? "text-gray-300 cursor-default pointer-events-none"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#download"
          className="shrink-0 bg-[#F7941D] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#e8850d] transition-all shadow-md shadow-orange-200/60 whitespace-nowrap"
        >
          Try Solu for Free
        </a>
      </div>
    </header>
  )
}
