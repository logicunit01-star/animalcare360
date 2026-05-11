'use client';
import React from "react";
import Link from "next/link";
import { PawPrint, LineChart, Users, ShoppingCart, HeartPulse, Sprout, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function Features() {
  const features = [
    {
      title: "Cattle Management",
      desc: "Comprehensive tracking for Pakistan's growing livestock sector. Classify your herd by pedigree, category, and breed.",
      icon: PawPrint,
      details: ["Pedigree Traceability", "Milk Monitoring", "Weight Gain Analysis", "Health Alerts"],
      link: "/cattle-management"
    },
    {
      title: "Animal Trading Suite",
      desc: "Designed for B2B Animal Traders. Manage high-value livestock trade from sale-purchase to collection.",
      icon: Users,
      details: ["Sale/Purchase Logs", "Commission Tracking", "Stock Movement", "B2B Dashboards"],
      link: "/animal-trading"
    },
    {
      title: "Pet Hospital & Clinics",
      desc: "Comprehensive clinical software for pet hospitals. Manage patient EMRs, surgery logs, and pharmacy inventory.",
      icon: HeartPulse,
      details: ["Patient EMR", "Surgery Logs", "Pharmacy Sync", "Appointment Hub"],
      link: "/pet-hospital"
    },
    {
      title: "Feed Retail (Wanda)",
      desc: "A powerful ERP for Wanda, Ration, and grass retailers. Manage bulk supply chains and track inventory.",
      icon: ShoppingCart,
      details: ["Retail POS", "Wholesale Orders", "Credit Tracking", "Bulk Supply Logs"],
      link: "/feed-retail"
    },
    {
      title: "Diet Formulation",
      desc: "Maximize ROI through nutritional science. Formulate custom rations for fattening lots and dairy herds.",
      icon: Sprout,
      details: ["Scientific Rations", "Cost Analysis", "Ingredient Inventory", "Conversion Reporting"],
      link: "/cattle-management"
    },
    {
      title: "FBR Compliance",
      desc: "Generate FBR-compliant QR receipts, manage complex profit/loss statements, and maintain digital records.",
      icon: LineChart,
      details: ["QR Receipts", "Tax Compliance", "P&L Dashboards", "Auditing Readiness"],
      link: "/pricing"
    }
  ];

  return (
    <div className="pt-20 pb-0">
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">The ERP Ecosystem</p>
          <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 tracking-tight">Built for Precision.</h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-xl leading-relaxed">
            AnimalCare360 integrates every facet of your business into a single hub. From clinical health to complex financial compliance.
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
                className="mb-8 flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-[9px] hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>

              <div className="pt-8 border-t border-brand-border grid grid-cols-2 gap-y-4 gap-x-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.05em] leading-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-sm shadow-green-200"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
