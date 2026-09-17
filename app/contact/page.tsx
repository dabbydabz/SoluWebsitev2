import Script from "next/script"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Solu — Get in Touch",
  description: "Have a question, partnership idea, or press enquiry? Reach the Solu team directly — we usually reply within 24 to 48 hours.",
  alternates: {
    canonical: "https://www.solu.ae/contact",
  },
  openGraph: {
    title: "Contact Solu — Get in Touch",
    description: "Have a question, partnership idea, or press enquiry? Reach the Solu team directly — we usually reply within 24 to 48 hours.",
    url: "https://www.solu.ae/contact",
    siteName: "Solu",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.solu.ae/opengraph-image", width: 1200, height: 630, alt: "Solu — Women's health, fitness & wellness in sync with your cycle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solu — Get in Touch",
    description: "Have a question, partnership idea, or press enquiry? Reach the Solu team directly — we usually reply within 24 to 48 hours.",
    images: ["https://www.solu.ae/opengraph-image"],
  },
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Solu — Get in Touch",
            "url": "https://www.solu.ae/contact",
            "description": "Have a question, partnership idea, or press enquiry? Reach the Solu team directly — we usually reply within 24 to 48 hours.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Solu",
              "url": "https://www.solu.ae",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "hello@solu.ae",
                "url": "https://www.solu.ae/contact",
                "areaServed": "Worldwide",
                "availableLanguage": "English",
              },
              "sameAs": [
                "https://www.instagram.com/solu.ae",
                "https://www.tiktok.com/@solu.ae",
              ],
            },
          }),
        }}
      />
      <ContactForm />
    </>
  )
}
