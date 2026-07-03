"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Expand, Download } from "lucide-react";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-data";
import Lightbox from "@/components/Lightbox";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Architecture",
  "Renovation",
];

const heights = [
  "h-[20rem]",
  "h-[26rem]",
  "h-[22rem]",
  "h-[24rem]",
  "h-[20rem]",
  "h-[28rem]",
  "h-[22rem]",
  "h-[24rem]",
  "h-[20rem]",
  "h-[26rem]",
  "h-[22rem]",
  "h-[28rem]",
  "h-[20rem]",
  "h-[24rem]",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-footer-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Our <span className="text-forest-green">Work</span> Speaks for Itself
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Explore our portfolio of completed projects across Nairobi and
              Kenya. Each project showcases our commitment to quality, design,
              and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-forest-green text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-forest-green hover:text-forest-green"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link
              href="/brochure.pdf"
              download="FAB-INTERIORS-Portfolio.pdf"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 h-10 px-5 bg-forest-green text-white hover:bg-green-dark shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Link>
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => {
                const itemIndex = portfolioItems.indexOf(item);
                const height = heights[itemIndex % heights.length];
                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${height} bg-charcoal`}
                    whileHover={{ y: -6 }}
                  >
                    <Link href={`/portfolio/${item.slug}`}>
                      <div className="absolute inset-0">
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.category} project by FAB INTERIORS Nairobi`}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div
                        className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(item.images, 0);
                        }}
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors">
                          <Expand className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Badge className="mb-2 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                            {item.category}
                          </Badge>
                          <h3 className="font-heading text-xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              Want to See More?
            </h2>
            <p className="text-gray-text text-lg">
              Contact us to schedule a site visit and see our craftsmanship
              firsthand.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group bg-forest-green hover:bg-green-dark text-white rounded-full">
                Book a Site Visit
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (i) => (i - 1 + lightboxImages.length) % lightboxImages.length,
          )
        }
        onNext={() => setLightboxIndex((i) => (i + 1) % lightboxImages.length)}
      />
    </>
  );
}
