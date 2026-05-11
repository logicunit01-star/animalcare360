'use client';
import React from "react";
import Image from "next/image";
import { Droplets, HeartPulse, LineChart, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";

export default function CattleManagement() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Farm Operations ERP</p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Cattle Management <br /> Software for Pakistan.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              The only platform designed for the unique physiological and economic needs of Pakistani livestock. From Fattening lots to high-yield Dairy farms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.hulmsolutions.com/Register" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
                Start Free Trial
              </a>
              <a href="https://wa.me/923391119259" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all border border-white/20">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Dashboard Image */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Full Lifecycle Traceability</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                Manage your herd with absolute precision. Our software allows you to classify every animal by category (A, B, C), breed, and pedigree. 
                Whether you are managing a 500-head fattening lot or a boutique dairy enterprise, AnimalCare360 provides the data granularity you need.
              </p>
              <ul className="space-y-4">
                {[
                  "Birth and acquisition logs",
                  "Pedigree and breed classification",
                  "Weight gain (ADG) tracking",
                  "Market readiness forecasting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-brand-border shadow-2xl">
              <Image 
                src="/dashboard-palai.png" 
                alt="Palai and Herd Management Dashboard" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Dairy Production",
                icon: Droplets,
                desc: "Monitor somatic cell count (SCC), milk fat components, and daily yield variance. Automated drying-off schedules."
              },
              {
                title: "Health & Clinical",
                icon: HeartPulse,
                desc: "Full clinical EMR for every cow. Never miss a vaccination dose. Automated withdrawal period alerts."
              },
              {
                title: "Fattening Logs",
                icon: LineChart,
                desc: "Track Feed Conversion Ratio (FCR) and Average Daily Gain (ADG). Optimize entry and exit weights."
              }
            ].map((card, i) => (
              <div key={i} className="p-10 bg-white border border-brand-border rounded-[32px] hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-background rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                  <card.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{card.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-background rounded-[48px] p-12 md:p-20 overflow-hidden relative border border-brand-border shadow-sm">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-brand-navy mb-16">Enterprise Features for Modern Farms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                {[
                  {
                    title: "Inventory Syncing",
                    desc: "Real-time tracking of feed and medicine consumption. Automated reordering logs."
                  },
                  {
                    title: "Palai Partnership",
                    desc: "Specially designed for shared profit distribution and partner ROI tracking."
                  },
                  {
                    title: "Staff Management",
                    desc: "Assign tasks to farm hands and track completion through mobile apps."
                  },
                  {
                    title: "Financial Auditing",
                    desc: "Generate FBR-compliant records for all livestock purchases and sales."
                  }
                ].map((f, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-bold text-brand-navy mb-3">{f.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Digitize Your Farm?" 
        subtitle="Join Pakistan's leading livestock enterprises. Start your free trial today and experience precision farm management." 
      />
    </div>
  );
}
