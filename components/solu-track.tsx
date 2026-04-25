"use client"
import { useState, useRef, useEffect } from "react"

const CycleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-7 8-7 12a7 7 0 0014 0c0-4-7-12-7-12z" />
    <path d="M12 14v-4" />
  </svg>
)

const MovementIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="1.5" />
    <path d="M9 12l1.5-4.5 1.5 3 1.5-1.5 1.5 3" />
    <path d="M7 20l2-5h6l2 5" />
    <path d="M10 15l-1 5M14 15l1 5" />
  </svg>
)

const CommunityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <circle cx="17" cy="8" r="2" />
    <path d="M21 21v-1.5a3 3 0 00-2.5-2.97" />
  </svg>
)

const SleepIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const NutritionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
    <path d="M12 9v4M10 11h4" />
  </svg>
)

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const tiles = [
  {
    label: "Hormonal Health",
    Icon: CycleIcon,
    heading: "Live in sync with",
    headingItalic: "your cycle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
    description: "Your hormones shift every week — and so does your energy, mood, and strength. Solu maps your cycle phases so your lifestyle always works with your body, never against it.",
    ctaLabel: "Learn More",
    insight: { phase: "Follicular Phase", day: "Cycle day 8", text: "Your energy is rising. Great time for high-intensity workouts and creative projects.", detail: "Estimated ovulation in 6 days" },
  },
  {
    label: "Movement",
    Icon: MovementIcon,
    heading: "Move the way your body",
    headingItalic: "wants to",
    image: "/images/tile-movement.png",
    tileObjectPosition: "25% center",
    description: "Stop fighting generic workout plans. Solu recommends movement that matches your energy levels and cycle phase — so you train smarter, recover faster, and feel stronger.",
    ctaLabel: "Learn More",
    insight: { phase: "Activity", day: "3 sessions this week", text: "Your strength peaks in the follicular phase. Try resistance training today.", detail: "Recovery score: 82%" },
  },
  {
    label: "Community",
    Icon: CommunityIcon,
    heading: "Grow alongside women",
    headingItalic: "like you",
    image: "/images/tile-community.png",
    tileObjectPosition: "20% center",
    description: "Wellness is better together. Solu connects you with a community of women on the same journey — sharing wins, accountability, and real talk about living well.",
    ctaLabel: "Join Community",
    insight: { phase: "Community", day: "2,400 women online now", text: "\"Solu helped me understand my body in ways no other app ever did.\"", detail: "— Amara K., Solu member" },
  },
  {
    label: "Nutrition",
    Icon: NutritionIcon,
    heading: "Nourish yourself",
    headingItalic: "with intention",
    image: "/images/tile-nutrition.png",
    tileObjectPosition: "center center",
    description: "Your nutritional needs shift with your cycle. Solu guides your food choices based on where you are in your month — so every meal supports how you actually feel.",
    ctaLabel: "Learn More",
    insight: { phase: "Nutrition", day: "Goals on track", text: "Iron-rich foods are especially beneficial this week. Try lentils or spinach.", detail: "Protein: 72% · Carbs: 58%" },
  },
  {
    label: "Sleep & Recovery",
    Icon: SleepIcon,
    heading: "Rest deeply,",
    headingItalic: "wake up ready",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=85",
    description: "Sleep quality changes throughout your cycle. Solu tracks your rest patterns and gives you personalized insights to help you wake up feeling truly restored.",
    ctaLabel: "Learn More",
    insight: { phase: "Sleep", day: "7.5 hrs average", text: "Your sleep tends to be lighter in the luteal phase. Wind-down routines help.", detail: "Sleep quality: 78%" },
  },
]

export function SoluTrack() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const active = expanded !== null ? tiles[expanded] : null
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTiles = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" })
  }

  const handleTileScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const max = el.scrollWidth - el.clientWidth
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  // Lock body scroll on mobile when a tile is expanded
  useEffect(() => {
    if (typeof window === "undefined") return
    if (expanded !== null && window.innerWidth < 640) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [expanded])

  const goNext = () => {
    if (expanded === null) return
    setExpanded(Math.min(expanded + 1, tiles.length - 1))
  }
  const goPrev = () => {
    if (expanded === null) return
    setExpanded(Math.max(expanded - 1, 0))
  }

  return (
    <section id="why-solu" className="py-16 sm:py-24 bg-white overflow-hidden pt-10 sm:pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Everything you need<br />
            <span className="text-[#F7941D]">to feel your best.</span>
          </h2>
        </div>

        {/* Horizontal scroll tiles */}
        <div
          ref={scrollRef}
          onScroll={handleTileScroll}
          className="flex gap-4 overflow-x-auto pb-4 sm:pb-6 -mx-6 px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tiles.map((tile, i) => (
            <div
              key={tile.label}
              className="relative shrink-0 w-[260px] h-[336px] sm:w-[300px] sm:h-[420px] rounded-[28px] overflow-hidden group cursor-pointer"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: (tile as any).tileObjectPosition || "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Top-left: icon + label pill — white glass, dark text for universal readability */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full px-3 py-1.5 text-gray-700">
                <tile.Icon />
                <span className="text-xs font-semibold">{tile.label}</span>
              </div>

              {/* Top-right: + button */}
              <button
                onClick={() => setExpanded(i)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label={`Expand ${tile.label}`}
              >
                <span className="text-gray-700 text-xl font-light leading-none">+</span>
              </button>

              {/* Bottom: text */}
              <div className="absolute bottom-6 left-5 right-5">
                <p className="text-white text-lg font-semibold leading-snug">
                  {tile.heading} <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "1.4em", lineHeight: 1 }}>{tile.headingItalic}.</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE: Oura-style progress bar + navigation arrows ── */}
        <div className="flex sm:hidden items-center gap-3 mt-4">
          {/* Thin scroll progress bar */}
          <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollTiles("left")}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center transition-colors text-gray-500 hover:border-gray-400 shadow-sm"
              aria-label="Previous tiles"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollTiles("right")}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center transition-colors text-gray-500 hover:border-gray-400 shadow-sm"
              aria-label="Next tiles"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>

      {/* ── Expanded modal — MOBILE layout ── */}
      {active && (
        <div className="sm:hidden fixed inset-0 z-50 flex flex-col bg-black">
          {/* Image — top 60% */}
          <div className="relative h-[58%] shrink-0">
            <img
              src={active.image}
              alt={active.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: (active as any).tileObjectPosition || "center center" }}
            />
            {/* Gradient fade to black at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            {/* Category pill */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full px-3 py-1.5 text-gray-700">
              <active.Icon />
              <span className="text-xs font-semibold">{active.label}</span>
            </div>
            {/* Close button */}
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-5 right-5 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-gray-700 text-xl"
            >
              ×
            </button>
          </div>

          {/* Content — bottom 42% with gradient-coded bg */}
          <div className="flex-1 bg-[#111] px-6 py-5 flex flex-col gap-3 overflow-y-auto" style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}>
            <h3 className="text-white text-2xl font-bold leading-tight">
              {active.heading} <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "1.3em", lineHeight: 1 }}>{active.headingItalic}.</span>
            </h3>
            <p className="text-white/65 text-sm leading-relaxed font-light flex-1">
              {active.description}
            </p>
            {/* CTA + nav arrows */}
            <div className="flex items-center justify-between pt-1">
              <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-sm">
                {(active as any).ctaLabel ?? "Learn More"}
              </button>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  disabled={expanded === 0}
                  className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white disabled:opacity-25 transition-opacity"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={goNext}
                  disabled={expanded === tiles.length - 1}
                  className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white disabled:opacity-25 transition-opacity"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Expanded modal — DESKTOP layout (sm+) ── */}
      {active && (
        <div
          className="hidden sm:flex fixed inset-0 z-50 items-center justify-center p-8 bg-black/60 backdrop-blur-sm"
          onClick={() => setExpanded(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-[40px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image.replace("w=800", "w=1400")}
              alt={active.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2">
              <active.Icon />
              <span className="text-white text-sm font-semibold">{active.label}</span>
            </div>

            <button
              onClick={() => setExpanded(null)}
              className="absolute top-6 right-6 w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors text-gray-700 text-xl"
            >
              ×
            </button>

            <div className="absolute bottom-10 left-8 max-w-md space-y-4">
              <h3 className="text-white text-4xl font-bold leading-tight">
                {active.heading} <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "1.4em", lineHeight: 1 }}>{active.headingItalic}.</span>
              </h3>
              <p className="text-white/75 text-base leading-relaxed font-light">
                {active.description}
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-50 transition-colors">
                {(active as any).ctaLabel ?? "Learn More"}
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-8 w-72">
              <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-[24px] p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <active.Icon />
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{active.insight.phase}</span>
                </div>
                <p className="text-white font-bold text-2xl">{active.insight.day}</p>
                <p className="text-white/70 text-sm leading-relaxed font-light">{active.insight.text}</p>
                <p className="text-[#F7941D] text-xs font-medium">{active.insight.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
