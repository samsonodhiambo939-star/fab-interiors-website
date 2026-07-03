"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "What services does FAB INTERIORS offer?",
    answer:
      "We specialize in interior design, furniture supply and installation, flooring solutions, and complete home fit-outs. Our team handles everything from concept to completion.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Yes. We design and fit out offices, retail spaces, showrooms, and other commercial interiors across Nairobi.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A single room makeover can take 2–4 weeks, while full home interiors may take 2–4 months. We provide a detailed schedule upfront.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes. We offer a free on-site consultation to understand your needs, take measurements, and provide a quote with no obligation.",
  },
  {
    question: "Are your furniture pieces custom-made?",
    answer:
      "We offer both custom-made furniture tailored to your space and curated pieces from premium suppliers, depending on your preference and budget.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Contact us via phone at 0752 653759, email info@fabinteriors.co.ke, or fill out the contact form on our website. We'll get back to you within 24 hours.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              FAQ
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Frequently Asked <span className="text-forest-green">Questions</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Everything you need to know about working with FAB INTERIORS.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white border-forest-green/30 shadow-md"
                      : "bg-white border-gray-200 hover:border-forest-green/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-heading text-lg font-semibold text-charcoal">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                        openIndex === index
                          ? "bg-forest-green text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
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
                        <p className="text-gray-text mt-4 leading-relaxed border-t border-gray-100 pt-4">
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
    </>
  );
}
