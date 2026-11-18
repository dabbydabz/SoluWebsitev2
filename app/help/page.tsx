import type { Metadata } from "next"
import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import { HelpSearch } from "@/components/help-search"
import {
  helpCategories,
  helpArticles,
  getArticlesByCategory,
  popularSlugs,
} from "@/lib/help-articles"

export const metadata: Metadata = {
  title: "Help Centre | Solu",
  description: "Find answers to your questions about Solu — cycle tracking, phases, subscriptions, privacy, and more.",
  alternates: { canonical: "https://www.solu.ae/help" },
  openGraph: {
    title: "Help Centre | Solu",
    description: "Find answers to your questions about Solu.",
    url: "https://www.solu.ae/help",
  },
}

const categoryIcons: Record<string, React.ReactNode> = {
  "getting-started": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
    </svg>
  ),
  "cycle-and-phases": (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  "privacy-and-security": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
  ),
  subscriptions: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  ),
  "using-solu": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
    </svg>
  ),
  hangouts: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

const categoryColors: Record<string, string> = {
  "getting-started": "bg-orange-50 text-[#F7941D]",
  "cycle-and-phases": "bg-purple-50 text-purple-500",
  "privacy-and-security": "bg-green-50 text-green-500",
  subscriptions: "bg-yellow-50 text-yellow-500",
  "using-solu": "bg-pink-50 text-pink-500",
  hangouts: "bg-rose-50 text-rose-500",
}

export default function HelpPage() {
  const popularArticles = popularSlugs
    .map((slug) => helpArticles.find((a) => a.slug === slug))
    .filter(Boolean)

  return (
    <>
      <SoluHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-orange-50 to-white pt-28 pb-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              How can we help?
            </h1>
            <p className="text-gray-500 mb-8 text-base sm:text-lg">
              Guides and answers for everything Solu.
            </p>
            <HelpSearch />
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Browse by topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpCategories.map((cat) => {
              const articles = getArticlesByCategory(cat.slug)
              return (
                <Link
                  key={cat.slug}
                  href={`/help/category/${cat.slug}`}
                  className="group flex flex-col gap-3 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-orange-200 transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${categoryColors[cat.slug]}`}>
                    {categoryIcons[cat.slug]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#F7941D] transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{cat.description}</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-auto">
                    {articles.length} article{articles.length !== 1 ? "s" : ""}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Popular articles */}
        <section className="max-w-5xl mx-auto px-6 pb-14">
          <h2 className="text-lg font-semibold text-gray-700 mb-5">Popular articles</h2>
          <ul className="divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden bg-white">
            {popularArticles.map((article) => {
              if (!article) return null
              const cat = helpCategories.find((c) => c.slug === article.category)
              return (
                <li key={article.slug}>
                  <Link
                    href={`/help/${article.slug}`}
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-orange-50 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-[#F7941D] transition-colors">
                        {article.title}
                      </p>
                      {cat && (
                        <p className="text-xs text-gray-400 mt-0.5">{cat.label}</p>
                      )}
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#F7941D] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-orange-50 py-12 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Our team is happy to help. Send us a message and we&apos;ll get back to you as soon as we can.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F7941D] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C06A05] transition-colors text-sm"
            >
              Contact us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <SoluFooter />
    </>
  )
}
