"use client";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Ruler,
  HardHat,
  Wrench,
  PaintBucket,
  ShieldCheck,
} from "lucide-react";
const steps = [
  {
    icon: ClipboardList,
    title: "Consultation & Brief",
    description:
      "We start with a free consultation to understand your vision, requirements, and budget.",
    duration: "1-2 weeks",
  },
  {
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Our architects create detailed plans and 3D visualizations for your approval.",
    duration: "3-6 weeks",
  },
  {
    icon: HardHat,
    title: "Permits & Approvals",
    description:
      "We handle all regulatory approvals and building permits on your behalf.",
    duration: "2-4 weeks",
  },
  {
    icon: Wrench,
    title: "Construction",
    description:
      "Our in-house team executes the build with rigorous quality control.",
    duration: "6-14 months",
  },
  {
    icon: PaintBucket,
    title: "Finishing & Interior",
    description:
      "Final finishes, interior design, painting, and detailed touch-ups.",
    duration: "4-8 weeks",
  },
  {
    icon: ShieldCheck,
    title: "Handover & Warranty",
    description:
      "Final inspection, handover, and ongoing warranty support for your peace of mind.",
    duration: "1-2 weeks",
  },
];
export default function ProcessTimeline() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-copper/5 via-cream to-[#E5DDD3] overflow-hidden">
      {" "}
      <div className="absolute top-0 left-0 w-72 h-72 bg-copper/5 rounded-full blur-[40px]" />{" "}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sand/10 rounded-full blur-[40px]" />{" "}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {" "}
          <div className="inline-flex px-4 py-2 bg-copper rounded-full mb-4">
            {" "}
            <span className="text-white text-sm font-medium">
              How We Work
            </span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-copper mb-4">
            {" "}
            Our <span className="text-gradient">Process</span>{" "}
          </h2>{" "}
          <p className="text-gray-600 text-lg">
            {" "}
            A proven 6-step methodology that ensures your project is delivered
            on time, on budget, and to the highest quality.{" "}
          </p>{" "}
        </motion.div>{" "}
        <div className="relative">
          {" "}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper via-sand to-copper/20 hidden lg:block" />{" "}
          <div className="space-y-8 lg:space-y-0">
            {" "}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${isEven ? "" : "lg:direction-rtl"}`}
                >
                  {" "}
                  <div
                    className={`${isEven ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}
                  >
                    {" "}
                    <div className="bg-warm-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      {" "}
                      <div
                        className={`flex items-center gap-4 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}
                      >
                        {" "}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-copper to-sand flex items-center justify-center shrink-0">
                          {" "}
                          <Icon className="w-6 h-6 text-white" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <div className="flex items-center gap-2">
                            {" "}
                            <span className="text-charcoal text-sm font-mono font-bold">
                              0{index + 1}
                            </span>{" "}
                            <h3 className="font-heading text-xl font-bold text-charcoal">
                              {step.title}
                            </h3>{" "}
                          </div>{" "}
                          <span className="text-xs text-gray-500">
                            {step.duration}
                          </span>{" "}
                        </div>{" "}
                      </div>{" "}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="hidden lg:flex justify-center">
                    {" "}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-copper to-sand flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg z-10">
                      {" "}
                      {String(index + 1).padStart(2, "0")}{" "}
                    </div>{" "}
                  </div>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
