import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the FAB INTERIORS team. Architects, engineers, designers, and craftsmen — all in-house, all dedicated to your project.",
  openGraph: {
    title: "Our Team | FAB INTERIORS Nairobi",
    description:
      "One team, unlimited expertise. Meet the people behind the build.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
