"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Homeowner",
    quote:
      "FAB INTERIORS transformed our living room beyond what we imagined. Professional, creative, and delivered on time.",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Office Manager",
    quote:
      "We hired them for our office fit-out. The result is a modern, functional space our team loves. Highly recommend!",
    rating: 5,
  },
  {
    name: "Grace Muthoni",
    role: "Property Developer",
    quote:
      "Exceptional quality and attention to detail. They handled everything from flooring to furniture.",
    rating: 5,
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function Testimonials() {
  const [[current, dir], setPage] = useState([0, 0]);

  const goTo = useCallback((index: number) => {
    setPage(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  const next = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % testimonials.length, 1]);
  }, []);

  const prev = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-forest-green font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold italic text-charcoal">
            What Our <span className="text-forest-green">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full"
              >
                <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-100 text-center">
                  <Quote className="w-8 h-8 text-forest-green/20 mx-auto mb-4" />
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-text text-lg leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-heading font-bold text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-charcoal">
                    {t.name}
                  </h4>
                  <p className="text-gray-text text-sm">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-forest-green hover:text-forest-green transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-forest-green" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-forest-green hover:text-forest-green transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
