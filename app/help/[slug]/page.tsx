import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import {
  getArticleBySlug,
  helpArticles,
  helpCategories,
  type Block,
} from "@/lib/help-articles"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return helpArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | Solu Help`,
    description: article.summary,
    alternates: { canonical: `https://www.solu.ae/help/${slug}` },
    openGraph: {
      title: `${article.title} | Solu Help`,
      description: article.summary,
      url: `https://www.solu.ae/help/${slug}`,
    },
  }
}

function readTime(blocks: Block[]): number {
  const words = blocks.reduce((acc, b) => {
    if (b.type === "p" || b.type === "h2" || b.type === "h3" || b.type === "tip" || b.type === "warning") {
      return acc + b.text.split(/\s+/).length
    }
    if (b.type === "steps" || b.type === "list") {
      return acc + b.items.join(" ").split(/\s+/).length
    }
    return acc
  }, 0)
  return Math.max(1, Math.ceil(words / 200))
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return <p key={i} className="text-gray-700 leading-relaxed">{block.text}</p>
    case "h2":
      return <h2 key={i} className="text-lg font-bold text-gray-900 mt-8 mb-2">{block.text}</h2>
    case "h3":
      return <h3 key={i} className="text-base font-semibold text-gray-800 mt-6 mb-1">{block.text}</h3>
    case "steps":
      return (
        <ol key={i} className="mt-3 mb-4 flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-[#F7941D] text-xs font-bold flex items-center justify-center mt-0.5">
                {j + 1}
              </span>
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      )
    case "list":
      return (
        <ul key={i} className="mt-3 mb-4 flex flex-col gap-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2.5 items-start text-gray-700 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F7941D] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    case "tip":
      return (
        <div key={i} className="my-4 flex gap-3 bg-orange-50 border border-orange-100 rounded-xl px-4 py-3.5">
          <svg className="w-5 h-5 text-[#F7941D] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 8v4m0 4h.01" />
          </svg>
          <p className="text-sm text-gray-700">{block.text}</p>
        </div>
      )
    case "warning":
      return (
        <div key={i} className="my-4 flex gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3.5">
          <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.29 3.86-8 13A1 1 0 0 0 3.14 18.5h17.72a1 1 0 0 0 .85-1.54l-8-13a1 1 0 0 0-1.42 0z" />
            <path strokeLinecap="round" d="M12 9v4m0 4h.01" />
          </svg>
          <p className="text-sm text-red-700">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const category = helpCategories.find((c) => c.slug === article.category)
  const minutes = readTime(article.content)
  const relatedArticles = (article.related ?? [])
    .map((s) => helpArticles.find((a) => a.slug === s))
    .filter(Boolean)
    .slice(0, 3)

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/help" className="hover:text-[#F7941D] transition-colors">Help</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            {category && (
              <>
                <Link href={`/help/category/${category.slug}`} className="hover:text-[#F7941D] transition-colors">
                  {category.label}
                </Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </>
            )}
            <span className="text-gray-500 line-clamp-1">{article.title}</span>
          </nav>

          {/* Article header */}
          <header className="mb-8">
            {category && (
              <span className="inline-block text-xs font-medium bg-orange-100 text-[#F7941D] px-3 py-1 rounded-full mb-3">
                {category.label}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm">{minutes} min read</p>
          </header>

          {/* Article body */}
          <article className="prose-solu space-y-4 mb-12">
            {article.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* Was this helpful */}
          <div className="border-t border-gray-100 pt-8 mb-10">
            <p className="text-sm font-medium text-gray-700 mb-3">Was this helpful?</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#F7941D] hover:text-[#F7941D] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 10v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                </svg>
                Yes
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 10v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                </svg>
                No
              </button>
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-base font-semibold text-gray-700 mb-4">Related articles</h2>
              <ul className="flex flex-col gap-2">
                {relatedArticles.map((rel) => {
                  if (!rel) return null
                  return (
                    <li key={rel.slug}>
                      <Link
                        href={`/help/${rel.slug}`}
                        className="flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 group-hover:text-[#F7941D] transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{rel.summary}</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#F7941D] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-10 bg-orange-50 rounded-2xl px-6 py-6 text-center">
            <p className="text-sm font-medium text-gray-800 mb-1">Still need help?</p>
            <p className="text-xs text-gray-500 mb-4">Our team is happy to assist.</p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#F7941D] hover:text-[#C06A05] transition-colors"
              >
                Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <span className="hidden sm:block text-gray-300">·</span>
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                Report a problem
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SoluFooter />
    </>
  )
}
