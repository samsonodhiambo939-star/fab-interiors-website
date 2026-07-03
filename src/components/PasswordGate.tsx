"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
const PASSWORD = "admin123";
const STORAGE_KEY = "fab-auth";
export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setAuthed(true);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthed(true);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };
  if (authed) return <>{children}</>;
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
      {" "}
      <div className="absolute inset-0 bg-grid-white opacity-10" />{" "}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-copper/10 rounded-full blur-[40px]" />{" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md mx-4"
      >
        {" "}
        <div className="bg-charcoal-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 lg:p-10 shadow-2xl text-center">
          {" "}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-copper to-sand flex items-center justify-center mx-auto mb-6">
            {" "}
            <Lock className="w-7 h-7 text-white" />{" "}
          </div>{" "}
          <h1 className="font-heading text-2xl font-bold text-white mb-2">
            {" "}
            Site Unavailable{" "}
          </h1>{" "}
          <p className="text-gray-400 text-sm mb-8">
            {" "}
            This site is currently under development. Please check back
            later.{" "}
          </p>{" "}
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            <div className="relative">
              {" "}
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter password"
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper transition-all"
              />{" "}
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-6 left-0 text-red-400 text-xs"
                >
                  {" "}
                  Incorrect password. Try again.{" "}
                </motion.p>
              )}{" "}
            </div>{" "}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-copper to-copper-dark text-white font-medium text-sm hover:shadow-lg hover:shadow-copper/20 transition-all active:scale-[0.98]"
            >
              {" "}
              Continue{" "}
            </button>{" "}
          </form>{" "}
          <p className="text-gray-500 text-xs mt-6">
            FAB INTERIORS AND CONSTRUCTION CO.
          </p>{" "}
        </div>{" "}
      </motion.div>{" "}
    </div>
  );
}
