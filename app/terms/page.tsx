import Link from "next/link"
import { SoluHeader } from "@/components/solu-header"
import { SoluFooter } from "@/components/solu-footer"

export const metadata = {
  title: "Terms of Service — Solu",
  description: "The terms and conditions governing your use of Solu's website and app.",
  alternates: {
    canonical: "https://www.solu.ae/terms",
  },
}

const LAST_UPDATED = "1 July 2026"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    content: `By accessing or using the Solu website (solu.ae) or the Solu app (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.

These Terms form a legally binding agreement between you and Solu. We may update them from time to time — see Section 19 for how we handle changes.`,
  },
  {
    id: "who-we-are",
    title: "2. Who we are",
    content: `Solu is a women's wellness platform based in Dubai, United Arab Emirates. Our Service helps women understand and work with their menstrual cycle through personalised health tracking, insights, and community features.

For any questions about these Terms, please contact us via solu.ae/contact.`,
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content: `To use the Service you must:

- Be at least 16 years of age
- Have the legal capacity to enter into a binding contract
- Not be barred from using the Service under applicable law

If you are using the Service on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.

By using the Service, you confirm that you meet these requirements.`,
  },
  {
    id: "accounts",
    title: "4. Your account",
    content: `To access certain features of the Service, you will need to create an account. You are responsible for:

- Providing accurate and complete information when registering
- Keeping your login credentials confidential
- All activity that occurs under your account
- Notifying us immediately if you suspect unauthorised access to your account

You may not share your account with others or create accounts on behalf of someone else without their consent. We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    id: "service-tiers",
    title: "5. Free and paid tiers",
    content: `Solu offers the Service on a freemium basis — a free tier and one or more paid subscription tiers.

**Free tier:** You may use the core features of Solu at no charge, subject to these Terms. The features available on the free tier may change over time.

**Paid tiers:** Certain premium features are available only on paid subscription plans. Details of what is included in each paid tier, and the applicable price, are displayed within the Service at the point of purchase. We reserve the right to change the features included in any tier with reasonable notice.

We may introduce, modify, or discontinue tiers at any time. If we discontinue a paid tier you have subscribed to, we will notify you in advance and provide a pro-rated refund for any unused prepaid period.`,
  },
  {
    id: "payments",
    title: "6. Payments and billing",
    content: `**Subscription billing:** Paid subscriptions are billed on a recurring basis (monthly or annually, depending on your chosen plan) in advance. Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.

**Payment method:** You authorise us to charge your chosen payment method for all fees due. You are responsible for keeping your payment information up to date. If a payment fails, we may suspend access to paid features until payment is resolved.

**Price changes:** We will give you at least 30 days' notice before increasing the price of your subscription. Your continued use of the paid tier after the price change takes effect constitutes acceptance of the new price.

**Taxes:** Prices shown may be exclusive of applicable taxes, including UAE VAT where applicable. You are responsible for any taxes applicable to your use of the Service.

**Currency:** All prices are displayed in the currency shown within the Service. Currency conversion rates are set by your payment provider.`,
  },
  {
    id: "cancellation-refunds",
    title: "7. Cancellation and refunds",
    content: `**Cancellation:** You may cancel your paid subscription at any time through your account settings or by contacting us. Cancellation takes effect at the end of your current billing period — you will retain access to paid features until then.

**Refunds:** We do not offer refunds for completed billing periods. If you cancel mid-period, you will not receive a refund for the remaining time, but you will retain access until the period ends.

**Exceptions:** We will issue a full refund if:
- You were charged in error
- A technical fault on our side prevented you from accessing the Service for a significant portion of a paid period
- You are entitled to a refund under UAE consumer protection law

To request a refund under these exceptions, please contact us within 14 days of the charge via solu.ae/contact.`,
  },
  {
    id: "user-content",
    title: "8. User-generated content",
    content: `**What this covers:** The Service may allow you to post, share, or publish content such as community posts, comments, tips, or other contributions ("User Content").

**You own your content:** You retain ownership of any User Content you create. By posting User Content, you grant Solu a non-exclusive, worldwide, royalty-free, sublicensable licence to use, display, reproduce, distribute, and adapt your User Content within the Service and in our marketing materials, for as long as your content remains on the platform. You can withdraw this licence by deleting your content.

**Your responsibility:** You are solely responsible for your User Content. By posting, you confirm that:
- You own or have the right to share the content
- Your content does not infringe any third party's intellectual property, privacy, or other rights
- Your content complies with our content standards below

**Content standards:** User Content must not:
- Contain false, misleading, or harmful health claims
- Be abusive, threatening, hateful, discriminatory, or harassing
- Contain sexual or explicit material
- Promote self-harm, disordered eating, or dangerous health practices
- Advertise or solicit third-party products or services without our permission
- Violate any applicable law or regulation

**Our rights:** We reserve the right — but are not obligated — to review, moderate, remove, or restrict access to any User Content at our sole discretion and without notice, if we believe it violates these Terms or is otherwise harmful. We are not liable for any User Content posted by users.`,
  },
  {
    id: "health-disclaimer",
    title: "9. Health and medical disclaimer",
    content: `Solu is a wellness and lifestyle app. The information, insights, and content provided through the Service — including cycle tracking, nutritional guidance, fitness recommendations, and sleep insights — are for general informational and educational purposes only.

The Service is not a medical device. It does not provide medical advice, diagnosis, or treatment. Nothing in the Service should be construed as medical advice or used as a substitute for professional medical consultation, diagnosis, or treatment.

Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read or seen in the Service.

If you are experiencing a medical emergency, call your local emergency services immediately. The Service is not designed for emergency use.

Solu makes no warranties about the accuracy, completeness, or suitability of health-related content within the Service for any particular individual's circumstances.`,
  },
  {
    id: "prohibited-conduct",
    title: "10. Prohibited conduct",
    content: `When using the Service, you must not:

- Violate any applicable law, regulation, or these Terms
- Attempt to gain unauthorised access to any part of the Service or another user's account
- Use automated tools (bots, scrapers, crawlers) to access or extract data from the Service without our written permission
- Interfere with or disrupt the integrity or performance of the Service
- Transmit malware, viruses, or any other harmful code
- Impersonate another person or entity
- Use the Service to send unsolicited communications (spam)
- Reverse engineer, decompile, or attempt to extract the source code of the Service
- Use the Service in any way that could damage Solu's reputation or harm other users

We reserve the right to suspend or permanently terminate your account if you engage in prohibited conduct.`,
  },
  {
    id: "intellectual-property",
    title: "11. Intellectual property",
    content: `All content within the Service that is not User Content — including the Solu name, logo, design, software, text, graphics, and the selection and arrangement thereof — is owned by or licensed to Solu and is protected by UAE and international intellectual property laws.

Nothing in these Terms grants you any right to use Solu's name, trademarks, or other brand features without our prior written permission.

Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial use.`,
  },
  {
    id: "third-parties",
    title: "12. Third-party services and links",
    content: `The Service may contain links to third-party websites or integrate third-party services (such as payment processors). These are provided for convenience only. We do not control and are not responsible for the content, privacy practices, or terms of any third-party service.

Your use of third-party services is governed by their own terms and privacy policies. We encourage you to review them before using any third-party service connected to Solu.`,
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers",
    content: `The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that:
- The Service will be uninterrupted, error-free, or secure
- Any defects will be corrected
- The Service or its servers are free of viruses or harmful components
- The results obtained from using the Service will be accurate or reliable

Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.`,
  },
  {
    id: "liability",
    title: "14. Limitation of liability",
    content: `To the maximum extent permitted by applicable law, Solu and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, including but not limited to loss of data, loss of profits, or personal injury.

Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the greater of (a) the amount you paid us in the 12 months prior to the claim, or (b) AED 500.

Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    id: "indemnification",
    title: "15. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Solu and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or relating to:

- Your use of the Service in violation of these Terms
- Your User Content
- Your violation of any third party's rights
- Your violation of any applicable law or regulation`,
  },
  {
    id: "termination",
    title: "16. Termination",
    content: `**By you:** You may stop using the Service and delete your account at any time through your account settings or by contacting us.

**By us:** We may suspend or terminate your access to the Service at any time, with or without notice, if we reasonably believe you have violated these Terms, if required by law, or if we decide to discontinue the Service.

**Effect of termination:** Upon termination, your right to use the Service ends immediately. Sections of these Terms that by their nature should survive termination (including Sections 8, 9, 11, 13, 14, 15, and 17) will continue to apply.

If we terminate your account without cause, we will refund any prepaid subscription fees on a pro-rated basis.`,
  },
  {
    id: "governing-law",
    title: "17. Governing law and disputes",
    content: `These Terms are governed by and construed in accordance with the laws of the UAE and the Emirate of Dubai, without regard to conflict of law principles.

**Informal resolution:** We encourage you to contact us first if you have a dispute. Most concerns can be resolved quickly and informally. Please contact us via solu.ae/contact and we will work in good faith to resolve the matter within 30 days.

**Formal disputes:** If informal resolution is unsuccessful, any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.

Nothing in this clause prevents either party from seeking urgent injunctive or interim relief from a court of competent jurisdiction.`,
  },
  {
    id: "general",
    title: "18. General provisions",
    content: `**Entire agreement:** These Terms, together with our Privacy Policy, constitute the entire agreement between you and Solu regarding the Service and supersede all prior agreements.

**Severability:** If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force.

**No waiver:** Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.

**Assignment:** You may not assign or transfer your rights or obligations under these Terms without our written consent. We may assign our rights and obligations without restriction.

**Language:** These Terms are written in English. In the event of any inconsistency between an English version and a translated version, the English version prevails.`,
  },
  {
    id: "changes",
    title: "19. Changes to these Terms",
    content: `We may update these Terms from time to time. When we make material changes, we will:

- Update the "Last updated" date at the top of this page
- Notify you by email or via an in-app notice at least 14 days before the changes take effect (for significant changes)

Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Service and may cancel your subscription in accordance with Section 7.`,
  },
  {
    id: "contact",
    title: "20. Contact us",
    content: `If you have any questions about these Terms, please contact us via our contact form at solu.ae/contact.

We will respond to all enquiries within 30 days.`,
  },
]

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <SoluHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.05] blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-[#F7941D] rounded-full text-sm font-semibold mb-8">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm font-medium">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 lg:px-12 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#F7941D] pl-6 py-1">
            Please read these Terms carefully before using Solu. They explain what you can expect from us, what we expect from you, and how we handle things like payments, your content, and any disputes.
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
                  if (para.startsWith("- ")) {
                    const items = para.split("\n").filter((l) => l.startsWith("- "))
                    return (
                      <ul key={i} className="space-y-2 pl-1">
                        {items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="text-[#F7941D] mt-1 shrink-0">•</span>
                            <span>{item.slice(2)}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  const boldLabel = para.match(/^\*\*(.+?)\*\*:?\s(.+)/)
                  if (boldLabel) {
                    return (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed">
                        <strong className="text-gray-900">{boldLabel[1]}:</strong> {boldLabel[2]}
                      </p>
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

          {/* Health disclaimer callout */}
          <div className="bg-orange-50 border border-orange-100 rounded-[24px] p-8">
            <p className="text-xs font-bold text-[#F7941D] uppercase tracking-widest mb-3">Important reminder</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Solu is a wellness app, not a medical service. Nothing in the Service constitutes medical advice. Always consult a qualified healthcare professional before making decisions about your health.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="border-t border-gray-100 pt-12">
            <div className="bg-gray-50 rounded-[24px] p-8 text-center">
              <p className="text-gray-900 font-bold text-lg mb-2">Questions about these Terms?</p>
              <p className="text-gray-500 text-sm mb-6">We'll respond within 30 days.</p>
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
