import { MetadataRoute } from "next"
import { posts } from "@/lib/posts"
import { getRevisionDate } from "@/lib/post-revisions"
import { parseDateUTC } from "@/lib/dates"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts.map((post) => {
    // Prefer the most recent substantive content revision so sitemap lastmod,
    // Article dateModified and the visible "Last updated" line all agree — 2026
    // AEO guidance treats a mismatch between them as a freshness-signal failure.
    const revisionDate = getRevisionDate(post.slug)
    return {
      url: `https://www.solu.ae/blog/${post.slug}`,
      lastModified: revisionDate ? new Date(revisionDate) : parseDateUTC(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }
  })

  // The homepage blog preview and the blog index both list the newest posts, so
  // their lastmod tracks the most recent post change instead of a hardcoded date.
  const latestPostChange = new Date(
    Math.max(...blogPosts.map((p) => p.lastModified.getTime())),
  )
  const latest = (fixed: string) =>
    new Date(Math.max(new Date(fixed).getTime(), latestPostChange.getTime()))

  return [
    {
      url: "https://www.solu.ae",
      lastModified: latest("2026-09-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.solu.ae/blog",
      lastModified: latest("2026-08-09"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.solu.ae/our-story",
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.solu.ae/contact",
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://www.solu.ae/careers",
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.solu.ae/privacy",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.solu.ae/terms",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogPosts,
  ]
}
