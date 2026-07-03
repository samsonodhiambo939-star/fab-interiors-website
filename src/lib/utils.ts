import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY = {
  name: "FAB INTERIORS AND CONSTRUCTION CO.",
  shortName: "FAB INTERIORS",
  email: "info@fabinteriors.co.ke",
  phone: "0752 653759",
  phone2: "0741 586357",
  whatsapp: "0752 653759",
  location: "Nairobi, Kenya",
  tagline: "From minimalism to luxury — we craft interiors that inspire.",
  description:
    "Full-service interior design and construction company in Nairobi. Specializing in interior design, furniture, flooring, and complete fit-outs.",
  services: [
    "Interior Design",
    "Furniture",
    "Flooring",
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591627612912",
    instagram: "https://www.instagram.com/fabinteriors.ke",
    twitter: "https://x.com/fabinterior_ke",
    tiktok: "https://www.tiktok.com/@fab.interior.and.d",
    youtube: "https://www.youtube.com/@fab_interiors",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/254752653759?text=Hello%20FAB%20INTERIORS%2C%20I'm%20interested%20in%20your%20services.`;

export const PAYMENT_INFO = {
  mpesa: {
    paybill: "542542",
    account: "41586",
    name: "FAB INTERIORS",
    bank: "I&M Bank",
  },
};
