import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our completed construction and design projects in Nairobi. Residential, commercial, interior, and architecture portfolio.",
  openGraph: {
    title: "Our Portfolio | FAB INTERIORS Nairobi",
    description:
      "See our work. 50+ projects completed across Nairobi.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
