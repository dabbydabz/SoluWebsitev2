import { posts } from "@/lib/posts"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"
import { BlogGrid } from "@/components/blog-grid"

export const metadata = {
  title: "Blog | Solu",
  description: "Insights on hormonal health, nutrition, movement, and living well, from the Solu team.",
}

export default function BlogPage() {
  const categories = Array.from(new Set(posts.map((p) => p.category)))

  return (
    <>
      <SoluHeader />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-[#F7941D] font-semibold text-sm uppercase tracking-widest mb-3">Solu Health Blog</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Live well, <span className="text-[#F7941D]">feel great.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-5 leading-relaxed font-light sm:whitespace-nowrap">
              Insights on hormonal health, nutrition, movement, and everything in between, written for real women living real lives.
            </p>
          </div>
        </section>

        {/* Search + grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <BlogGrid posts={posts} categories={categories} />
        </section>

      </main>
      <SoluFooter />
    </>
  )
}
