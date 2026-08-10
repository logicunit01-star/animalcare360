'use client';
import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, BookOpen, Settings, ChevronRight, ClipboardList, Syringe, ShoppingCart, Milk, TableProperties } from "lucide-react";
import CTA from "@/components/CTA";

export default function Resources() {
  const primaryResources = [
    {
      title: "Livestock Record Checklist",
      desc: "Animal profile, health, breeding, feed, sale, and finance fields every cattle, goat, sheep, or mixed farm should keep.",
      href: "/solutions/livestock-record-keeping-software",
      icon: ClipboardList
    },
    {
      title: "Vaccination Record Template",
      desc: "What to record for individual and group vaccination, including dates, next due dates, medicines, batches, and notes.",
      href: "/blog/livestock-vaccination-record-template",
      icon: Syringe
    },
    {
      title: "Excel Migration Guide",
      desc: "Prepare animal, inventory, customer, vendor, and opening balance records before moving into AnimalCare360.",
      href: "/blog/move-farm-records-from-excel-to-animalcare360",
      icon: TableProperties
    },
    {
      title: "Wanda POS Checklist",
      desc: "Fields and workflows for feed retail sales, customer khata, supplier ledgers, expiry, stock, and tax-ready invoices.",
      href: "/blog/wanda-shop-pos-software-guide",
      icon: ShoppingCart
    }
  ];

  const checklists = [
    {
      title: "Cattle And Dairy Records",
      href: "/blog/digital-cattle-records-guide",
      points: ["Animal tag, breed, source, status", "Milk, weight, breeding, and calving", "Feed cost, medicine, sale, and profit"]
    },
    {
      title: "Goat Farm Records",
      href: "/blog/goat-farm-record-keeping-guide",
      points: ["Doe, buck, and kid profiles", "Breeding and kidding calendar", "Vaccination, feed, sale, and margin"]
    },
    {
      title: "Sheep Flock Records",
      href: "/blog/sheep-flock-management-guide",
      points: ["Ewe, ram, and lamb register", "Lambing, mortality, and health history", "Feed usage, sales, and flock profit"]
    },
    {
      title: "Dairy Farm Operations",
      href: "/blog/dairy-farm-management-software-guide",
      points: ["Daily milk by session", "Lactation, dry period, and breeding", "Feed cost and cost per liter"]
    }
  ];

  const implementationSteps = [
    "Collect existing paper registers, Excel files, stock lists, customer balances, supplier balances, and opening cash records.",
    "Clean duplicate animal tags, inconsistent breed names, old inactive records, and unclear opening balances before migration.",
    "Start with master records first: animals, stock, customers, vendors, farms, users, and product categories.",
    "Train staff on daily workflows such as health entry, vaccination, milk, feed use, POS billing, payments, and reports.",
    "Review the first week of records with owners and managers so reports match the way the business actually operates."
  ];

  const faqs = [
    {
      q: "What records should a livestock farm keep first?",
      a: "Start with animal profiles, health history, vaccination due dates, breeding records, feed stock, sales, expenses, customers, vendors, and opening balances."
    },
    {
      q: "Can AnimalCare360 help move records from Excel?",
      a: "Yes. Existing Excel or register data can be prepared for animals, inventory, customers, vendors, and balances before onboarding."
    },
    {
      q: "Are these resources useful for Pakistan and global farms?",
      a: "Yes. The resources use global livestock language while also covering Pakistan and South Asia terms such as wanda, khata, mandi, and tax-ready invoicing."
    },
    {
      q: "Do feed shops and pet hospitals need different checklists?",
      a: "Yes. Feed shops need POS, khata, supplier, stock, batch, and expiry records. Pet hospitals need patient EMR, appointments, prescriptions, pharmacy, billing, and follow-up records."
    }
  ];

  return (
    <div className="pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.animalcare360.com/resources" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />

      <section className="bg-brand-background border-b border-brand-border">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Resource Hub</p>
            <h1 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight">Livestock, Feed Retail, and Veterinary Business Resources</h1>
            <p className="text-brand-muted text-xl leading-relaxed">
              Practical checklists, templates, and guides for moving animal businesses from paper registers and scattered spreadsheets into searchable digital records. Use these resources for livestock farms, dairy farms, goat and sheep farms, wanda shops, animal traders, and veterinary clinics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {primaryResources.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-brand-border flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary"
              >
                <div className="w-14 h-14 bg-brand-background rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h2 className="font-bold text-brand-navy mb-4 text-xl tracking-tight">{item.title}</h2>
                <p className="text-sm text-brand-muted leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <span className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest">
                  Open Guide <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="bg-brand-navy rounded-[40px] p-8 md:p-12 text-white mb-24">
            <div className="max-w-3xl mb-10">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Implementation</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Prepare Your Business For Clean Software Setup</h2>
              <p className="text-slate-300 leading-relaxed">
                The best AnimalCare360 setup starts before the first login. Clean source data, clear module choices, and staff training make the first week of live records much smoother.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {implementationSteps.map((step, index) => (
                <div key={step} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold mb-4">{index + 1}</span>
                  <p className="text-sm text-slate-200 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="max-w-3xl mb-10">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Farm Checklists</p>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Record-Keeping Guides By Livestock Type</h2>
              <p className="text-brand-muted leading-relaxed">
                Each livestock type has different daily records, but the owner goal is the same: clean animal history, clear due dates, controlled cost, and reliable profit visibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklists.map((item) => (
                <Link key={item.title} href={item.href} className="bg-brand-background border border-brand-border rounded-[28px] p-7 hover:border-brand-primary transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                    <BookOpen className="w-6 h-6 text-brand-primary shrink-0" />
                  </div>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-brand-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "For Owners",
                icon: FileText,
                desc: "Review what data must be ready before launch, which reports matter, and how to compare paper records with live dashboards."
              },
              {
                title: "For Staff",
                icon: Settings,
                desc: "Use workflow guides for daily animal entries, stock movements, invoices, payments, treatments, and follow-up tasks."
              },
              {
                title: "For Compliance And Security",
                icon: ShieldCheck,
                desc: "Keep audit-friendly records, role-based access, tax-ready invoice history, and clean business data ownership practices."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-brand-border rounded-[32px] p-8">
                <item.icon className="w-10 h-10 text-brand-primary mb-6" />
                <h2 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h2>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Resource FAQ</h2>
              <p className="text-brand-muted text-lg">Common questions before preparing records, templates, and onboarding data.</p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-background border border-brand-border p-7 rounded-[28px]">
                  <h3 className="font-bold text-brand-navy mb-3 text-lg">{faq.q}</h3>
                  <p className="text-base text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Prepare Your Records for AnimalCare360"
        subtitle="Use these guides to clean animal, inventory, customer, supplier, and finance records before moving into the platform."
      />
    </div>
  );
}
