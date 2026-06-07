"use client"
import React, { useEffect, useState } from "react"

export function SoluHeader() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      if (currentY < 10) {
        setVisible(true)
      } else if (currentY > lastScrollY) {
        setVisible(false)
        if (menuOpen) setMenuOpen(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentY)
    }
    // Set initial state in case page loads already scrolled
    setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, menuOpen])

  const navItems = [
    { label: "Why Solu", href: "/#why-solu" },
    { label: "For You", href: "/#for-you" },
    { label: "Health Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  const renderLabel = (item: typeof navItems[0]) => {
    if (!("cursiveWord" in item) || !item.cursiveWord) return item.label
    const [before] = item.label.split(item.cursiveWord)
    return (
      <>
        {before}
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "1.1em" }}>
          {item.cursiveWord}
        </span>
      </>
    )
  }

  return (
    <>
      {/* ── DESKTOP pill nav (md+) — unchanged ── */}
      <header
        className={`fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center px-4 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className={`w-full max-w-2xl backdrop-blur-2xl rounded-full px-4 py-2.5 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "bg-white/95 border border-gray-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.10)]" : "bg-white/60 border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"}`}>
          <a href="/" className="shrink-0">
            <img src="/images/solu-logo-full.png" alt="Solu" className="h-9 w-auto" />
          </a>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
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
          <button
            data-tally-open="vGdWa0" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
            className="btn-pulse-orange shrink-0 bg-[#F7941D] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#e8850d] transition-all shadow-md shadow-orange-200/60 whitespace-nowrap cursor-pointer"
          >
            Try Solu for Free
          </button>
        </div>
      </header>

      {/* ── MOBILE: single floating glass pill (logo + hamburger) ── */}
      <div
        className={`fixed top-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        {/* Glass pill — darkens on white-background pages */}
        <div className={`backdrop-blur-2xl rounded-2xl px-4 py-1.5 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/90 border border-gray-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.10)]" : "bg-white/25 border border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"}`}>
          <a href="/" className="shrink-0">
            <img src="/images/solu-logo-full.png" alt="Solu" className="h-9 w-auto drop-shadow-sm" />
          </a>

          {/* Hamburger in circle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`w-10 h-10 rounded-full flex flex-col items-center justify-center transition-all border ${scrolled ? "border-gray-300/60" : "border-white/50"}`}
          >
            <span
              className={`block w-[17px] h-[1.5px] rounded-full shadow-sm transition-all duration-300 origin-center ${scrolled ? "bg-gray-700" : "bg-white"} ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-[17px] h-[1.5px] rounded-full shadow-sm transition-all duration-300 origin-center mt-[5px] ${scrolled ? "bg-gray-700" : "bg-white"} ${
                menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── MOBILE: true glass panel slides from top, full screen height ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Semi-translucent frosted glass — shows blurred content behind */}
        <div className="w-full h-full bg-white/40 backdrop-blur-3xl border border-white/30 flex flex-col pt-32 pb-16 px-8">
          <div className="flex flex-col items-start gap-8 flex-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={(item as any).disabled ? undefined : item.href}
                onClick={() => { if (!(item as any).disabled) setMenuOpen(false) }}
                className={`text-3xl font-bold tracking-tight transition-colors ${
                  (item as any).disabled
                    ? "text-gray-400 pointer-events-none"
                    : "text-gray-900 hover:text-[#F7941D]"
                }`}
              >
                {renderLabel(item)}
              </a>
            ))}
          </div>
          {/* CTA at bottom */}
          <button
            data-tally-open="vGdWa0" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
            onClick={() => setMenuOpen(false)}
            className="bg-[#F7941D] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-300/30 text-center cursor-pointer"
          >
            Try Solu for Free
          </button>
        </div>
      </div>
    </>
  )
}
