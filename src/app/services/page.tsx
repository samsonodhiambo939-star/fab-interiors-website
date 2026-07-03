"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { COMPANY } from "@/lib/utils";
const serviceDetails = [
  {
    title: "Architecture",
    description:
      "Comprehensive architectural design services for residential and commercial projects. Our architects create innovative, sustainable designs that maximize space, light, and functionality.",
    features: [
      "Residential Architecture",
      "Commercial & Retail Design",
      "Industrial Planning",
      "Renovation & Extension",
      "Building Regulations & Permits",
      "Site Analysis & Feasibility",
    ],
  },
  {
    title: "3D Design & Visualization",
    description:
      "Photorealistic 3D renderings, virtual walk-throughs, and immersive visualizations that bring your project to life before construction begins.",
    features: [
      "Photorealistic Rendering",
      "Virtual Walkthroughs",
      "Interior Visualization",
      "Exterior Visualization",
      "Material & Finish Selection",
      "Lighting Simulation",
    ],
  },
  {
    title: "Construction",
    description:
      "Full-service construction management and execution. From excavation to roofing, our experienced team delivers quality craftsmanship on every project.",
    features: [
      "Foundation & Earthworks",
      "Concrete & Masonry",
      "Steel Structure",
      "Roofing & Cladding",
      "Joinery & Carpentry",
      "Project Management",
    ],
  },
  {
    title: "MEP Systems",
    description:
      "In-house mechanical, electrical, and plumbing services ensuring your building systems are installed to the highest standards by our certified technicians.",
    features: [
      "Electrical Installation",
      "Plumbing & Drainage",
      "HVAC Systems",
      "Fire Protection",
      "Security Systems",
      "Energy Efficiency",
    ],
  },
  {
    title: "Interior Design",
    description:
      "Transform your space with our comprehensive interior design services. We handle everything from space planning to custom furniture selection.",
    features: [
      "Space Planning",
      "Custom Furniture Design",
      "Lighting Design",
      "Flooring & Tiling",
      "Window Treatments",
      "Accessories & Styling",
    ],
  },
  {
    title: "Painting & Finishing",
    description:
      "Professional painting services for interior and exterior surfaces. We use premium paints and techniques for flawless, long-lasting finishes.",
    features: [
      "Interior Painting",
      "Exterior Painting",
      "Texture Finishes",
      "Wallpaper Installation",
      "Color Consultation",
      "Protective Coatings",
    ],
  },
];
export default function ServicesPage() {
  return (
    <>
      {" "}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-charcoal via-[#2B2B2B] to-charcoal overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-grid-white opacity-10" />{" "}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-copper/20 to-transparent rounded-full blur-[40px]" />{" "}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sand/15 rounded-full blur-[40px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {" "}
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>{" "}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {" "}
              Comprehensive <span className="text-gradient">
                Construction
              </span>{" "}
              Services{" "}
            </h1>{" "}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {" "}
              We handle every aspect of your project in-house. No
              subcontractors, no handoffs — just seamless execution from one
              dedicated team.{" "}
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-cream via-[#E5DDD3] to-cream overflow-hidden">
        {" "}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-copper/5 rounded-full blur-[40px]" />{" "}
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-sand/5 rounded-full blur-[40px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {" "}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-copper mb-4">
              {" "}
              Everything Under{" "}
              <span className="text-gradient">One Roof</span>{" "}
            </h2>{" "}
            <p className="text-gray-600 text-lg">
              {" "}
              From foundation to finishing, our in-house team of experts
              delivers every trade with precision and care.{" "}
            </p>{" "}
          </motion.div>{" "}
          <div className="space-y-8">
            {" "}
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {" "}
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-500">
                  {" "}
                  <CardContent className="p-8 lg:p-10">
                    {" "}
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                      {" "}
                      <div className="lg:col-span-2">
                        {" "}
                        <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
                          {" "}
                          <span className="text-charcoal">
                            0{index + 1}
                          </span>{" "}
                          {service.title}{" "}
                        </h3>{" "}
                        <p className="text-gray-600 leading-relaxed">
                          {" "}
                          {service.description}{" "}
                        </p>{" "}
                      </div>{" "}
                      <div className="lg:col-span-3">
                        {" "}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {" "}
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 p-3 rounded-lg bg-warm-white/50"
                            >
                              {" "}
                              <Check className="w-4 h-4 text-charcoal shrink-0" />{" "}
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>{" "}
                            </div>
                          ))}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </CardContent>{" "}
                </Card>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-20 bg-cream">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {" "}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-copper mb-4">
              {" "}
              Ready to Get Started?{" "}
            </h2>{" "}
            <p className="text-gray-600 text-lg mb-8">
              {" "}
              Contact us today for a free consultation and project
              estimate.{" "}
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-4">
              {" "}
              <Link href="/contact">
                {" "}
                <Button size="lg" className="group">
                  {" "}
                  Request a Quote{" "}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />{" "}
                </Button>{" "}
              </Link>{" "}
              <a href={`tel:${COMPANY.phone}`}>
                {" "}
                <Button size="lg" variant="outline">
                  {" "}
                  Call {COMPANY.phone}{" "}
                </Button>{" "}
              </a>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
