import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive construction services in Nairobi: architecture, 3D design, construction, MEP, interiors, and painting. All in-house.",
  openGraph: {
    title: "Our Services | FAB INTERIORS Nairobi",
    description:
      "One contractor, all trades. From foundation to finishing.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
