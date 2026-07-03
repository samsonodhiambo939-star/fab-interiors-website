"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Lightbox from "@/components/Lightbox";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  ChevronRight,
  Calendar,
  MapPin,
  Maximize2,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";

export default function ProjectDetail({ item }: { item: PortfolioItem }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="relative h-[50vh] lg:h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.title} — hero image of project by FAB INTERIORS Nairobi`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-3 bg-white/10 backdrop-blur-sm text-white border-white/20">
                {item.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                {item.title}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio">
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 text-gray-500 hover:text-charcoal"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Button>
          </Link>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: Calendar, label: "Year", value: item.year },
              { icon: MapPin, label: "Location", value: item.location },
              { icon: Clock, label: "Timeline", value: item.timeline },
              { icon: Maximize2, label: "Size", value: item.size },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 rounded-xl bg-warm-white"
                >
                  <Icon className="w-5 h-5 text-charcoal mx-auto mb-2" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="font-heading font-semibold text-charcoal">
                    {stat.value}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {item.longDescription}
              </p>

              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} main project image FAB INTERIORS Nairobi`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                    <Maximize2 className="w-6 h-6 text-charcoal" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-warm-white border border-gray-100 sticky top-28">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
                  Scope of Work
                </h3>
                <div className="space-y-3">
                  {item.scope.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-charcoal" />
                      </div>
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <p className="text-gray-500 text-sm mb-4">
                  Interested in a similar project?
                </p>
                <Link href="/contact">
                  <Button className="w-full group">
                    Start Your Project
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {item.beforeImage && item.afterImage && (
        <section className="py-16 lg:py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-copper mb-3">
                Before & After
              </h2>
              <p className="text-gray-600">
                See the transformation with our interactive slider.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
          </div>
        </section>
      )}

      {item.images.length > 1 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-10"
            >
              Project Gallery
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img}
                    alt={`${item.title} gallery image ${i + 1} by FAB INTERIORS Nairobi`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-copper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Ready to Build Something Similar?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project. Get a free consultation and
              detailed quotation from our team.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-sand group"
              >
                Get Your Free Quote
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={item.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (i) => (i - 1 + item.images.length) % item.images.length,
          )
        }
        onNext={() => setLightboxIndex((i) => (i + 1) % item.images.length)}
      />
    </>
  );
}
