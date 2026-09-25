import type { Post } from "./posts"

// Curated medical/physiological entity list covering Solu's article topics.
// Used to populate Article JSON-LD "mentions" so AI search systems can
// resolve which named entities each article actually covers, per 2026 GEO
// "entity authorization" guidance (see .claude/seo-learnings.json).
const ENTITY_PATTERNS: { name: string; pattern: RegExp }[] = [
  { name: "Cortisol", pattern: /\bcortisol\b/i },
  { name: "Progesterone", pattern: /\bprogesterone\b/i },
  // Specific conditions sit before their parent hormone so a title match on
  // the condition becomes the article's primary "about" entity.
  { name: "Oestrogen Dominance", pattern: /\b(o|e)estrogen dominance\b/i },
  { name: "Low Oestrogen", pattern: /\blow (o|e)estrogen\b/i },
  { name: "Oestrogen", pattern: /\b(o|e)estrogen\b/i },
  { name: "Testosterone", pattern: /\btestosterone\b/i },
  { name: "Luteal Phase", pattern: /\bluteal phase\b/i },
  { name: "Follicular Phase", pattern: /\bfollicular phase\b/i },
  { name: "Ovulatory Phase", pattern: /\bovulatory phase\b/i },
  { name: "Menstrual Phase", pattern: /\bmenstrual phase\b/i },
  { name: "Ovulation", pattern: /\bovulation\b/i },
  { name: "Menstrual Cycle", pattern: /\bmenstrual cycle\b/i },
  { name: "Perimenopause", pattern: /\bperimenopause\b/i },
  { name: "Menopause", pattern: /\bmenopause\b/i },
  { name: "Hormone Replacement Therapy", pattern: /\bhormone replacement therapy\b|\bHRT\b/i },
  { name: "Fertility", pattern: /\bfertility\b/i },
  { name: "Libido", pattern: /\blibido\b/i },
  { name: "Premenstrual Syndrome", pattern: /\bpremenstrual syndrome\b|\bPMS\b/i },
  { name: "PCOS", pattern: /\bPCOS\b|\bpolycystic ovary syndrome\b/i },
  { name: "Hormonal Imbalance", pattern: /\bhormonal imbalance\b/i },
  { name: "Thyroid", pattern: /\bthyroid\b/i },
  { name: "Insulin", pattern: /\binsulin\b/i },
  { name: "Melatonin", pattern: /\bmelatonin\b/i },
  { name: "Sleep Quality", pattern: /\bsleep quality\b/i },
  { name: "Creatine", pattern: /\bcreatine\b/i },
  { name: "Strength Training", pattern: /\bstrength training\b/i },
  { name: "Muscle Growth", pattern: /\bmuscle growth\b/i },
  { name: "Cycle Syncing", pattern: /\bcycle syncing\b/i },
  { name: "Brain Fog", pattern: /\bbrain fog\b/i },
  { name: "HPA Axis", pattern: /\bHPA axis\b|\bhypothalamic-pituitary-adrenal axis\b/i },
  { name: "Free Sugars", pattern: /\bfree sugars?\b/i },
  { name: "Cardiovascular Health", pattern: /\bcardiovascular (health|disease|system)\b|\bheart health\b/i },
  { name: "Seed Cycling", pattern: /\bseed cycling\b/i },
  { name: "Premenstrual Fatigue", pattern: /\bpremenstrual (fatigue|tiredness)\b|\btired before (my|your|a) period\b/i },
  { name: "Premenstrual Anxiety", pattern: /\bpremenstrual anxiety\b|\banxious before (my|your|a) period\b/i },
  { name: "Sugar Cravings", pattern: /\bsugar cravings?\b|\bcrave sugar\b/i },
  { name: "Period Tracking App", pattern: /\bperiod track(ing|er) apps?\b/i },
]

const MIN_ENTITIES = 2
const MAX_ENTITIES = 4

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ")
}

export function getArticleEntities(post: Post): { "@type": "DefinedTerm"; name: string }[] {
  const haystack = `${post.title} ${post.excerpt} ${stripHtml(post.content)}`
  const matched = ENTITY_PATTERNS.filter((entity) => entity.pattern.test(haystack))
  if (matched.length < MIN_ENTITIES) return []
  // Title-matched entities first so the first result is the article's primary topic.
  const inTitle = matched.filter((entity) => entity.pattern.test(post.title))
  const ordered = [...inTitle, ...matched.filter((entity) => !inTitle.includes(entity))]
  return ordered.slice(0, MAX_ENTITIES).map(({ name }) => ({ "@type": "DefinedTerm", name }))
}
