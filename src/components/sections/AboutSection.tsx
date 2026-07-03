"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="text-forest-green font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight mb-6">
              Over 7 Years of Trusted Interior Excellence
            </h2>
            <p className="text-gray-text text-base leading-relaxed mb-6">
              At FAB INTERIORS, we transform spaces into stunning interiors that blend
              functionality with beauty. From cozy homes to commercial spaces, our team
              brings years of expertise in design, furniture, and finishing.
            </p>
            <p className="text-gray-text text-base leading-relaxed mb-8">
              We believe every space tells a story — let us help you write yours.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-forest-green hover:bg-green-dark text-white font-medium px-8 py-3.5 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl text-sm hover:scale-105 will-change-transform"
            >
              Explore Our Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative will-change-transform"
          >
            <div className="rounded-tr-[48px] rounded-bl-[48px] overflow-hidden shadow-xl">
              <Image
                src="/services-interior.jpg"
                alt="Premium interior design project by FAB INTERIORS Nairobi"
                width={600}
                height={500}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-forest-green/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-beige/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
