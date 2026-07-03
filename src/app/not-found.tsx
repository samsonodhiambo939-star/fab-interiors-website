import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | FAB INTERIORS",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-7xl font-heading font-bold text-forest-green mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-charcoal mb-2">Page Not Found</h2>
        <p className="text-gray-text max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-forest-green text-white px-8 py-3 rounded-full font-semibold hover:bg-forest-green/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
