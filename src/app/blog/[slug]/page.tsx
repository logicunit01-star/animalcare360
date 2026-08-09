import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import CTA from "@/components/CTA";
import { blogArticleMap, blogArticles } from "@/lib/blogArticles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.animalcare360.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticleMap[slug];

  if (!article) return {};

  const metaTitle = article.metaTitle ?? `${article.title} | AnimalCare360`;

  return {
    title: metaTitle,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: metaTitle,
      description: article.description,
      url: `${siteUrl}/blog/${article.slug}`,
      type: "article",
      siteName: "AnimalCare360",
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticleMap[slug];

  if (!article) notFound();

  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.date,
            author: { "@type": "Organization", name: "AnimalCare360" },
            publisher: { "@type": "Organization", name: "AnimalCare360", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
            mainEntityOfPage: articleUrl,
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          })
        }}
      />

      <article className="section-container max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-navy font-bold text-xs uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-12">
          <span className="inline-block bg-brand-background text-brand-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
            {article.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-6">{article.title}</h1>
          <p className="text-xl text-brand-muted leading-relaxed mb-6">{article.intro}</p>
          <div className="flex flex-wrap items-center gap-5 text-xs text-brand-muted font-bold uppercase">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy tracking-tight mb-5">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-brand-muted leading-relaxed text-base">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="bg-brand-background border border-brand-border rounded-[32px] p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Related AnimalCare360 Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {article.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border border-brand-border rounded-2xl px-5 py-4 font-bold text-sm text-brand-navy hover:border-brand-primary flex items-center justify-between gap-3">
                {link.label} <ArrowRight className="w-4 h-4 text-brand-primary" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {article.faqs.map((faq) => (
              <details key={faq.q} className="group border border-brand-border rounded-2xl bg-brand-background p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-start justify-between gap-4 cursor-pointer">
                  <h3 className="font-bold text-brand-navy">{faq.q}</h3>
                  <span className="text-brand-primary font-bold">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted border-t border-brand-border pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
      <CTA />
    </div>
  );
}
