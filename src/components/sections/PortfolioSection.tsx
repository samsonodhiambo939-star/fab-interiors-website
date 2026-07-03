"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bold Seating, Bright Living",
    description: "A vibrant living room makeover with statement furniture and natural light.",
    image: "/portfolio-bold-seating.jpg",
  },
  {
    title: "Wooden Elegance",
    description: "Rich wood textures and warm tones create a timeless dining experience.",
    image: "/portfolio-wooden-elegance.jpg",
  },
  {
    title: "Relax In Comfort",
    description: "A serene bedroom retreat with soft fabrics and calming hues.",
    image: "/portfolio-relax-comfort.jpg",
  },
  {
    title: "Elegance In Every Seat",
    description: "Premium office interiors designed for productivity and style.",
    image: "/portfolio-elegance.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-forest-green font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            Spaces That Tell <span className="text-forest-green">Your Story</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 will-change-transform flex flex-col sm:flex-row"
            >
              <div className="sm:w-[45%] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — interior design project by FAB INTERIORS Nairobi`}
                  width={400}
                  height={300}
                  className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="sm:w-[55%] p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-forest-green font-medium text-sm hover:gap-2 transition-all"
                >
                  View Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
