"use client";
import { motion } from "framer-motion";
import { Banknote, Building2, Smartphone } from "lucide-react";
import { PAYMENT_INFO } from "@/lib/utils";
export default function PaymentSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };
  return (
    <section className="relative py-14 bg-footer-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest-green/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-3">
            Payment Methods
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-forest-green/30 transition-all group"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <Smartphone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-heading font-semibold text-xl mb-3">
              M-PESA
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                Paybill:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.paybill}
                </span>
              </p>
              <p>
                Account:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.account}
                </span>
              </p>
              <p>
                Name:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.name}
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-forest-green/30 transition-all group"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-500/20 transition-colors">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-heading font-semibold text-xl mb-3">
              Bank Transfer
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                Bank:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.bank}
                </span>
              </p>
              <p>
                Paybill:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.paybill}
                </span>
              </p>
              <p>
                Account:{" "}
                <span className="text-forest-green font-semibold">
                  {PAYMENT_INFO.mpesa.account}
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-forest-green/30 transition-all group"
          >
            <div className="w-16 h-16 bg-forest-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-forest-green/20 transition-colors">
              <Banknote className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-white font-heading font-semibold text-xl mb-3">
              Cash
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Cash payments accepted</p> <p>at our office or</p>
              <p>on-site delivery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
