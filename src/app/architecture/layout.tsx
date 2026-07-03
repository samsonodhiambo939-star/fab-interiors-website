import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Professional architectural design services in Nairobi. Residential, commercial, and industrial planning by FAB INTERIORS.",
  openGraph: {
    title: "Architecture Services | FAB INTERIORS Nairobi",
    description:
      "Where vision meets structure. Custom architectural designs by our in-house team.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
