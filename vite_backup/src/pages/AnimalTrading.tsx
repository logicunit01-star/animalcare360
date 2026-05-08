import React from "react";
import { motion } from "motion/react";
import { Users, Truck, FileText, CheckCircle2, BadgePercent, Coins, BarChart3, Globe } from "lucide-react";

export default function AnimalTrading() {
  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Marketplace & B2B Hub</p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Animal Trading <br /> Suite for Professionals.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              The complete toolkit for high-value livestock traders. Manage sale-purchase logs, track commissions, and generate FBR digital receipts for every movement.
            </p>
            <button className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Why Animal Trading Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Trader Volume", val: "10k+", unit: "Animals" },
                    { label: "Commission Auth", val: "99%", unit: "Accuracy" },
                    { label: "Tax Compliance", val: "100%", unit: "FBR Sync" },
                    { label: "Stock Logs", val: "Real", unit: "Time" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-brand-background p-8 rounded-3xl border border-brand-border text-center">
                       <p className="text-3xl font-black text-brand-navy">{stat.val}</p>
                       <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Master the High-Value Livestock Trade</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                Trading animals in Pakistan requires trust and meticulous record-keeping. Our Animal Trading Suite digitizes the traditional hand-shake deals while providing professional financial protection.
              </p>
              <div className="space-y-6">
                {[
                  "Digital Sale & Purchase Contracts",
                  "Automated Commission Calculations",
                  "Buyer & Seller Credit Hub",
                  "Transit & Stock Movement Tracking"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-brand-background transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-brand-navy">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Core Trading Features</h2>
            <p className="text-brand-muted">Everything you need to run a professional trading desk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={i} className="p-10 border border-brand-border rounded-[32px] hover:border-brand-primary transition-all">
                <feature.icon className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="section-container">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">The Future of B2B Livestock Markets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                 <div>
                    <h4 className="text-brand-primary font-bold mb-3 flex items-center gap-2 underline underline-offset-4">
                      <Truck className="w-5 h-5"/> Logistic Integration
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Track animal transit from farm gate to market. Log health checks during transport to ensure buyers receive what they paid for.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-brand-primary font-bold mb-3 flex items-center gap-2 underline underline-offset-4">
                      <Globe className="w-5 h-5"/> Market Access
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Access a verified database of buyers and sellers within the AnimalCare360 ecosystem. Scale your business beyond regional boundaries.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
