"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <Image
                src="/assets/logo.jpeg?v=2"
                alt="FAB INTERIORS logo Nairobi"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-forest-green rounded-full border-2 border-white" />
            </div>
            <span className="font-heading font-bold text-lg text-charcoal">
              FAB INTERIORS
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1 group",
                  pathname === link.href
                    ? "text-forest-green"
                    : "text-charcoal hover:text-forest-green",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full bg-forest-green" : "bg-forest-green",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button
                size="default"
                className="hidden md:inline-flex bg-forest-green hover:bg-green-dark text-white rounded-full px-6"
              >
                Get A Quote
              </Button>
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-forest-green/10 text-forest-green"
                      : "text-charcoal hover:bg-gray-100",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4">
                <Link href="/contact">
                  <Button className="w-full bg-forest-green hover:bg-green-dark text-white rounded-full">
                    Get A Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
