import Image from "next/image"
import Link from "next/link"
import { posts, getTrendingPost } from "@/lib/posts"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import { BlogGrid } from "@/components/blog-grid"

export const metadata = {
  title: "Women's Health Blog: Hormones, Nutrition & Cycle Wellness | Solu",
  description: "Expert insights on hormonal health, cycle syncing, nutrition, movement, and sleep — written for real women living in sync with their bodies.",
  alternates: {
    canonical: "https://www.solu.ae/blog",
  },
  openGraph: {
    title: "Women's Health Blog: Hormones, Nutrition & Cycle Wellness | Solu",
    description: "Expert insights on hormonal health, cycle syncing, nutrition, movement, and sleep — written for real women living in sync with their bodies.",
    url: "https://www.solu.ae/blog",
    siteName: "Solu",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Health Blog: Hormones, Nutrition & Cycle Wellness | Solu",
    description: "Expert insights on hormonal health, cycle syncing, nutrition, movement, and sleep — written for real women living in sync with their bodies.",
  },
}

const categoryColours: Record<string, string> = {
  "Hormonal Health": "bg-rose-100 text-rose-600",
  "Nutrition": "bg-green-100 text-green-600",
  "Movement": "bg-orange-100 text-[#F7941D]",
  "Sleep": "bg-blue-100 text-blue-600",
  "Wellbeing": "bg-purple-100 text-purple-600",
  "Fertility": "bg-pink-100 text-pink-600",
}

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const categories = Array.from(new Set(sortedPosts.map((p) => p.category)))
  const trendingPost = getTrendingPost()

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="pt-32 pb-10 px-6 lg:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-[#F7941D] font-semibold text-sm uppercase tracking-widest mb-3">Solu Health Blog</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Live in sync <span className="text-[#F7941D]">with your cycle.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-5 leading-relaxed font-light sm:whitespace-nowrap">
              Insights on hormonal health, nutrition, movement, and everything in between, written for real women living real lives.
            </p>
          </div>
        </section>

        {/* Trending this week */}
        {trendingPost && (
          <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-12">
            <p className="text-[#F7941D] font-semibold text-xs uppercase tracking-widest mb-4">This week&apos;s trending</p>
            <Link
              href={`/blog/${trendingPost.slug}`}
              className="group relative flex flex-col sm:flex-row rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative sm:w-2/5 h-56 sm:h-auto overflow-hidden shrink-0">
                <Image
                  src={trendingPost.image}
                  alt={trendingPost.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                {/* Trending badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#F7941D] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                  Trending this week
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 gap-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[trendingPost.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {trendingPost.category}
                  </span>
                  <span className="text-gray-400 text-xs">{trendingPost.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-[#F7941D] transition-colors">
                  {trendingPost.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light line-clamp-3">
                  {trendingPost.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-gray-400 text-xs font-medium">{trendingPost.date}</span>
                  <span className="text-[#F7941D] text-sm font-bold group-hover:translate-x-0.5 transition-transform">Read article →</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Search + grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <BlogGrid posts={sortedPosts} categories={categories} />
        </section>

      </main>
      <SoluFooter />
    </>
  )
}
