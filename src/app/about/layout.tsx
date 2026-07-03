import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FAB INTERIORS AND CONSTRUCTION CO. — Nairobi's trusted construction partner. 8+ years, 50+ projects, one in-house team.",
  openGraph: {
    title: "About FAB INTERIORS | Nairobi Construction Company",
    description:
      "Built on trust & craftsmanship. One team, unlimited expertise.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
