"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/faq";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 lg:py-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <div className="inline-flex px-4 py-2 bg-copper rounded-full mb-4">
            <span className="text-white text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            FAQs
          </h2>
        </motion.div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${openIndex === index ? "bg-charcoal-light border-copper/30 shadow-lg shadow-copper/5" : "bg-charcoal-light/50 border-white/10 hover:border-copper/20"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-heading text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${openIndex === index ? "bg-copper text-white" : "bg-white/10 text-gray-400"}`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 mt-4 leading-relaxed border-t border-white/10 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
