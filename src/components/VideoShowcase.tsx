"use client";
import { motion } from "framer-motion";
export default function VideoShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-charcoal via-[#2B2B2B] to-charcoal overflow-hidden">
      {" "}
      <div className="absolute inset-0 bg-grid-white opacity-5" />{" "}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-copper/20 to-transparent rounded-full blur-[40px]" />{" "}
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-sand/15 rounded-full blur-[40px]" />{" "}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {" "}
          <div className="inline-flex px-4 py-2 bg-copper/10 rounded-full mb-4">
            {" "}
            <span className="text-copper text-sm font-medium">
              In Action
            </span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {" "}
            From Construction to{" "}
            <span className="text-gradient">Finishing</span>{" "}
          </h2>{" "}
          <p className="text-gray-300 text-lg">
            {" "}
            Watch our team transform a raw concrete shell into a beautiful
            finished home.{" "}
          </p>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-copper/20"
        >
          {" "}
          <div className="relative aspect-video bg-charcoal-light">
            {" "}
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/assets/after-image.jpg"
            >
              {" "}
              <source
                src="/videos/construction-timelapse.mp4"
                type="video/mp4"
              />{" "}
            </video>{" "}
          </div>{" "}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20 pointer-events-none" />{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          {" "}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            {" "}
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />{" "}
            <span className="text-gray-400 text-sm">
              Watch the full transformation — from bare structure to finished
              interior
            </span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
