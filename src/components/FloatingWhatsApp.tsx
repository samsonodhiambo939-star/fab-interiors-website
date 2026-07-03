"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105"
    >
      {" "}
      <MessageCircle className="w-5 h-5" />{" "}
      <span className="text-sm font-medium hidden sm:inline">
        Chat with Us
      </span>{" "}
    </motion.a>
  );
}
