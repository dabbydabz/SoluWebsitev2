import Link from "next/link"
import { getLatestPosts } from "@/lib/posts"

const categoryColours: Record<string, string> = {
  "Hormonal Health": "bg-rose-100 text-rose-600",
  "Nutrition": "bg-green-100 text-green-600",
  "Movement": "bg-orange-100 text-[#F7941D]",
  "Sleep": "bg-blue-100 text-blue-600",
  "Community": "bg-purple-100 text-purple-600",
}

export function SoluBlogPreview() {
  const posts = getLatestPosts(3)

  return (
    <section className="bg-white px-4 sm:px-6 pb-6">
      <div className="max-w-7xl mx-auto bg-[#F7F4F0] rounded-[32px] sm:rounded-[48px] px-6 lg:px-12 py-14 sm:py-20">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#F7941D] font-semibold text-sm uppercase tracking-widest mb-2">From the blog</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Know your body. <span className="text-[#F7941D]">Live better.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors shrink-0"
          >
            All articles →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
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
                <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#F7941D] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light flex-1 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                  <span className="text-[#F7941D] text-sm font-semibold group-hover:translate-x-0.5 transition-transform">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "all articles" link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F7941D]"
          >
            View all articles →
          </Link>
        </div>

      </div>
    </section>
  )
}
