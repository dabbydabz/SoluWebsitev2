import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/maintenance", "/welcome"],
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Googlebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://www.solu.ae/sitemap.xml",
  }
}
