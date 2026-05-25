import Link from "next/link"
import { posts } from "@/lib/posts"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

export const metadata = {
  title: "Blog | Solu",
  description: "Insights on hormonal health, nutrition, movement, and living well, from the Solu team.",
}

const categoryColours: Record<string, string> = {
  "Hormonal Health": "bg-rose-100 text-rose-600",
  "Nutrition": "bg-green-100 text-green-600",
  "Movement": "bg-orange-100 text-[#F7941D]",
  "Sleep": "bg-blue-100 text-blue-600",
  "Community": "bg-purple-100 text-purple-600",
}

export default function BlogPage() {
  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[#F7941D] font-semibold text-sm uppercase tracking-widest mb-3">The Solu Blog</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Live well, <span className="text-[#F7941D]">feel great.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-5 leading-relaxed font-light max-w-md">
              Insights on hormonal health, nutrition, movement, and everything in between, written for real women living real lives.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-[#F7941D] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed font-light flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                    <span className="text-[#F7941D] text-sm font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <SoluFooter />
    </>
  )
}
