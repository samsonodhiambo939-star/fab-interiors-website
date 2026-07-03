import type { Metadata } from "next";

const faqData = [
  {
    question: "What services does FAB INTERIORS offer?",
    answer:
      "We specialize in interior design, furniture supply and installation, flooring solutions, and complete home fit-outs. Our team handles everything from concept to completion.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Yes. We design and fit out offices, retail spaces, showrooms, and other commercial interiors across Nairobi.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A single room makeover can take 2–4 weeks, while full home interiors may take 2–4 months. We provide a detailed schedule upfront.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes. We offer a free on-site consultation to understand your needs, take measurements, and provide a quote with no obligation.",
  },
  {
    question: "Are your furniture pieces custom-made?",
    answer:
      "We offer both custom-made furniture tailored to your space and curated pieces from premium suppliers, depending on your preference and budget.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Contact us via phone at 0752 653759, email info@fabinteriors.co.ke, or fill out the contact form on our website. We'll get back to you within 24 hours.",
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers about FAB INTERIORS AND CONSTRUCTION CO. — services, timelines, pricing, consultations, and more. Nairobi's trusted construction and interior design company.",
  openGraph: {
    title: "FAQ | FAB INTERIORS Nairobi",
    description:
      "Everything you need to know about working with FAB INTERIORS — from free consultations to custom furniture and project timelines.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      {children}
    </>
  );
}
