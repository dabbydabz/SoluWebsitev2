import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { posts, getPostBySlug } from "@/lib/posts"
import { getRevisionDate } from "@/lib/post-revisions"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

function toISODate(dateStr: string): string {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0]
}

function formatLongDate(isoDate: string): string {
  const d = new Date(isoDate)
  return isNaN(d.getTime())
    ? isoDate
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
}

function metaDescription(excerpt: string, maxLength = 155): string {
  if (excerpt.length <= maxLength) return excerpt
  const truncated = excerpt.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${truncated.slice(0, lastSpace).replace(/[.,;:]$/, "")}...`
}

function ogImageUrl(url: string): string {
  if (!url.startsWith("https://images.unsplash.com/")) return url
  const [base] = url.split("?")
  return `${base}?w=1200&h=630&fit=crop&q=80`
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `https://www.solu.ae/blog/${slug}`
  const description = metaDescription(post.excerpt)
  const revisionDate = getRevisionDate(slug)
  return {
    title: `${post.title} | Solu`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Solu`,
      description,
      url,
      siteName: "Solu",
      type: "article",
      locale: "en_US",
      publishedTime: toISODate(post.date),
      modifiedTime: revisionDate ?? toISODate(post.date),
      images: post.image ? [{ url: ogImageUrl(post.image), width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Solu`,
      description,
      images: post.image ? [ogImageUrl(post.image)] : undefined,
    },
  }
}

const categoryColours: Record<string, string> = {
  "Hormonal Health": "bg-rose-100 text-rose-600",
  "Nutrition": "bg-green-100 text-green-600",
  "Movement": "bg-orange-100 text-[#F7941D]",
  "Sleep": "bg-blue-100 text-blue-600",
  "Community": "bg-purple-100 text-purple-600",
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const postUrl = `https://www.solu.ae/blog/${post.slug}`
  const revisionDate = getRevisionDate(post.slug)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image
      ? { "@type": "ImageObject", "url": ogImageUrl(post.image), "width": 1200, "height": 630 }
      : "https://www.solu.ae/icon.png",
    "datePublished": toISODate(post.date),
    "dateModified": revisionDate ?? toISODate(post.date),
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Organization",
      "name": "Solu Editorial Team",
      "url": "https://www.solu.ae/our-story",
      "description": "Reviewed against NHS, PubMed, and peer-reviewed sources.",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solu",
      "url": "https://www.solu.ae",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.solu.ae/icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "keywords": post.category,
    "articleSection": post.category,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.solu.ae" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.solu.ae/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl },
    ],
  }

  return (
    <>
      <Script
        id={`schema-article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />
      <SoluHeader />
      <main className="min-h-screen bg-white">

        {/* Hero image */}
        <div className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
          <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                {post.category}
              </span>
              <span className="text-white/70 text-xs">{post.readTime}</span>
              <span className="text-white/70 text-xs">{post.date}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-gray-400 text-xs font-medium mb-6">
            Reviewed by the Solu Editorial Team against NHS, PubMed, and peer-reviewed sources.
            {revisionDate && <> · Last updated {formatLongDate(revisionDate)}</>}
          </p>
          <p className="text-gray-500 text-lg leading-relaxed font-light mb-10 border-l-4 border-[#F7941D] pl-5">
            {post.excerpt}
          </p>
          <div
            className="prose prose-gray prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#F7941D] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#FBF8F4] to-white border border-orange-100 rounded-[28px] p-8 text-center">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-2">Ready to feel the difference?</p>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Start living in sync with your body.</h3>
            <button
              data-tally-open="vGdWa0" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
              className="inline-block bg-[#F7941D] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#e8850d] transition-all shadow-lg shadow-orange-200/60 cursor-pointer"
            >
              Try Solu for Free
            </button>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 pb-20">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">More from the blog</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColours[p.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {p.category}
                    </span>
                    <p className="font-bold text-gray-900 text-sm mt-2 leading-snug group-hover:text-[#F7941D] transition-colors">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="max-w-3xl mx-auto px-6 pb-10">
          <Link href="/blog" className="text-gray-400 text-sm font-medium hover:text-gray-700 transition-colors">
            ← Back to all articles
          </Link>
        </div>

      </main>
      <SoluFooter />
    </>
  )
}
