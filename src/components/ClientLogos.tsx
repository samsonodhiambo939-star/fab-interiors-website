"use client";
import { motion } from "framer-motion";

const logos = [
  { name: "Client 1", initials: "C1" },
  { name: "Client 2", initials: "C2" },
  { name: "Client 3", initials: "C3" },
  { name: "Client 4", initials: "C4" },
  { name: "Client 5", initials: "C5" },
  { name: "Client 6", initials: "C6" },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-charcoal border-t border-copper/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-gray-400 text-xs uppercase tracking-widest">
            Trusted By
          </span>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-24 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-copper/30 transition-colors"
              title={logo.name}
            >
              <span className="text-gray-500 text-xs font-medium">{logo.initials}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
