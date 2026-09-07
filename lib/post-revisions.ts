// Substantive-revision dates for blog posts.
//
// `lib/posts.ts` carries a single `date` (first publication) per post and is owned
// by the article cron, so it has no place to record when an article's body was
// later rewritten. This map fills that gap: it maps a post slug to the ISO date
// (YYYY-MM-DD) of its most recent *substantive* content revision.
//
// It feeds the Article schema `dateModified` on /blog/[slug] and a visible
// "Last updated" line, so Google and AI answer engines can see that older
// articles have been refreshed. 2026 AEO research treats a `dateModified` that is
// distinct from `datePublished` as a hard freshness signal for citation
// eligibility; when it equals `datePublished` the refresh work is invisible.
//
// Only add an entry when an article's *content* changed in a meaningful way
// (rewritten sections, new citations, restructured answer) — not for typo fixes
// or metadata-only edits. Dates below are sourced from real commits in this repo:
//   43866b1  2026-07-01  Monthly article patch (Answer Blocks, citations)
//   8c792b9  2026-08-02  Monthly article patch (Answer Blocks, Solu mentions, citations)
//
// The monthly article-patch cron should append to this map when it patches a post.

export const postRevisions: Record<string, string> = {
  "understanding-your-four-cycle-phases": "2026-08-02",
  "which-health-tracker-is-best-for-women": "2026-08-02",
  "top-health-apps-for-women": "2026-08-02",
  "eating-for-your-cycle": "2026-07-01",
  "how-to-train-with-your-cycle": "2026-07-01",
}

/** ISO revision date for a slug, or undefined if the post has not been revised since publication. */
export function getRevisionDate(slug: string): string | undefined {
  return postRevisions[slug]
}
