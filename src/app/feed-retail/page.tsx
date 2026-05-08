'use client';
import React from "react";
import Image from "next/image";
import { ShoppingBag, ShieldCheck, Users, Database, Package, BarChart2, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";

export default function FeedRetail() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-background py-24 border-b border-brand-border relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Retail & Wholesale ERP</p>
            <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 leading-tight tracking-tight">
              Feed & Pet Food <br /> Retail Management.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              The precision POS for Wanda, Ration, and Pet Food businesses in Pakistan. Manage bulk supply chains, track fodder inventory, and handle retail sales with FBR compliance.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="https://app.hulmsolutions.com/Register" className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all">Get Started</a>
               <a href="https://wa.me/923391119259" className="bg-white border border-brand-border text-brand-navy px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">Request Demo</a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/3"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
         <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
               <div className="relative aspect-video rounded-[48px] overflow-hidden border border-brand-border shadow-2xl">
                  <Image 
                    src="/dashboard-procurement.png" 
                    alt="Wanda ERP Procurement Dashboard" 
                    fill 
                    className="object-cover"
                  />
               </div>
               <div>
                  <h2 className="text-4xl font-bold text-brand-navy mb-8 tracking-tight leading-tight">Built for the Shop Floor</h2>
                  <p className="text-brand-muted text-lg leading-relaxed mb-10">
                    From small pet shops to massive wanda distribution hubs, our ERP scales with your transaction volume. Manage fodder inventory, grass supply chains, and bulk sales on one screen.
                  </p>
                  <div className="space-y-4">
                    {[
                      "FBR-compliant QR receipts for all sales",
                      "Multi-warehouse stock synchronization",
                      "Batch tracking for expiry management",
                      "Credit limit management for wholesalers"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-brand-navy font-bold">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {item}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
               {[
                 {
                   title: "High-Speed POS",
                   icon: ShoppingBag,
                   desc: "Cloud-synced terminal that works offline. Scan barcodes and generate FBR QR receipts at lightning speed."
                 },
                 {
                   title: "Batch & Expiry",
                   icon: ShieldCheck,
                   desc: "Automatically track batch numbers and get notified 30 days before expiry to reduce waste."
                 },
                 {
                   title: "Wholesale CRM",
                   icon: Users,
                   desc: "Set custom pricing tiers for regular dealers and track credit limits with automated reminders."
                 },
                 {
                   title: "Multi-Warehouse",
                   icon: Database,
                   desc: "Synchronize stock across your retail shop, godown, and mobile supply vans in real-time."
                 },
                 {
                   title: "Bulk Supply Logs",
                   icon: Package,
                   desc: "Manage ton-level procurements. Track grass and grain supplies with cost-averaging models."
                 },
                 {
                   title: "Sales Analytics",
                   icon: BarChart2,
                   desc: "Understand your best-selling rations. Track profit margins per SKU and optimize your shelf space."
                 }
               ].map((item, i) => (
                 <div key={i} className="group p-12 border border-brand-border rounded-[48px] bg-white hover:bg-brand-background transition-all shadow-sm hover:shadow-xl">
                    <item.icon className="w-12 h-12 text-brand-primary mb-8" />
                    <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="bg-brand-navy rounded-[48px] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center border border-brand-border shadow-2xl">
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
                           <span className="text-white text-lg">{point}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 text-center">
                     <p className="text-4xl font-black mb-2">99.9%</p>
                     <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Inventory Accuracy</p>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 text-center">
                     <p className="text-4xl font-black mb-2">0%</p>
                     <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Tax Non-Compliance</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <CTA 
        title="Modernise Your Retail Hub" 
        subtitle="Manage your wanda shop or pet store with precision. Joined the digital retail ecosystem of Pakistan." 
      />
    </div>
  );
}
