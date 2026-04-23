const testimonials = [
  {
    quote: "Solu is the first wellness app that actually gets me. Tracking my cycle alongside my workouts and sleep changed everything.",
    name: "Amara K.",
    role: "Fitness coach",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  },
  {
    quote: "I love how clean and simple it is. I check Solu every morning — it's become part of my routine without feeling like another chore.",
    name: "Sophie L.",
    role: "Nutritionist",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
  },
  {
    quote: "Finally an app that shows me how my nutrition impacts my energy. I feel more in control of my health than ever before.",
    name: "Fatima R.",
    role: "Healthcare worker",
    avatar: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=120&q=80",
  },
]

export function SoluTestimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F4] via-white to-[#F5F8FB] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-orange-100 text-[#F7941D] rounded-full text-sm font-semibold shadow-sm mb-6">
            Real women, real results
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Women who chose<br />
            <span className="text-[#F7941D]">to live well</span>
          </h2>
        </div>

        {/* Glass testimonial cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-[#F7941D] text-sm">★</span>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-orange-100" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
