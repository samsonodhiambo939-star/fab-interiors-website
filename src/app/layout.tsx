import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

export const viewport: Viewport = {
  themeColor: "#1B3B2F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fabinteriors.co.ke"),
  title: {
    default: "FAB INTERIORS | Interior Design & Construction Nairobi",
    template: "%s | FAB INTERIORS",
  },
  description:
    "FAB INTERIORS AND CONSTRUCTION CO. — full-service construction, interior design, furniture, and flooring in Nairobi. We build your dream from foundation to finish.",
  keywords: [
    "construction Nairobi",
    "interior design Nairobi",
    "furniture Nairobi",
    "flooring Nairobi",
    "house building Kenya",
    "home construction Nairobi",
    "FAB INTERIORS",
  ],
  openGraph: {
    title: "FAB INTERIORS | Interior Design & Construction Nairobi",
    description:
      "Full-service construction and interior design in Nairobi. We build houses from foundation to finish and craft interiors that inspire.",
    url: "https://fabinteriors.co.ke",
    siteName: "FAB INTERIORS AND CONSTRUCTION CO.",
    locale: "en_KE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAB INTERIORS logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAB INTERIORS | Interior Design & Construction Nairobi",
    description:
      "Full-service construction and interior design in Nairobi. We build houses from foundation to finish and craft interiors that inspire.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "FAB INTERIORS",
    statusBarStyle: "black-translucent",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://fabinteriors.co.ke" />
        <meta name="google-site-verification" content="LEi32bfUzaY8JQbCzACeJF9zLa0jQQO9xdM7SQY8V3A" />
        <meta name="msapplication-TileColor" content="#1B3B2F" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="application-name" content="FAB INTERIORS" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "FAB INTERIORS AND CONSTRUCTION CO.",
              image: "https://fabinteriors.co.ke/og-image.jpg",
              "@id": "https://fabinteriors.co.ke",
              url: "https://fabinteriors.co.ke",
              telephone: "0752 653759",
              email: "info@fabinteriors.co.ke",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61591627612912",
                "https://www.instagram.com/fabinteriors.ke",
                "https://x.com/fabinterior_ke",
                "https://www.tiktok.com/@fab.interior.and.d",
                "https://www.youtube.com/@fab_interiors",
              ],
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
              ],
              serviceType: [
                "Construction",
                "Interior Design",
                "Furniture",
                "Flooring",
              ],
              areaServed: "Nairobi, Kenya",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollProgressBar /> <Navbar />
        <main className="flex-1">{children}</main> <Footer />
        <FloatingWhatsApp /> <BackToTop />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LSL6WC08D6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LSL6WC08D6');`}
        </Script>
      </body>
    </html>
  );
}
