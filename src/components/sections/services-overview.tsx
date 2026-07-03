"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Interior Design",
    description:
      "From concept to completion — we design spaces that reflect your personality and lifestyle. Modern, minimalist, or luxury.",
    image: "/service-interior.jpg",
  },
  {
    title: "Furniture",
    description:
      "Custom-made and curated furniture pieces that blend comfort with elegance. Sourced and crafted to your exact taste.",
    image: "/service-furniture.jpg",
  },
  {
    title: "Flooring",
    description:
      "Premium flooring solutions — hardwood, tiles, vinyl, and more. Durable finishes that elevate every room.",
    image: "/service-flooring.jpg",
  },
];

export default function ServicesOverview() {
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
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            We Make Your Interior{" "}
            <span className="text-forest-green">Beautiful</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-700 will-change-transform"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-gray-100 group-hover:border-forest-green/30 transition-colors duration-500 shadow-sm group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={service.image}
                  alt={`${service.title} service by FAB INTERIORS Nairobi`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6 text-center">
                {service.description}
              </p>
              <div className="text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-forest-green font-medium text-sm hover:gap-2 transition-all"
                >
                  View More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
