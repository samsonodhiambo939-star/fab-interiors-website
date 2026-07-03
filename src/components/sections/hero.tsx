"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg-v3.jpg"
          alt="Luxury interior with beige sofa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div
        className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-gradient-to-tl from-black/20 via-black/10 to-transparent backdrop-blur-[2px]"
        style={{
          borderTopLeftRadius: "120px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full z-10 will-change-transform">
        <div className="max-w-2xl">
          <motion.div {...fadeUp(0)} className="text-center mb-6">
            <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-1">
              Welcome to
            </p>
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-white">
              <span className="text-forest-green">FAB</span> INTERIORS{" "}
              <span className="text-white/60 text-xs sm:text-sm font-body font-normal tracking-wide">
                AND CONSTRUCTION CO.
              </span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.05)} className="flex justify-center mb-6">
            <Image
              src="/assets/logo.jpeg?v=2"
              alt={COMPANY.shortName}
              width={100}
              height={100}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-white/30 shadow-xl"
            />
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-forest-green rounded-full" />
            <span className="text-blue-300 text-sm font-medium tracking-wide">
              Premium Interior Design in Nairobi
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.25)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight"
          >
            Let&apos;s Create{" "}
            <span className="text-forest-green">Your</span>
            <br />
            <span className="text-forest-green">Dream Interior</span>
          </motion.h1>
          <motion.p {...fadeUp(0.35)} className="text-base sm:text-lg max-w-xl leading-relaxed mt-6">
            <span className="text-white">From minimalism to luxury &mdash; </span>
            <span className="text-white font-medium">we craft interiors that inspire.</span>
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="flex items-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest-green hover:bg-green-dark text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-beige hover:bg-beige/80 text-charcoal font-medium px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl text-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
