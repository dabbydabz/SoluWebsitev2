import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Report a Problem | Solu",
  description: "Report a bug or issue with the Solu app. Tell us what's wrong and our team will look into it.",
  alternates: { canonical: "https://www.solu.ae/report" },
  robots: { index: false, follow: false },
}

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
