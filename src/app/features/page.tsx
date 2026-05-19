'use client';
import React from "react";
import Link from "next/link";
import { PawPrint, LineChart, Users, ShoppingCart, HeartPulse, Sprout, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function Features() {
  const features = [
    {
      title: "Animal Records",
      desc: "Profiles, breed, category, purchase, birth, health, vaccination, breeding, weight, milk, and sale history.",
      icon: PawPrint,
      details: ["Profiles & Breed", "Health & Vaccines", "Milk & Weight", "Sale History"],
      link: "/cattle-management"
    },
    {
      title: "Inventory",
      desc: "Feed, medicines, pet food, batches, expiry dates, warehouse stock, transfers, and low-stock alerts.",
      icon: ShoppingCart,
      details: ["Batch Tracking", "Expiry Dates", "Multi-Warehouse", "Stock Alerts"],
      link: "/feed-retail"
    },
    {
      title: "Sales and Finance",
      desc: "POS, invoices, customer credit, supplier payments, profit/loss, partner ROI, and FBR-ready records.",
      icon: Users,
      details: ["Retail POS", "FBR Invoices", "Customer Credit", "Profit & Loss"],
      link: "/animal-trading"
    },
    {
      title: "Clinical Workflows",
      desc: "Patient EMR, treatment plans, appointments, surgery logs, prescriptions, pharmacy stock, and follow-up reminders.",
      icon: HeartPulse,
      details: ["Patient EMR", "Appointments", "Surgery Logs", "Pharmacy Stock"],
      link: "/pet-hospital"
    },
    {
      title: "Reports",
      desc: "Milk yield, animal performance, sales margin, inventory valuation, pending payments, tax records, and location-wise performance.",
      icon: LineChart,
      details: ["Milk Yield", "Sales Margin", "Tax Records", "Pending Payments"],
      link: "/pricing"
    }
  ];

  return (
    <div className="pt-20 pb-0">
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
                "item": "https://animalcare360.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Features",
                "item": "https://animalcare360.com/features"
              }
            ]
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
      </div>
      <CTA />
    </div>
  );
}
