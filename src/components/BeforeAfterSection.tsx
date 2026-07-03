"use client";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function BeforeAfterSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-copper/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-sand/10 rounded-full blur-[60px]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Before & <span className="text-copper">After</span>
          </h2>
          <p className="text-gray-200 text-lg">
            See the transformation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="rounded-2xl overflow-hidden shadow-xl border border-white/10"
        >
          {" "}
          <BeforeAfterSlider
            beforeImage="/assets/before-image.jpg"
            afterImage="/assets/after-image.jpg"
            beforeLabel="Before"
            afterLabel="After"
          />{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
