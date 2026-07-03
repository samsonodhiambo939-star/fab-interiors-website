"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Ruler } from "lucide-react";
const projects = [
  {
    title: "Modern Residence",
    slug: "modern-residence",
    category: "Residential",
    description:
      "Contemporary 4-bedroom home with open-plan living and sustainable design.",
    image: "/assets/modern-residence.jpg",
  },
  {
    title: "Commercial Plaza",
    slug: "commercial-plaza",
    category: "Commercial",
    description:
      "Multi-story commercial building with retail spaces and modern facade.",
    image: "/assets/commercial-plaza.jpg",
  },
  {
    title: "Luxury Villa",
    slug: "luxury-villa",
    category: "Residential",
    description:
      "Premium villa with infinity pool, landscaped gardens, and panoramic views.",
    image: "/assets/luxury-villa.jpg",
  },
  {
    title: "Office Complex",
    slug: "office-complex",
    category: "Commercial",
    description:
      "Modern office complex with collaborative workspaces and green architecture.",
    image: "/assets/office-complex.jpg",
  },
];
const services = [
  "Architectural Design",
  "3D Visualization",
  "Structural Engineering",
  "Interior Architecture",
  "Landscape Design",
  "Urban Planning",
  "Building Permits",
  "Site Analysis",
];
export default function ArchitecturePage() {
  return (
    <>
      {" "}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-grid opacity-20" />{" "}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-copper/15 rounded-full blur-[40px]" />{" "}
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sand/10 rounded-full blur-[40px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {" "}
            <Badge variant="secondary" className="mb-4">
              Architecture & Design
            </Badge>{" "}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {" "}
              Where <span className="text-gradient">Vision</span> Meets
              Structure{" "}
            </h1>{" "}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {" "}
              Our architecture team creates innovative, functional designs that
              blend aesthetics with practicality. Every project starts with
              understanding your vision and ends with a comprehensive plan ready
              for construction.{" "}
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-[#E5DDD3]">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {" "}
              <div className="inline-flex items-center gap-2 w-14 h-14 rounded-xl bg-charcoal/5 mb-4">
                {" "}
                <Ruler className="w-7 h-7 text-charcoal mx-auto" />{" "}
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-copper mb-4">
                {" "}
                Our Design Approach{" "}
              </h2>{" "}
              <p className="text-gray-600 leading-relaxed mb-6">
                {" "}
                We believe great architecture starts with great conversations.
                Our collaborative design process ensures your needs, lifestyle,
                and preferences are reflected in every detail.{" "}
              </p>{" "}
              <ul className="space-y-3">
                {" "}
                {[
                  "Initial consultation and site assessment",
                  "Concept design and 3D visualization",
                  "Detailed architectural drawings",
                  "Structural engineering and approvals",
                  "Construction documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {" "}
                    <span className="w-6 h-6 rounded-full bg-charcoal/10 text-charcoal text-xs flex items-center justify-center mt-0.5 shrink-0">
                      {" "}
                      {i + 1}{" "}
                    </span>{" "}
                    <span className="text-gray-600">{item}</span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {" "}
              {[
                { label: "Projects", value: "50+" },
                { label: "Designs", value: "200+" },
                { label: "Happy Clients", value: "50+" },
                { label: "Years Exp.", value: "8+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-gradient-to-br from-copper/10 to-sand/10 border border-copper/10 text-center"
                >
                  {" "}
                  <div className="font-heading text-3xl font-bold text-charcoal mb-1">
                    {stat.value}
                  </div>{" "}
                  <div className="text-charcoal/70 text-sm">
                    {stat.label}
                  </div>{" "}
                </div>
              ))}{" "}
            </motion.div>{" "}
          </div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {" "}
            <Badge variant="secondary">Featured Projects</Badge>{" "}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-copper mt-3 mb-4">
              {" "}
              Our Portfolio{" "}
            </h2>{" "}
          </motion.div>{" "}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {" "}
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {" "}
                <Link href={`/portfolio/${project.slug}`}>
                  {" "}
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-charcoal to-charcoal-light">
                    {" "}
                    <div className="relative h-56 overflow-hidden">
                      {" "}
                      <Image
                        src={project.image}
                        alt={`${project.title} — architecture project by FAB INTERIORS Nairobi`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />{" "}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />{" "}
                      <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />{" "}
                      <div className="absolute bottom-4 left-4">
                        {" "}
                        <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                          {project.category}
                        </Badge>{" "}
                      </div>{" "}
                    </div>{" "}
                    <CardContent className="p-6 bg-gradient-to-br from-charcoal-light to-charcoal">
                      {" "}
                      <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-sand transition-colors">
                        {project.title}
                      </h3>{" "}
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </Link>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
          <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-copper/10 via-sand/5 to-copper/5 border border-copper/10">
            {" "}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
              {" "}
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-copper" />{" "}
                  <span className="text-charcoal font-medium">
                    {service}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-20 bg-gradient-to-r from-copper via-copper-dark to-copper">
        {" "}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {" "}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {" "}
              Have a Project in Mind?{" "}
            </h2>{" "}
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {" "}
              Let&apos;s discuss your architectural vision. Schedule a
              consultation with our design team.{" "}
            </p>{" "}
            <Link href="/contact">
              {" "}
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-sand"
              >
                {" "}
                Start Your Design <ChevronRight className="w-4 h-4 ml-2" />{" "}
              </Button>{" "}
            </Link>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
