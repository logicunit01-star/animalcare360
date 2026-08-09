'use client';
import React from "react";
import Link from "next/link";
import { Warehouse, CheckCircle2, ArrowRight, Boxes, ClipboardList, PackageCheck, BarChart3 } from "lucide-react";
import CTA from "@/components/CTA";

export default function InventoryManagementFeature() {
  const items = [
    { title: "Batch And Expiry", desc: "Track batch codes, purchase dates, expiry dates, and supplier details for feed, medicines, vaccines, and pet retail items." },
    { title: "Low-Stock Alerts", desc: "Set reorder levels for wanda, silage, minerals, medicines, and store items so teams know what needs purchase before stockouts happen." },
    { title: "Multi-Warehouse", desc: "Manage stock by farm, store, warehouse, clinic pharmacy, shop branch, or distribution location with clear transfer history." },
    { title: "Intake Ledger", desc: "Record procurement, supplier bills, purchase rates, quantities, stock value, and opening balances in one inventory ledger." }
  ];

  const workflow = [
    "Create item categories for feed, medicine, vaccines, pet food, supplies, and fixed assets.",
    "Add opening stock with unit, batch, expiry, purchase rate, supplier, and warehouse.",
    "Record purchases, transfers, diet runs, medicine usage, sales, and adjustments.",
    "Review low-stock, expiring-stock, valuation, and consumption reports.",
    "Connect inventory records with billing, farm finance, and livestock health activity."
  ];

  const reports = [
    "Stock on hand by warehouse",
    "Low-stock reorder list",
    "Batch and expiry report",
    "Feed consumption summary",
    "Medicine usage history",
    "Inventory valuation report"
  ];

  const faqs = [
    { q: "Can AnimalCare360 track feed inventory?", a: "Yes. AnimalCare360 tracks feed stock, wanda bags, silage, minerals, medicine, and supplies with quantities, purchase rates, low-stock levels, and warehouse locations." },
    { q: "Can it track medicine expiry dates?", a: "Yes. Medicines, vaccines, pet food, and pharmacy items can be recorded with batch and expiry details so teams can review expiring stock before it becomes waste." },
    { q: "Can inventory connect to animal health records?", a: "Yes. Medicine and vaccine usage can be connected with treatment records, helping farms see both health activity and stock movement." },
    { q: "Can feed use be connected to farm cost?", a: "Yes. Feed purchases and consumption can be connected with farm finance so owners can review stock value, feed cost, and profitability reports." }
  ];

  return (
    <div className="pt-0 bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.animalcare360.com/features" },
              { "@type": "ListItem", "position": 3, "name": "Inventory Management", "item": "https://www.animalcare360.com/features/inventory-management" }
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
            "name": "Animal Feed & Medicine Inventory Management (AnimalCare360)",
            "operatingSystem": "All (Web & Android)",
            "applicationCategory": "BusinessApplication",
            "description": "Veterinary medicine batch tracking, feed inventory control, low-stock thresholds, and multi-warehouse allocations for animal care businesses."
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

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Core Feature</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Feed & Medicine Inventory Management
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              AnimalCare360 inventory management helps farms, wanda shops, feed distributors, and veterinary pharmacies track stock, batch, expiry, warehouse, supplier, purchase cost, consumption, and low-stock alerts from one system. It works as feed inventory software for farms and retailers that need cost and stock visibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/solutions/cattlepro/features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                All 16 Modules Spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-20">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is feed and medicine inventory software?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              Feed and medicine inventory software records every stock item, purchase, batch, expiry, warehouse transfer, usage event, and reorder level. In AnimalCare360, inventory connects with livestock health, feed consumption, POS billing, supplier ledgers, and finance reports, so owners can control stock and cost without separate spreadsheets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Real-Time Inventory Reconciliation</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Manual stock checks create gaps between what was purchased, what was used, and what remains. AnimalCare360 lets teams record feed purchases, diet runs, medicine use, vaccine usage, stock transfers, and retail sales in the same operating system.
              </p>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                This matters for livestock farms managing feed cost per animal, wanda shops comparing feed inventory software with manual khata registers, and veterinary clinics managing medicines with batch and expiry sensitivity.
              </p>
              <ul className="space-y-4">
                {["Auto-deduct feed through diet or consumption records", "Track medicine batch and shelf expiry", "Manage multi-warehouse transfer registers", "Review stock valuation and usage reports"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-navy font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((card) => (
                <div key={card.title} className="p-6 bg-brand-background border border-brand-border rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Warehouse className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "For Livestock Farms", icon: Boxes, desc: "Track wanda, silage, minerals, vaccines, treatments, and supplies by farm location so feed and medicine cost can be connected to livestock performance." },
              { title: "For Feed Retailers", icon: PackageCheck, desc: "Manage shop stock, supplier purchases, customer sales, batch details, low-stock items, and expiry-sensitive products for wanda and pet food retail." },
              { title: "For Clinics", icon: ClipboardList, desc: "Control pharmacy stock, prescriptions, medicine usage, vaccine batches, purchase rates, and invoice-linked inventory movement." }
            ].map((card) => (
              <div key={card.title} className="bg-brand-background border border-brand-border rounded-[32px] p-8">
                <card.icon className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">{card.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <section className="bg-white border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Inventory Workflow</h2>
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                    <p className="text-sm text-brand-muted leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-brand-navy text-white rounded-[32px] p-8">
              <BarChart3 className="w-10 h-10 text-brand-primary mb-6" />
              <h2 className="text-2xl font-bold mb-6">Reports Owners Can Review</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reports.map((report) => (
                  <div key={report} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm font-semibold">
                    {report}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-24">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Inventory Fields Teams Can Track</h2>
            <p className="text-brand-muted leading-relaxed mb-6 max-w-4xl">
              Good inventory records need more than an item name and quantity. AnimalCare360 can organize the details owners need for purchasing, valuation, expiry control, and cost reporting across farms, shops, pharmacies, and warehouses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "Item name, category, unit, SKU, barcode, supplier, purchase rate, and sale rate",
                "Batch number, expiry date, warehouse, opening stock, received stock, and current balance",
                "Low-stock threshold, transfer history, usage reason, linked animal record, and stock value"
              ].map((field) => (
                <div key={field} className="bg-white border border-brand-border rounded-2xl p-5 text-sm text-brand-muted leading-relaxed">
                  {field}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Inventory Management FAQ</h2>
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
      </section>

      <CTA
        title="Control Feed, Medicine, and Stock Movement"
        subtitle="Use AnimalCare360 to connect inventory with daily farm, retail, clinic, and finance workflows."
      />
    </div>
  );
}
