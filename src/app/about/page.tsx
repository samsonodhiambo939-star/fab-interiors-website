"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  ChevronRight,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import { COMPANY } from "@/lib/utils";
const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We build with honesty and transparency. No hidden costs, no shortcuts.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Every project receives our full attention and highest quality standards.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do. Our passion for construction shows in every detail.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Our in-house team collaborates seamlessly for consistent results.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "Years of experience refined into superior building techniques.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We embrace modern methods and materials for better buildings.",
  },
];
const team = [
  {
    name: "Fabian Onyango Okero",
    role: "Founder",
    experience: "10+ years",
    initials: "FO",
  },
  {
    name: "Fabian Onyango Okero",
    role: "Project Manager",
    experience: "10+ years",
    initials: "FO",
  },
  {
    name: "Barasa Sindani",
    role: "Senior Architect",
    experience: "8+ years",
    initials: "BS",
  },
  {
    name: "Fabian Onyango Okero",
    role: "Interior Design Director",
    experience: "10+ years",
    initials: "FO",
  },
  {
    name: "Franco Ambri Okotsi",
    role: "Construction Supervisor",
    experience: "8+ years",
    initials: "FA",
  },
  {
    name: "Bonphace Ochieng",
    role: "Quantity Surveyor",
    experience: "6+ years",
    initials: "BO",
  },
  {
    name: "Navies Aloo",
    role: "Client Relations Officer",
    experience: "5+ years",
    initials: "NA",
  },
];
export default function AboutPage() {
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
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Built on{" "}
              <span className="text-forest-green">Trust & Craftsmanship</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              For over 8 years, {COMPANY.name} has been transforming visions
              into reality. Based in Nairobi, we are a full-service interior
              design and construction company.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  Founded with a simple mission — to provide Nairobi with a
                  construction company that truly does it all. No
                  subcontractors, no finger-pointing, no quality gaps.
                </p>
                <p>
                  We built {COMPANY.name} around the idea that one team should
                  own the entire process. From the first architectural sketch to
                  the final coat of paint, our in-house experts work together
                  seamlessly.
                </p>
                <p>
                  Today, we are proud to be one of Nairobi&apos;s most trusted
                  construction partners, with over 50 completed projects and a
                  reputation for excellence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-xl bg-forest-green/5 border border-forest-green/10">
                <div className="font-heading text-4xl font-bold text-forest-green">8+</div>
                <div className="text-sm text-gray-text mt-1">Years Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-forest-green/5 border border-forest-green/10">
                <div className="font-heading text-4xl font-bold text-forest-green">50+</div>
                <div className="text-sm text-gray-text mt-1">Projects Delivered</div>
              </div>
              <div className="p-6 rounded-xl bg-forest-green/5 border border-forest-green/10">
                <div className="font-heading text-4xl font-bold text-forest-green">100%</div>
                <div className="text-sm text-gray-text mt-1">Client Satisfaction</div>
              </div>
              <div className="p-6 rounded-xl bg-forest-green/5 border border-forest-green/10">
                <div className="font-heading text-4xl font-bold text-forest-green">7</div>
                <div className="text-sm text-gray-text mt-1">In-House Trades</div>
              </div>
            </motion.div>
          </div>
          <Separator className="mb-20" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-6">
                Our <span className="text-forest-green">One-Team</span> Approach
              </h2>
              <p className="text-gray-text leading-relaxed mb-6">
                Unlike traditional construction companies that rely on
                subcontractors, we employ every professional needed for your
                project. This means:
              </p>
              <ul className="space-y-4">
                {[
                  "Single point of accountability — no passing the buck",
                  "Consistent quality across all trades",
                  "Faster project completion with coordinated schedules",
                  "Better cost control without middlemen",
                  "Seamless communication between teams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-forest-green/10 text-forest-green text-xs flex items-center justify-center mt-0.5 shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                  Our Core Values
                </h3>
                <div className="space-y-4">
                  {values.map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-forest-green" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-text">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-8 text-center">
              Our Leadership Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={`${member.name}-${member.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-xl bg-white border border-gray-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-heading font-bold text-xl">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal">{member.name}</h3>
                  <p className="text-forest-green text-sm font-medium mt-1 mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <Briefcase className="w-3.5 h-3.5 text-forest-green shrink-0" />
                    <span>{member.experience} experience</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-forest-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Let&apos;s Build Together
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Get in touch with our team and let&apos;s discuss how we can bring
              your project to life.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-forest-green hover:bg-white/90 group rounded-full"
              >
                Contact Us Today
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
