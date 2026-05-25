"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import type { Post } from "@/lib/posts"

const categoryColours: Record<string, string> = {
  "Hormonal Health": "bg-rose-100 text-rose-600",
  "Nutrition": "bg-green-100 text-green-600",
  "Movement": "bg-orange-100 text-[#F7941D]",
  "Sleep": "bg-blue-100 text-blue-600",
  "Community": "bg-purple-100 text-purple-600",
}

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const ClearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

interface Props {
  posts: Post[]
  categories: string[]
}

export function BlogGrid({ posts, categories }: Props) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return posts.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
        : true
      return matchesCategory && matchesQuery
    })
  }, [posts, query, activeCategory])

  return (
    <div className="space-y-8">

      {/* Search bar */}
      <div className="relative max-w-xl">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-10 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#F7941D] focus:ring-2 focus:ring-[#F7941D]/10 transition-all shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <ClearIcon />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
            activeCategory === null
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(query || activeCategory) && (
        <p className="text-sm text-gray-400 font-medium">
          {filtered.length === 0
            ? "No articles found"
            : `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`}
        </p>
      )}

      {/* Post grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-[#F7941D] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-light flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                  <span className="text-[#F7941D] text-sm font-semibold">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-gray-900 font-bold text-lg mb-1">No articles found</p>
          <p className="text-gray-400 text-sm">Try a different keyword or browse all categories.</p>
          <button
            onClick={() => { setQuery(""); setActiveCategory(null) }}
            className="mt-5 text-sm font-semibold text-[#F7941D] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
