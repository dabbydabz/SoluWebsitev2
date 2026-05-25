export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "understanding-your-four-cycle-phases",
    title: "Understanding Your 4 Cycle Phases (And Why They Matter)",
    excerpt: "Your menstrual cycle isn't just about your period. Each of the four phases (menstrual, follicular, ovulatory, and luteal) shifts your energy, mood, strength, and focus in predictable ways. Here's how to work with them.",
    date: "May 18, 2026",
    category: "Hormonal Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
    readTime: "5 min read",
    content: `
<p>Most of us were taught that our menstrual cycle is simply the week we bleed. But your cycle is actually a 28-35 day hormonal journey that touches everything from your energy and sleep to your strength and creativity.</p>

<h2>Phase 1: Menstrual (Days 1–5)</h2>
<p>Oestrogen and progesterone are at their lowest. Your body is doing real work: rest is not laziness, it's biology. This is a time for reflection, gentle movement, and nourishing food like iron-rich leafy greens and warming soups.</p>

<h2>Phase 2: Follicular (Days 6–13)</h2>
<p>Oestrogen begins to rise and so does your energy. This is your most creative and sociable phase. Tackle new projects, try high-intensity workouts, and experiment with new recipes. Your brain is sharper here. Use it.</p>

<h2>Phase 3: Ovulatory (Days 14–16)</h2>
<p>Oestrogen peaks and testosterone surges briefly. You're at your most confident, communicative, and physically strong. Great time for important conversations, presentations, and your hardest gym sessions.</p>

<h2>Phase 4: Luteal (Days 17–28)</h2>
<p>Progesterone rises to support a potential pregnancy. Energy shifts inward. You may notice more sensitivity, a need for comfort, and a preference for slower, more deliberate activity. This is not a weakness; it's your body doing exactly what it's designed to do.</p>

<h2>Why This Matters</h2>
<p>When you stop fighting your cycle and start aligning with it, everything changes. Your workouts get better results, your mood feels more manageable, and your relationship with your body becomes one of respect rather than frustration.</p>

<p>Solu tracks where you are in your cycle and gives you daily guidance so you always know what your body needs, and why.</p>
    `.trim(),
  },
  {
    slug: "eating-for-your-cycle",
    title: "Eating for Your Cycle: A Simple Guide to Cycle-Synced Nutrition",
    excerpt: "What you eat has a profound effect on how you feel throughout your cycle. Learn which foods support each phase and how small, intentional shifts in your diet can reduce PMS, boost energy, and improve your overall wellbeing.",
    date: "May 10, 2026",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85",
    readTime: "4 min read",
    content: `
<p>Cycle-synced nutrition isn't about following a strict diet. It's about understanding what your body genuinely needs at different points in the month and giving it exactly that.</p>

<h2>Menstrual Phase: Replenish</h2>
<p>You lose iron during your period. Prioritise iron-rich foods like lentils, spinach, red meat, and pumpkin seeds. Pair them with vitamin C (lemon, peppers) to boost absorption. Warm, cooked foods are easier on your system than raw salads right now.</p>

<h2>Follicular Phase: Energise</h2>
<p>Rising oestrogen supports a healthy gut microbiome. Fermented foods like yoghurt, kimchi, and kefir are particularly beneficial. Light proteins and complex carbohydrates will sustain your rising energy levels.</p>

<h2>Ovulatory Phase: Support Detox</h2>
<p>Your liver works harder to clear excess oestrogen at ovulation. Cruciferous vegetables (broccoli, cauliflower, Brussels sprouts) support this process. Stay well hydrated; your body temperature rises slightly around ovulation.</p>

<h2>Luteal Phase: Stabilise</h2>
<p>Progesterone increases your metabolism slightly, so you naturally crave more food, and that's perfectly fine. Magnesium-rich foods (dark chocolate, avocado, nuts) can ease PMS symptoms. Reduce caffeine and alcohol, which amplify anxiety and disrupt sleep in this phase.</p>

<h2>The Bigger Picture</h2>
<p>You don't need to overhaul your entire diet. Even one or two intentional food choices per phase can make a meaningful difference. Solu's nutrition insights guide you through each phase so you always know what to reach for.</p>
    `.trim(),
  },
  {
    slug: "how-to-train-with-your-cycle",
    title: "How to Train With Your Cycle, Not Against It",
    excerpt: "Generic workout plans ignore half the picture. Your strength, endurance, and recovery capacity all shift across your cycle. Discover how to structure your training to get better results with less burnout.",
    date: "April 29, 2026",
    category: "Movement",
    image: "/images/tile-movement.png",
    readTime: "6 min read",
    content: `
<p>The fitness industry was largely built on research conducted on men. That means most training programmes assume a flat hormonal baseline that simply doesn't exist for women. Your hormones shift every week, and so should your training.</p>

<h2>Menstrual Phase: Rest and Restore</h2>
<p>This is the time for yoga, gentle walks, and stretching. Your pain threshold is lower and your energy is conserved for healing. Forcing intense training here often leads to injury and longer recovery times. Give yourself permission to slow down.</p>

<h2>Follicular Phase: Build and Push</h2>
<p>Rising oestrogen improves strength, endurance, and muscle recovery. This is your green light for progressive overload, high-intensity interval training, and trying new physical challenges. Your body adapts faster to training stimuli in this phase.</p>

<h2>Ovulatory Phase: Peak Performance</h2>
<p>Your peak strength window. Lift heavier, run faster, compete. Testosterone briefly spikes alongside oestrogen. Use it. Be mindful that ligament laxity also increases around ovulation, so warm up thoroughly and focus on form.</p>

<h2>Luteal Phase: Sustain and Wind Down</h2>
<p>In the early luteal phase your performance is still strong; maintain your training load but start tapering as you approach the late luteal phase. Swap HIIT for steady-state cardio, Pilates, or strength training at a moderate pace. Prioritise sleep and recovery nutrition.</p>

<h2>Practical Takeaway</h2>
<p>You don't need four separate training programmes. You need awareness. When you know where you are in your cycle, you can adjust intensity and recovery intuitively, and the results speak for themselves.</p>

<p>Solu surfaces your phase and recommends the right type of movement each day, so you never have to second-guess your training again.</p>
    `.trim(),
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getLatestPosts(count = 3): Post[] {
  return posts.slice(0, count)
}
