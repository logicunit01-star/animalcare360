'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Milk, Droplets, CheckCircle2, ArrowRight, LineChart, Sparkles, AlertCircle } from "lucide-react";
import CTA from "@/components/CTA";

export default function DairyFarmSoftware() {
  const items = [
    { title: "Lactation Tracking", desc: "Monitor lactation cycles, milk yield variations, and dry period dates for every animal." },
    { title: "Milking Sessions", desc: "Log yields by morning and evening sessions, and optionally track fat content percentage." },
    { title: "Pedigree Records", desc: "Map dams, sires, and calf history to build complete genetic pedigree trees." },
    { title: "Auto cost-per-liter", desc: "Join daily feed costs with milk volume to monitor exact costs and profit margins." }
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://animalcare360.com/solutions" },
              { "@type": "ListItem", "position": 3, "name": "Dairy Farm Software", "item": "https://animalcare360.com/solutions/dairy-farm-software" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Dairy Farm ERP Software (AnimalCare360)",
            "image": "https://animalcare360.com/dashboard-palai.png",
            "description": "Digitally track daily milk yield, fat logs, dry periods, lactation cycles, and feed ROI for dairy farms in Pakistan.",
            "brand": { "@type": "Brand", "name": "AnimalCare360" }
          })
        }}
      />

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Industry Solution</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Dairy Farm Management Software
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Increase milk yields and optimize feed-to-milk conversion ratios. Isolate top producers, automate breeding checks, and calculate exact costs per liter for dairy operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/cattlepro" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                View CattlePro Spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Precision Dairy Record Keeping</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Spreadsheets and manuals fail to capture the nuances of lactation curves, heat cycles, and dry periods. AnimalCare360 gives your dairy farm a single digital record. Track morning and evening milk outputs, record breeding straw codes, check expected calving dates, and alert staff for vaccinations.
              </p>
              <ul className="space-y-4">
                {["Lactation curves & yield trends", "Fattening ADG performance logs", "Dry period alerts & veterinary safety", "Calf registration links"].map((item, idx) => (
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
                    <Milk className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy text-white rounded-[40px] p-12 overflow-hidden relative border border-white/5 shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Maximize Feed-to-Milk ROI</h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Diet formulations directly control dairy farm profitability. Review the complete CattlePro feed operations cabinet to design target diet plans and automate inventory logs.
                </p>
              </div>
              <Link href="/cattlepro/features" className="bg-brand-primary hover:bg-opacity-90 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-primary/20 flex items-center gap-2">
                Explore Feed Modules <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
