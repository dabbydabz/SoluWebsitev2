import { NextResponse } from "next/server"
import { posts } from "@/lib/posts"

// Article feed for the Solu app's Today page.
// Returns every blog article with inAppFeed: true, plus its tags.
// The app fetches this daily and does the phase-first / interest selection itself.
// Rebuilt on every deploy, so new weekly articles appear automatically.

export const dynamic = "force-static"

const SITE = "https://www.solu.ae"

function firstParagraph(html: string): string {
  const match = html.match(/<p>([\s\S]*?)<\/p>/)
  if (!match) return ""
  return match[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

export function GET() {
  const articles = posts
    .filter((p) => p.inAppFeed === true)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      url: `${SITE}/blog/${p.slug}`,
      image: p.image,
      excerpt: p.excerpt,
      firstParagraph: firstParagraph(p.content),
      category: p.category,
      readTime: p.readTime,
      date: p.date,
      phase: p.phase ?? "General",
      interests: p.interests ?? [],
      topics: p.topics ?? [],
    }))
    .reverse() // newest first

  return NextResponse.json(
    { count: articles.length, articles },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        // App data feed, not a page: keep it out of search indexes so it
        // never competes with the /blog/[slug] articles it duplicates.
        "X-Robots-Tag": "noindex",
      },
    },
  )
}
