import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

export const metadata = {
  title: "Our Story — Solu",
  description: "How Solu began, and why we're building a new kind of wellness for women.",
}

export default function OurStoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <SoluHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.08] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-[#F7941D] rounded-full text-sm font-semibold mb-8">
            Our Story
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
            Built for women,<br />
            <span className="text-[#F7941D]">by women.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed font-light">
            Solu was born from a simple frustration — the wellness world wasn't built with women's biology in mind. So we built something that was.
          </p>
        </div>
      </section>

      {/* Story content */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-3xl mx-auto space-y-20">

          {/* Chapter 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#F7941D] text-sm font-semibold uppercase tracking-widest">The beginning</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                We noticed something was missing.
              </h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Every wellness app we tried told us to push harder, track more, and stay consistent — as if a woman's body worked the same way every single day. It doesn't. Our energy, focus, strength, and mood shift throughout the month, and no app seemed to understand that.
              </p>
              <p className="text-gray-500 leading-relaxed font-light">
                We started asking questions. Talking to women — athletes, mothers, professionals, students. The same answer came up again and again: they felt like they were fighting their own bodies instead of working with them.
              </p>
            </div>
            <div className="rounded-[40px] overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Women in conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider quote */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-[40px] p-12 border border-orange-100">
            <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug text-center">
              "What if your wellness routine worked <span className="text-[#F7941D]">with</span> your cycle, not despite it?"
            </blockquote>
          </div>

          {/* Chapter 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-[40px] overflow-hidden aspect-square order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Women community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#F7941D] text-sm font-semibold uppercase tracking-widest">The vision</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                A lifestyle app, not just a tracker.
              </h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Solu isn't about logging calories or hitting arbitrary step goals. It's about helping women understand their own bodies deeply — and building a life that feels good from the inside out.
              </p>
              <p className="text-gray-500 leading-relaxed font-light">
                We also knew that wellness doesn't happen in isolation. Real change happens in community — when women share experiences, hold each other accountable, and celebrate each other's wins. That's why community is woven into every part of Solu.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What we believe</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { emoji: "🌙", title: "Cycle intelligence", body: "Your hormonal cycle is not a limitation — it's information. We help you read it and live accordingly." },
                { emoji: "🤝", title: "Real community", body: "Wellness is better together. Solu connects women in real life and online around shared health goals." },
                { emoji: "✨", title: "Whole-life wellness", body: "We don't just count steps. We look at sleep, nutrition, movement, mood, and community as one interconnected whole." },
              ].map((v) => (
                <div key={v.title} className="bg-[#FAFAF8] rounded-[32px] p-8 border border-gray-100">
                  <div className="text-3xl mb-4">{v.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">Ready to start your journey?</h2>
            <p className="text-gray-500 font-light">Join thousands of women already living in sync with their bodies.</p>
            <a
              href="/#download"
              className="inline-block bg-[#F7941D] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#e8850d] transition-all shadow-lg shadow-orange-200/60"
            >
              Download Solu
            </a>
          </div>

        </div>
      </section>

      <SoluFooter />
    </main>
  )
}
