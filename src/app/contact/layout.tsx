import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FAB INTERIORS AND CONSTRUCTION CO. for a free consultation and quote. Nairobi-based construction experts.",
  openGraph: {
    title: "Contact FAB INTERIORS | Nairobi Construction",
    description:
      "Start your dream project. Free consultation & quote.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
