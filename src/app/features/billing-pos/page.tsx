'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Coins, CheckCircle2, FileText, Users, ShoppingCart, Percent } from "lucide-react";
import CTA from "@/components/CTA";

export default function BillingPOSFeature() {
  const items = [
    { title: "Digital Invoicing", desc: "Built-in integration for tax-compliant QR-coded invoices for feed retail shops and veterinary pharmacies." },
    { title: "Retail POS", desc: "Rapid-fire billing screen for walk-in buyers. Search items, select payment methods, and print receipts." },
    { title: "Customer Credit", desc: "Track customer credit logs, set credit limits, view historical bills, and register partial payments." },
    { title: "Sales Margins", desc: "Automated calculations for sales margins, average inventory cost margins, and net profits." }
  ];

  return (
    <div className="pt-0 bg-brand-background">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.animalcare360.com/features" },
              { "@type": "ListItem", "position": 3, "name": "Billing & POS", "item": "https://www.animalcare360.com/features/billing-pos" }
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
            "name": "Invoicing & Retail POS ERP (AnimalCare360)",
            "operatingSystem": "All (Web & Android)",
            "applicationCategory": "BusinessApplication",
            "description": "Tax QR-coded receipts, retail POS screens, customer credit ledgers, supplier payable ledgers, and profit calculations for veterinary clinics and feed stores."
          })
        }}
      />

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Core Feature</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Invoicing & Retail POS
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Run retail wanda shops, pet hospitals, and clinical pharmacies with compliant billing terminals. Automate credit ledger accounting and monitor transaction margins.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/pricing" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Review Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Unified Credit & Financial Registers</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Connect retail transactions with overall accounts. AnimalCare360 links point-of-sale activities directly to accounting books. Track vendor payable entries, maintain customer credit profiles, generate printable invoice forms, and verify monthly profits.
              </p>
              <ul className="space-y-4">
                {["POS with QR receipts", "Integrated customer credit ledger", "Auto-updates on store stock counts", "Double-entry financial reporting"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-navy font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((card, i) => (
                <div key={i} className="p-6 bg-brand-background border border-brand-border rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Coins className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
