import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

import Testimonials from "@/components/Testimonials";
import CTA from "@/components/sections/cta";
export const metadata: Metadata = {
  title: "FAB INTERIORS | Interior Design & Construction Nairobi",
  description:
    "Full-service construction and interior design in Nairobi. We build houses from foundation to top and craft interiors that inspire.",
  openGraph: {
    title: "FAB INTERIORS | Let's Create Your Dream Interior",
    description:
      "Full-service construction and interior design in Nairobi. We build houses from foundation to top and craft interiors that inspire.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <PortfolioSection />
      <Testimonials />
      <CTA />
    </>
  );
}
