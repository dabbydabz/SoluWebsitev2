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

  return [
    {
      url: "https://www.solu.ae",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.solu.ae/blog",
      lastModified: new Date("2026-08-09"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.solu.ae/our-story",
      lastModified: new Date("2026-08-09"),
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
      lastModified: new Date(),
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
