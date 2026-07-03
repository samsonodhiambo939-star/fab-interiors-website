import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioSlugs, getPortfolioItem } from "@/lib/portfolio-data";
import ProjectDetail from "./project-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getPortfolioItem(params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} | FAB INTERIORS`,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = getPortfolioItem(params.slug);
  if (!item) notFound();

  return <ProjectDetail item={item} />;
}
