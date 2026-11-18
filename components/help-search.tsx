"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { searchArticles, type HelpArticle } from "@/lib/help-articles"

export function HelpSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<HelpArticle[]>([])
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setQuery(val)
    if (val.trim().length > 1) {
      setResults(searchArticles(val))
      setOpen(true)
    } else {
      setResults([])
      setOpen(false)
    }
  }

  function handleBlur() {
    setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-md px-5 py-3.5 border border-orange-100 focus-within:border-[#F7941D] transition-colors">
        <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => query.trim().length > 1 && setOpen(true)}
          onBlur={handleBlur}
          placeholder="Search for answers..."
          className="flex-1 text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
          aria-label="Search help articles"
          aria-autocomplete="list"
          aria-expanded={open}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); setOpen(false); inputRef.current?.focus() }}
            className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden z-20 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-gray-500">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            <ul role="listbox">
              {results.slice(0, 8).map((article) => (
                <li key={article.slug} role="option">
                  <Link
                    href={`/help/${article.slug}`}
                    className="flex flex-col gap-0.5 px-5 py-3.5 hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm font-medium text-gray-900">{article.title}</span>
                    <span className="text-xs text-gray-500 line-clamp-1">{article.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
