import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

export const metadata = {
  title: "Privacy Policy — Solu",
  description: "How Solu collects, uses, and protects your personal and health data.",
  alternates: {
    canonical: "https://www.solu.ae/privacy",
  },
}

const LAST_UPDATED = "1 July 2026"

const sections = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    content: `Solu ("we", "us", "our") is a women's wellness platform operated from the United Arab Emirates. Our website is solu.ae and our app helps women track and understand their menstrual cycle, hormonal health, nutrition, fitness, and sleep.

If you have any questions about this policy or how we handle your data, please contact us via our contact form at solu.ae/contact.`,
  },
  {
    id: "data-we-collect",
    title: "2. Data we collect",
    content: `We collect data in two ways — directly from you, and automatically when you use our website or app.

**Information you give us directly:**
- Email address, when you join our waitlist or contact us
- Name, if you choose to provide it when contacting us
- Health and wellness data you enter into the Solu app, including menstrual cycle dates and patterns, hormonal symptoms, sleep data, nutrition logs, and fitness and workout data
- Any other information you voluntarily provide when communicating with us

**Information collected automatically:**
- Website usage data (pages visited, time spent, referring URLs) via Vercel Analytics — this is anonymised and does not identify you personally
- Device type, browser, and operating system when accessing our website or app
- IP address, collected automatically by our hosting infrastructure

We do not use third-party advertising trackers or sell your data to data brokers.`,
  },
  {
    id: "how-we-use-data",
    title: "3. How we use your data",
    content: `We use the data we collect to:

- Provide and improve the Solu app and website
- Send you waitlist updates and product announcements (email only, and only if you opted in)
- Personalise your wellness insights and recommendations within the app
- Respond to your questions and support requests
- Understand how our website and app are used so we can improve them
- Comply with legal obligations

We will never use your health data for advertising purposes, and we will never sell it to third parties.`,
  },
  {
    id: "health-data",
    title: "4. Health and sensitive data",
    content: `Menstrual cycle data, hormonal health information, and other health-related data you enter into Solu are considered sensitive personal data under applicable data protection laws.

We treat this data with the highest level of care:

- Health data is used solely to power your personal Solu experience and provide you with relevant insights
- We do not share individual health data with third parties, advertisers, employers, insurers, or any other organisations
- Health data is encrypted in transit and at rest
- You can request deletion of your health data at any time by contacting us

We may use aggregated, fully anonymised health data (where no individual can be identified) to improve our models and develop new features.`,
  },
  {
    id: "data-sharing",
    title: "5. Data sharing and third parties",
    content: `We share your data only in the following limited circumstances:

**Service providers** — we work with trusted third-party companies that help us operate Solu. These include:
- Vercel (website and app hosting, based in the USA — covered by standard contractual clauses)
- Tally (waitlist and contact forms — your email is stored in Tally when you submit a form)

Our service providers are contractually required to process your data only on our instructions and to keep it secure.

**Legal requirements** — we may disclose your data if required by UAE law, a court order, or a lawful request from a government authority.

**Business transfers** — if Solu is acquired or merges with another company, your data may be transferred as part of that transaction. We will notify you before your data is transferred and a different privacy policy applies.

We do not sell, rent, or trade your personal data to any third party.`,
  },
  {
    id: "data-retention",
    title: "6. Data retention",
    content: `We keep your data for as long as necessary to provide our service and comply with our legal obligations:

- Waitlist emails are kept until you unsubscribe or request deletion
- App account data is kept for the lifetime of your account plus 30 days after deletion, to allow for recovery
- Health data within the app is deleted within 30 days of account deletion
- Support and contact enquiries are kept for up to 2 years
- Anonymised, aggregated analytics data may be kept indefinitely as it cannot identify you

You can request deletion of your data at any time — see Section 8 for your rights.`,
  },
  {
    id: "international-transfers",
    title: "7. International data transfers",
    content: `Solu is based in the UAE. Some of our service providers (including Vercel) are based in the United States. When your data is transferred outside the UAE, we ensure it is protected by appropriate safeguards, including standard contractual clauses approved by the relevant data protection authorities.`,
  },
  {
    id: "your-rights",
    title: "8. Your rights",
    content: `Under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) and applicable privacy regulations, you have the following rights:

- **Access** — you can request a copy of the personal data we hold about you
- **Correction** — you can ask us to correct inaccurate or incomplete data
- **Deletion** — you can ask us to delete your personal data (subject to legal obligations)
- **Restriction** — you can ask us to stop processing your data in certain circumstances
- **Portability** — you can request your data in a machine-readable format
- **Withdrawal of consent** — where we process data based on your consent, you can withdraw it at any time

To exercise any of these rights, please contact us via our contact form at solu.ae/contact. We will respond within 30 days.`,
  },
  {
    id: "security",
    title: "9. Security",
    content: `We take the security of your data seriously. We use industry-standard measures including:

- TLS encryption for all data in transit
- Encryption at rest for sensitive health data
- Access controls that limit who within our team can access personal data
- Regular security reviews of our infrastructure

No method of transmission over the internet is 100% secure. If you believe your data has been compromised, please contact us immediately via solu.ae/contact.`,
  },
  {
    id: "cookies",
    title: "10. Cookies and analytics",
    content: `Our website uses Vercel Analytics, which collects anonymised data about how visitors use our site. This data is not linked to you personally and does not use cookies that track you across other websites.

We do not use advertising cookies or third-party tracking pixels. If we introduce additional analytics tools in the future, we will update this policy and seek your consent where required.`,
  },
  {
    id: "children",
    title: "11. Children's privacy",
    content: `Solu is not intended for anyone under the age of 16. We do not knowingly collect personal data from children under 16. If you believe we have inadvertently collected data from a child, please contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "12. Changes to this policy",
    content: `We may update this privacy policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you by email.

We encourage you to review this policy periodically. Your continued use of Solu after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "13. Contact us",
    content: `If you have any questions, concerns, or requests relating to this privacy policy or your personal data, please reach out via our contact form at solu.ae/contact.

We take all privacy enquiries seriously and will respond within 30 days.`,
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <SoluHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.05] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-[#F7941D] rounded-full text-sm font-semibold mb-8">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm font-medium">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 lg:px-12 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#F7941D] pl-6 py-1">
            At Solu, your privacy is not an afterthought — it is foundational to everything we build. This policy explains what data we collect, why we collect it, and how we protect it. We have written it to be read, not just to satisfy a legal requirement.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-gray-600 hover:text-[#F7941D] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-xl font-extrabold text-gray-900 mb-4">{s.title}</h2>
              <div className="space-y-4">
                {s.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return (
                      <p key={i} className="font-bold text-gray-900 text-sm">
                        {para.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (para.startsWith("- ")) {
                    const items = para.split("\n").filter((l) => l.startsWith("- "))
                    return (
                      <ul key={i} className="space-y-2 pl-1">
                        {items.map((item, j) => {
                          const text = item.slice(2)
                          const boldMatch = text.match(/^\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/)
                          return (
                            <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                              <span className="text-[#F7941D] mt-1 shrink-0">•</span>
                              <span>
                                {boldMatch ? (
                                  <><strong className="text-gray-900">{boldMatch[1]}</strong> — {boldMatch[2]}</>
                                ) : text}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    )
                  }
                  return (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">
                      {para}
                    </p>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="border-t border-gray-100 pt-12">
            <div className="bg-orange-50 rounded-[24px] p-8 text-center">
              <p className="text-gray-900 font-bold text-lg mb-2">Questions about your data?</p>
              <p className="text-gray-500 text-sm mb-6">We take every privacy enquiry seriously and respond within 30 days.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F7941D] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#e8850d] transition-all shadow-md shadow-orange-200/60"
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SoluFooter />
    </main>
  )
}
