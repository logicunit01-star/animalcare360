'use client';
import React from "react";
import Link from "next/link";
import { PawPrint, LineChart, Users, ShoppingCart, HeartPulse, ArrowRight, ClipboardList, Settings, BarChart3 } from "lucide-react";
import CTA from "@/components/CTA";

export default function Features() {
  const features = [
    {
      title: "Animal Records",
      desc: "Profiles, breed, category, purchase, birth, health, vaccination, breeding, weight, milk, and sale history.",
      icon: PawPrint,
      details: ["Profiles & Breed", "Health & Vaccines", "Milk & Weight", "Sale History"],
      link: "/solutions/cattlepro"
    },
    {
      title: "Inventory",
      desc: "Feed, medicines, pet food, batches, expiry dates, warehouse stock, transfers, and low-stock alerts.",
      icon: ShoppingCart,
      details: ["Batch Tracking", "Expiry Dates", "Multi-Warehouse", "Stock Alerts"],
      link: "/features/inventory-management"
    },
    {
      title: "Sales and Finance",
      desc: "POS, invoices, customer credit, supplier payments, profit/loss, partner ROI, and tax-ready records.",
      icon: Users,
      details: ["Retail POS", "Tax Invoices", "Customer Credit", "Profit & Loss"],
      link: "/features/billing-pos"
    },
    {
      title: "Clinical Workflows",
      desc: "Patient EMR, treatment plans, appointments, surgery logs, prescriptions, pharmacy stock, and follow-up reminders.",
      icon: HeartPulse,
      details: ["Patient EMR", "Appointments", "Surgery Logs", "Pharmacy Stock"],
      link: "/features/health-tracking"
    },
    {
      title: "Reports",
      desc: "Milk yield, animal performance, sales margin, inventory valuation, pending payments, tax records, and location-wise performance.",
      icon: LineChart,
      details: ["Milk Yield", "Sales Margin", "Tax Records", "Pending Payments"],
      link: "/pricing"
    }
  ];
  const workflows = [
    "Create animal, customer, supplier, product, staff, and farm records once, then reuse them across daily workflows.",
    "Record health, breeding, milk, weight, feed, inventory, sales, payments, and clinic activity from web or Android.",
    "Connect daily entries with reports so owners can review stock, animals, receivables, payables, and profitability.",
    "Add modules as the business grows, from livestock records to feed retail POS, animal trading, or veterinary EMR."
  ];
  const faqs = [
    { q: "What are the main AnimalCare360 features?", a: "AnimalCare360 includes animal records, health tracking, breeding, feed and medicine inventory, POS billing, customer credit, supplier ledgers, trading records, veterinary EMR, and reports." },
    { q: "Can I use only one module?", a: "Yes. Businesses can start with the module they need, such as livestock records, feed retail POS, animal trading, or pet hospital workflows." },
    { q: "Does AnimalCare360 work for mixed businesses?", a: "Yes. It supports farms, wanda shops, animal traders, and veterinary clinics, so mixed animal businesses can keep records in one ecosystem." },
    { q: "Can staff update records from mobile?", a: "Yes. AnimalCare360 supports web and Android workflows so teams can update records from the office, farm, shop, clinic, or field." }
  ];

  return (
    <div className="pt-0 pb-0">
      {/* Features Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.animalcare360.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Features",
                "item": "https://www.animalcare360.com/features"
              }
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
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">The ERP Ecosystem</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-6 tracking-tight">AnimalCare360 Features for Farms, Retailers, Traders, and Clinics</h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-xl leading-relaxed">
            AnimalCare360 connects daily operations with the reports owners need. Staff can enter records from the office, shop, clinic, or field while owners monitor stock, animals, payments, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col p-10 bg-white border border-brand-border rounded-[40px] group hover:border-brand-primary transition-all shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-background rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors mb-8 shadow-inner">
                <feature.icon className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {feature.desc}
              </p>

              <Link
                href={feature.link}
                className="mb-8 flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[9px] hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>

              <div className="pt-8 border-t border-brand-border grid grid-cols-2 gap-y-4 gap-x-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-brand-navy uppercase tracking-[0.05em] leading-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-sm shadow-green-200"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What can AnimalCare360 manage?</h2>
          <p className="text-brand-muted leading-relaxed max-w-4xl">
            AnimalCare360 manages animal records, health events, breeding, milk, weight, feed inventory, medicine stock, retail POS, customer credit, supplier ledgers, animal trading, veterinary EMR, billing, and reports. It is built for livestock farms, wanda shops, animal traders, and pet hospitals that need connected operational records.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white border border-brand-border rounded-[32px] p-8">
            <ClipboardList className="w-10 h-10 text-brand-primary mb-6" />
            <h2 className="text-2xl font-bold text-brand-navy mb-6">How The Modules Work Together</h2>
            <div className="space-y-4">
              {workflows.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                  <p className="text-sm text-brand-muted leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-navy text-white rounded-[32px] p-8">
            <BarChart3 className="w-10 h-10 text-brand-primary mb-6" />
            <h2 className="text-2xl font-bold mb-6">Reports Owners Can Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Animal register", "Vaccination due list", "Milk and weight trends", "Stock valuation", "Customer receivables", "Profit and loss"].map((report) => (
                <div key={report} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm font-semibold">
                  {report}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-3xl mb-8">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Module Fit</p>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Choose Features By Business Type</h2>
            <p className="text-brand-muted leading-relaxed">
              Animal businesses rarely need every workflow on day one. Start with the module that solves the clearest operational pain, then add more connected features as records and teams mature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Farms", desc: "Start with animal profiles, health, breeding, milk, weight, feed inventory, and farm reports." },
              { title: "Retail And Trading", desc: "Start with POS, customer credit, supplier ledgers, animal deals, commission, and payment tracking." },
              { title: "Clinics", desc: "Start with patient EMR, appointments, prescriptions, pharmacy stock, billing, and follow-up reminders." }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-brand-border rounded-2xl p-6">
                <Settings className="w-7 h-7 text-brand-primary mb-4" />
                <h3 className="font-bold text-brand-navy text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">Feature FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-background border border-brand-border rounded-2xl p-6">
                <h3 className="font-bold text-brand-navy mb-3">{faq.q}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTA />
    </div>
  );
}
