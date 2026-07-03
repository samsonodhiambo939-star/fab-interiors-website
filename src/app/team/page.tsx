"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Briefcase } from "lucide-react";
import { COMPANY } from "@/lib/utils";
const teamMembers = [
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
export default function TeamPage() {
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
              Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Meet the <span className="text-forest-green">People</span> Behind the Build
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Our in-house team of architects, engineers, designers, and
              craftsmen work together seamlessly to deliver exceptional results
              on every project.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
              One Team, <span className="text-forest-green">Unlimited Expertise</span>
            </h2>
            <p className="text-gray-text text-lg">
              Every member of our team is a full-time employee, not a
              subcontractor. This means consistent quality, aligned goals, and
              total accountability.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-500 group bg-white border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-forest-green flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                      <span className="text-white font-heading font-bold text-2xl">
                        {member.initials || "?"}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-charcoal text-center">
                      {member.name}
                    </h3>
                    <p className="text-forest-green text-sm font-medium text-center mb-4">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100 text-xs text-gray-500">
                      <Briefcase className="w-3.5 h-3.5 text-forest-green shrink-0" />
                      <span>{member.experience} experience</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-text text-lg">
              We&apos;re always looking for talented professionals who share our
              passion for quality construction.
            </p>
            <a href={`mailto:${COMPANY.email}?subject=Job%20Inquiry`}>
              <Button size="lg" variant="outline" className="group rounded-full">
                Send Your CV
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
