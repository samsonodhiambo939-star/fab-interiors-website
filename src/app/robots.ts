import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/brochure" },
    ],
    sitemap: "https://fabinteriors.co.ke/sitemap.xml",
  };
}
