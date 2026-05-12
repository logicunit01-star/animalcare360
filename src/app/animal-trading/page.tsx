'use client';
import React from "react";
import Image from "next/image";
import { FileText, CheckCircle2, BadgePercent, Coins } from "lucide-react";
import CTA from "@/components/CTA";

export default function AnimalTrading() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Marketplace & B2B Hub</p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Animal Trading <br /> Suite for Professionals.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              The complete toolkit for high-value livestock traders in Pakistan. Manage sale-purchase logs, track commissions, and generate FBR digital receipts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.hulmsolutions.com/Register" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
                Start Trading Today
              </a>
              <a href="https://wa.me/923391119259" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all border border-white/20">
                Expert Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Trader Volume", val: "10k+", unit: "Animals" },
                  { label: "Commission Auth", val: "99%", unit: "Accuracy" },
                  { label: "Tax Compliance", val: "100%", unit: "FBR Sync" },
                  { label: "Stock Logs", val: "Real", unit: "Time" },
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-background p-8 rounded-3xl border border-brand-border text-center shadow-sm">
                    <p className="text-3xl font-black text-brand-navy">{stat.val}</p>
                    <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Master the High-Value Livestock Trade</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                Trading animals in Pakistan requires trust and meticulous record-keeping. Our suite digitizes traditional deals while providing professional financial protection.
              </p>
              <div className="space-y-6">
                {[
                  "Digital Sale & Purchase Contracts",
                  "Automated Commission Calculations",
                  "Buyer & Seller Credit Hub",
                  "Transit & Stock Movement Tracking"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl hover:bg-brand-background transition-colors border border-transparent hover:border-brand-border">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-brand-navy">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Smart Commission",
                icon: BadgePercent,
                desc: "Calculate agent fees, trading margins, and taxes automatically based on sale price."
              },
              {
                title: "Multi-Party Invoicing",
                icon: FileText,
                desc: "Generate professional PDFs for buyers, sellers, and transport partners in one click."
              },
              {
                title: "Financial Ledger",
                icon: Coins,
                desc: "Real-time P&L for every animal lot. Monitor cash flow and pending collections across the market."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 border border-brand-border rounded-[40px] hover:border-brand-primary transition-all shadow-sm hover:shadow-xl bg-white">
                <feature.icon className="w-10 h-10 text-brand-primary mb-8" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-video rounded-[48px] overflow-hidden border border-brand-border shadow-2xl">
            <Image
              src="/dashboard-finance.png"
              alt="Trading Financial Management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTA
        title="Scale Your Trading Business"
        subtitle="Digitize your commission tracking and sale logs. Professional software for professional animal traders."
      />
    </div>
  );
}
