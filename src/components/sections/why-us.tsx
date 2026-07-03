"use client";
import { motion } from "framer-motion";
import { Shield, Users, Clock, Wrench, Leaf, Heart } from "lucide-react";
const reasons = [
  {
    icon: Shield,
    title: "No Subcontractors",
    description:
      "We do everything in-house. One team, full accountability, consistent quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Skilled architects, engineers, designers, and craftsmen under one roof.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Rigorous project management ensures your project is delivered on schedule.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description:
      "From foundation excavation to final finishing — we handle it all.",
  },
  {
    icon: Leaf,
    title: "Quality Materials",
    description:
      "We source only the best materials for durability and premium finishes.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Your vision guides every decision. Transparent communication throughout.",
  },
];
export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-cream via-[#E5DDD3] to-cream">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {" "}
            <div className="inline-flex px-4 py-2 bg-copper rounded-full mb-4">
              {" "}
              <span className="text-white text-sm font-medium">
                Why Choose Us
              </span>{" "}
            </div>{" "}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-copper mb-6 leading-tight">
              {" "}
              The <span className="text-gradient">
                FAB Advantage
              </span> <br /> One Team, Total Control{" "}
            </h2>{" "}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {" "}
              Most construction companies subcontract critical work. We
              don&apos;t. Our in-house team of architects, engineers, interior
              designers, and craftsmen work together seamlessly, ensuring your
              project maintains the highest standards from start to finish.{" "}
            </p>{" "}
            <div className="flex flex-wrap gap-4">
              {" "}
              <div className="flex items-center gap-2 text-sm">
                {" "}
                <span className="w-2 h-2 rounded-full bg-green-500" />{" "}
                <span className="text-gray-600">Licensed & Insured</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-sm">
                {" "}
                <span className="w-2 h-2 rounded-full bg-green-500" />{" "}
                <span className="text-gray-600">8+ Years Experience</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-sm">
                {" "}
                <span className="w-2 h-2 rounded-full bg-green-500" />{" "}
                <span className="text-gray-600">50+ Happy Clients</span>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {" "}
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-copper/20 hover:shadow-md transition-all duration-300"
                >
                  {" "}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper/10 to-sand/10 flex items-center justify-center mb-3">
                    {" "}
                    <Icon className="w-5 h-5 text-charcoal" />{" "}
                  </div>{" "}
                  <h3 className="font-semibold text-charcoal mb-1">
                    {reason.title}
                  </h3>{" "}
                  <p className="text-gray-500 text-sm">
                    {reason.description}
                  </p>{" "}
                </div>
              );
            })}{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
