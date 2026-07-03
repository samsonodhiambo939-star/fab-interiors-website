"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/portfolio-bold-seating.jpg", span: "row-span-2", alt: "Bold seating bright living" },
  { src: "/portfolio-wooden-elegance.jpg", span: "", alt: "Wooden elegance" },
  { src: "/portfolio-relax-comfort.jpg", span: "", alt: "Relax in comfort" },
  { src: "/portfolio-luxury-villa.jpg", span: "col-span-2", alt: "Luxury villa" },
  { src: "/portfolio-open-kitchen.jpg", span: "", alt: "Open kitchen" },
];

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-forest-green font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            Interior Design <span className="text-forest-green">Gallery</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${img.span} overflow-hidden rounded-2xl will-change-transform`}
            >
              <Image
                src={img.src}
                alt={`${img.alt} — interior design gallery FAB INTERIORS Nairobi`}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
