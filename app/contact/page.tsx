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
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solu — Get in Touch",
    description: "Have a question, partnership idea, or press enquiry? Reach the Solu team directly — we usually reply within 24 to 48 hours.",
  },
}

export default function ContactPage() {
  return <ContactForm />
}
