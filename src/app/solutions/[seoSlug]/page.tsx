import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoLandingPages, seoLandingPageSlugs } from "@/lib/seoLandingPages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.animalcare360.com";

type PageProps = {
  params: Promise<{ seoSlug: string }>;
};

export function generateStaticParams() {
  return seoLandingPageSlugs.map((seoSlug) => ({ seoSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { seoSlug } = await params;
  const data = seoLandingPages[seoSlug];

  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/solutions/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${siteUrl}/solutions/${data.slug}`,
      siteName: "AnimalCare360",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function SeoSolutionPage({ params }: PageProps) {
  const { seoSlug } = await params;
  const data = seoLandingPages[seoSlug];

  if (!data) {
    notFound();
  }

  return <SeoLandingPage data={data} />;
}
