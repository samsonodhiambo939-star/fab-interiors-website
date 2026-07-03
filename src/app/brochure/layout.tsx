import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Download the FAB INTERIORS AND CONSTRUCTION CO. company profile PDF. Premium construction services in Nairobi, Kenya.",
  openGraph: {
    title: "Company Profile | FAB INTERIORS Nairobi",
    description:
      "Download our company profile. Premium construction and interior design in Nairobi, Kenya.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
  robots: { index: false, follow: true },
};

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
