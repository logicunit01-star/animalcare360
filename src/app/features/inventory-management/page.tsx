'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Warehouse, CheckCircle2, AlertTriangle, ArrowRight, Layers, Boxes } from "lucide-react";
import CTA from "@/components/CTA";

export default function InventoryManagementFeature() {
  const items = [
    { title: "Batch & Expiry", desc: "Track batch codes and expiration dates for veterinary medicines to avoid waste." },
    { title: "Low-Stock Alerts", desc: "Configure automated minimum stock levels and get notifications to reorder feed." },
    { title: "Multi-Warehouse", desc: "Allocate stock across Lahore and Sahiwal stores, and record warehouse transfers." },
    { title: "Intake Ledger", desc: "Synchronize incoming procurement orders and auto-update inventory valuations." }
  ];

  return (
    <div className="pt-20 bg-brand-background">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://animalcare360.com/features" },
              { "@type": "ListItem", "position": 3, "name": "Inventory Management", "item": "https://animalcare360.com/features/inventory-management" }
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

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Core Feature</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Feed & Medicine Inventory Management
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Eliminate medicine expirations and feed stockouts. Track storage quantities, configure reorder limits, and manage multi-site warehouse distributions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/cattlepro/features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                All 16 Modules spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Real-Time Inventory Reconciliation</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Manual stock checks invite discrepancy. With AnimalCare360, every diet run or medical checkup automatically deducts stock counts. Keep complete visibility across wanda bags, grass silage, vet tools, and vaccines.
              </p>
              <ul className="space-y-4">
                {["Auto-deduct feed via diet plan runs", "Track medicine batch & shelf expiry", "Multi-warehouse transfer registers", "Real-time stock valuation analytics"].map((item, idx) => (
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
                    <Warehouse className="w-5 h-5 text-brand-primary" />
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
