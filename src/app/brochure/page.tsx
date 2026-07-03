"use client";
import { COMPANY } from "@/lib/utils";

export default function BrochurePage() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-charcoal border-b border-copper/20 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-white text-sm font-medium">Company Profile</span>
          <button
            onClick={() => window.print()}
            className="px-5 py-2 bg-copper text-white rounded-lg text-sm font-semibold hover:bg-copper-dark transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="bg-white min-h-screen pt-14 print:pt-0">
        <div className="max-w-4xl mx-auto px-8 py-12 print:py-8">
          <div className="border-2 border-copper/30 rounded-2xl p-10 print:p-8">
            <div className="text-center mb-10 pb-10 border-b border-copper/20">
              <h1 className="text-4xl font-bold text-charcoal font-heading mb-2">
                {COMPANY.name}
              </h1>
              <p className="text-copper text-lg font-medium">Nairobi, Kenya</p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                {COMPANY.tagline}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-charcoal font-heading mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-copper" /> About Us
              </h2>
              <p className="text-gray-600 leading-relaxed">{COMPANY.description}</p>
              <p className="text-gray-600 leading-relaxed mt-3">
                We are a full-service construction company based in Nairobi, Kenya, offering end-to-end
                services from architectural design to final finishing. Unlike other contractors, we
                employ every professional in-house — ensuring consistent quality, aligned goals, and
                total accountability on every project.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-charcoal font-heading mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-copper" /> Our Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Architecture", items: ["Residential Design", "Commercial Planning", "3D Visualization", "Structural Drawings"] },
                  { title: "3D Design", items: ["Interior Rendering", "Exterior Visualization", "Virtual Tours", "Material Selection"] },
                  { title: "Construction", items: ["Foundation Works", "Structural Framing", "Roofing", "Site Management"] },
                  { title: "MEP Systems", items: ["Electrical Wiring", "Plumbing", "HVAC", "Fire Protection"] },
                  { title: "Interior Design", items: ["Space Planning", "Custom Furniture", "Lighting Design", "Flooring & Tiling"] },
                  { title: "Painting", items: ["Interior Painting", "Exterior Painting", "Texture Finishes", "Color Consulting"] },
                ].map((s) => (
                  <div key={s.title} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-charcoal mb-2">{s.title}</h3>
                    <ul className="space-y-1">
                      {s.items.map((item) => (
                        <li key={item} className="text-gray-500 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-charcoal font-heading mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-copper" /> Why Choose Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "50+ Projects", desc: "Completed across Nairobi" },
                  { label: "100% Satisfaction", desc: "Client satisfaction guarantee" },
                  { label: "8+ Years", desc: "Industry experience" },
                  { label: "In-House Team", desc: "No subcontractors, full accountability" },
                  { label: "Licensed & Insured", desc: "BORAQS, NCA, NEMA compliant" },
                  { label: "On-Time Delivery", desc: "Rigorous project management" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center shrink-0">
                      <span className="text-copper font-bold text-sm">{item.label.split(" ")[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{item.label}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-charcoal font-heading mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-copper" /> Accreditations
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "BORAQS Registered",
                  "Fully Insured",
                  "NEMA Compliant",
                  "NCA Certified",
                  "8+ Years Experience",
                ].map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-copper/5 text-copper text-sm rounded-full border border-copper/20 font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-copper/20 pt-8 text-center">
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">Contact Us</h2>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Phone: {COMPANY.phone} / {COMPANY.phone2}</p>
                <p>Email: {COMPANY.email}</p>
                <p>Location: {COMPANY.location}</p>
                <p>WhatsApp: {COMPANY.whatsapp}</p>
              </div>
              <p className="text-gray-400 text-xs mt-6">
                &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
