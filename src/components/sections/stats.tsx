"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Clock } from "lucide-react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatItem({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const Icon = stat.icon;
  const { count, ref } = useCountUp(stat.value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-copper/20 to-sand/20 mb-4">
        <Icon className="w-7 h-7 text-copper" />
      </div>
      <div ref={ref} className="font-heading text-3xl lg:text-4xl font-bold text-white mb-1">
        {stat.text || `${count}${stat.suffix}`}
      </div>
      <div className="text-gray-300 text-sm">{stat.label}</div>
    </motion.div>
  );
}

const stats = [
  { icon: Building2, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 100, suffix: "%", label: "Client Satisfaction" },
  { icon: Award, value: 8, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 0, suffix: "", label: "On Time Delivery", text: "On Time" },
];

export default function Stats() {
  return (
    <section className="relative py-14 bg-gradient-to-br from-[#2B2B2B] via-charcoal to-[#1A1510] overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-copper/15 rounded-full blur-[60px]" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-sand/10 rounded-full blur-[60px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
