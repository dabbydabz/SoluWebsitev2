// Shared date parsing for SEO date fields (datePublished, dateModified, sitemap lastmod).
//
// `lib/posts.ts` stores each post's `date` as a human string like "May 18, 2026".
// V8 parses that format as *local* time, so `new Date(str).toISOString()` can shift
// the calendar day backwards on a build machine west of UTC (observed 2026-08:
// the muscle-growth post rendered datePublished 2026-08-16 for a stated Aug 17).
// Parsing the components explicitly and pinning them to UTC keeps the emitted
// ISO date stable regardless of build timezone.

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}

/** Parse a "Month DD, YYYY" or ISO date string to a UTC Date. Falls back to native parsing. */
export function parseDateUTC(dateStr: string): Date {
  const match = dateStr.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/)
  if (match) {
    const month = MONTHS[match[1].toLowerCase()]
    if (month !== undefined) {
      return new Date(Date.UTC(Number(match[3]), month, Number(match[2])))
    }
  }
  return new Date(dateStr)
}

/** Return YYYY-MM-DD in UTC for a "Month DD, YYYY" or ISO date string. */
export function toISODateUTC(dateStr: string): string {
  const d = parseDateUTC(dateStr)
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0]
}
