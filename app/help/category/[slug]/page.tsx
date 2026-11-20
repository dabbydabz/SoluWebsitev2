import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import { JsonLd } from "@/components/json-ld"
import {
  helpCategories,
  getArticlesByCategory,
} from "@/lib/help-articles"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return helpCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = helpCategories.find((c) => c.slug === slug)
  if (!category) return {}
  return {
    title: `${category.label} | Solu Help`,
    description: category.description,
    alternates: { canonical: `https://www.solu.ae/help/category/${slug}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = helpCategories.find((c) => c.slug === slug)
  if (!category) notFound()

  const articles = getArticlesByCategory(slug)
  const url = `https://www.solu.ae/help/category/${slug}`

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    "name": `${category.label} | Solu Help`,
    "description": category.description,
    "url": url,
    "isPartOf": { "@id": "https://www.solu.ae/#website" },
    "publisher": { "@id": "https://www.solu.ae/#organization" },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((a, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": a.title,
        "url": `https://www.solu.ae/help/${a.slug}`,
      })),
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Help", "item": "https://www.solu.ae/help" },
        { "@type": "ListItem", "position": 2, "name": category.label, "item": url },
      ],
    },
  }

  return (
    <>
      <JsonLd data={categorySchema} />
      <SoluHeader />
      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/help" className="hover:text-[#F7941D] transition-colors">Help</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-gray-500">{category.label}</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.label}</h1>
            <p className="text-gray-500">{category.description}</p>
          </header>

          <ul className="divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden bg-white">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/help/${article.slug}`}
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-orange-50 transition-colors group"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#F7941D] transition-colors">
                      {article.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{article.summary}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#F7941D] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/help" className="text-sm text-[#F7941D] hover:text-[#C06A05] transition-colors font-medium flex items-center gap-1">
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
              Back to Help Centre
            </Link>
          </div>
        </div>
      </main>
      <SoluFooter />
    </>
  )
}
