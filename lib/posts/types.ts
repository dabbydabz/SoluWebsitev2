export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: string
  content: string
  trending?: boolean
  reviewedBy?: string
}

// Solu's standing editorial review process (adopted in place of a named individual reviewer).
// Used as the default for any post that does not set its own `reviewedBy` string.
export const EDITORIAL_REVIEW_PROCESS =
  "Reviewed against NHS, ACOG, and peer-reviewed clinical guidance."
