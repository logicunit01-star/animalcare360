import React from "react";
import { motion } from "motion/react";
import { ShoppingCart, Package, Users, Database, CheckCircle2, ShoppingBag, BarChart2, ShieldCheck } from "lucide-react";

export default function FeedRetail() {
  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="bg-brand-background py-24 border-b border-brand-border relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Retail & Wholesale ERP</p>
            <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 leading-tight">
              Feed & Pet Food <br /> Retail Management.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              The precision POS for Wanda, Ration, and Pet Food businesses. Manage bulk supply chains, track fodder inventory, and handle retail sales with ease.
            </p>
            <div className="flex gap-4">
               <button className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold shadow-xl">Get Started</button>
               <button className="bg-white border border-brand-border text-brand-navy px-8 py-4 rounded-xl font-bold">Watch Demo</button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/3"></div>
      </section>

      {/* Retail Specifics */}
      <section className="py-24 bg-white">
         <div className="section-container">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold text-brand-navy mb-6">Built for the Shop Floor</h2>
               <p className="text-brand-muted max-w-2xl mx-auto">From small pet shops to massive wanda distribution hubs, our ERP scales with your transaction volume.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
               {[
                 {
                   title: "High-Speed POS",
                   icon: ShoppingBag,
                   desc: "Cloud-synced terminal that works offline. Scan barcodes, generate FBR QR receipts, and manage customer credit at lightning speed."
                 },
                 {
                   title: "Batch & Expiry",
                   icon: ShieldCheck,
                   desc: "Crucial for feed and pet food. Automatically track batch numbers and get notified 30 days before expiry to reduce waste."
                 },
                 {
                   title: "Wholesale CRM",
                   icon: Users,
                   desc: "Manage B2B relationships. Set custom pricing tiers for regular dealers and track credit limits with automated reminders."
                 },
                 {
                   title: "Multi-Warehouse",
                   icon: Database,
                   desc: "Synchronize stock across your retail shop, godown, and mobile supply vans in real-time."
                 },
                 {
                   title: "Bulk Supply Logs",
                   icon: Package,
                   desc: "Manage ton-level procurements. Track grass, corn, and grain supplies with cost-averaging inventory models."
                 },
                 {
                   title: "Sales Analytics",
                   icon: BarChart2,
                   desc: "Understand your best-selling rations. Track profit margins per SKU and optimize your shelf space."
                 }
               ].map((item, i) => (
                 <div key={i} className="group p-10 border border-brand-border rounded-[32px] bg-white hover:bg-brand-background transition-colors">
                    <item.icon className="w-10 h-10 text-brand-primary mb-6" />
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="bg-brand-navy rounded-[48px] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold mb-8 italic">"Scale your distribution with FBR compliance built-in."</h2>
                  <div className="space-y-6">
                     {[
                       "FBR QR-coded sales invoices",
                       "Purchase tax reconciliation",
                       "Complete digital audit trail",
                       "Professional VAT/GST reporting"
                     ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 text-brand-primary font-bold">
                           <CheckCircle2 className="w-6 h-6" />
                           <span className="text-white">{point}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                     <p className="text-4xl font-black mb-1">99.9%</p>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Inventory Accuracy</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                     <p className="text-4xl font-black mb-1">0%</p>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Tax Non-Compliance</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
