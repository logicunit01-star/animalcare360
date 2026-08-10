import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, HelpCircle, Layers, LineChart, Smartphone } from "lucide-react";
import CTA from "@/components/CTA";
import type { SeoLandingPageData } from "@/lib/seoLandingPages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.animalcare360.com";

export default function SeoLandingPage({ data }: { data: SeoLandingPageData }) {
  const pageUrl = `${siteUrl}/solutions/${data.slug}`;

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
              { "@type": "ListItem", position: 3, name: data.h1, item: pageUrl }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: data.h1,
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web and Android",
            description: data.description,
            brand: { "@type": "Brand", name: "AnimalCare360" },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: data.price,
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: data.price,
                priceCurrency: "USD",
                referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" }
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          })
        }}
      />

      <section className="bg-brand-background border-b border-brand-border py-20">
        <div className="section-container grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">{data.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight mb-6">{data.h1}</h1>
            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-3xl">{data.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="btn-primary !px-8 !py-4">
                Book a Demo
              </a>
              <a href="https://app.animalcare360.com/register" className="bg-brand-navy text-white hover:bg-brand-navy/90 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="bg-white border border-brand-border rounded-[32px] p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Quick Answer</p>
                <h2 className="font-bold text-brand-navy text-xl">{data.primaryKeyword}</h2>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-brand-muted mb-6">{data.quickAnswer}</p>
            <div className="grid grid-cols-2 gap-3">
              {data.bestFor.slice(0, 6).map((item) => (
                <div key={item} className="bg-brand-background border border-brand-border rounded-2xl px-4 py-3 text-xs font-bold text-brand-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Problems Solved</p>
              <h2 className="text-3xl font-bold text-brand-navy tracking-tight mb-6">Replace Manual Farm Records With Connected Operations</h2>
              <div className="space-y-4">
                {data.painPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-brand-border bg-brand-background p-5">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-brand-muted leading-relaxed font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy rounded-[32px] p-8 text-white">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Workflow</p>
              <h2 className="text-3xl font-bold tracking-tight mb-8">From First Record To Management Report</h2>
              <div className="space-y-5">
                {data.workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Core Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">Everything Needed For Daily Livestock Operations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => {
                const Icon = [Layers, HelpCircle, Smartphone, BarChart3, LineChart, ClipboardList][index % 6];
                return (
                  <div key={feature.title} className="p-7 border border-brand-border rounded-[28px] bg-white hover:shadow-card transition-all">
                    <div className="w-12 h-12 bg-brand-background rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-brand-background border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Reports You Can Generate</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.reports.map((report) => (
                  <div key={report} className="flex items-center gap-3 bg-white border border-brand-border rounded-2xl px-4 py-3">
                    <BarChart3 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span className="text-sm font-semibold text-brand-navy">{report}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Related AnimalCare360 Pages</h2>
              <div className="space-y-3">
                {data.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center justify-between gap-4 border border-brand-border rounded-2xl px-5 py-4 hover:border-brand-primary transition-colors">
                    <span className="font-bold text-brand-navy text-sm">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-brand-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Common Questions</p>
              <h2 className="text-3xl font-bold text-brand-navy tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <details key={faq.q} className="group border border-brand-border rounded-2xl bg-brand-background p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer">
                    <h3 className="font-bold text-brand-navy text-base">{faq.q}</h3>
                    <span className="text-brand-primary font-bold">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted border-t border-brand-border pt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to Use ${data.primaryKeyword}?`}
        subtitle="Book a guided demo and see how AnimalCare360 can support global livestock workflows plus Pakistan and South Asia needs like wanda, khata, mandi trading, and tax-ready invoices."
      />
    </div>
  );
}
