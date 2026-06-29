'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartPulse, CheckCircle2, Syringe, Calendar, FileSpreadsheet, Activity } from "lucide-react";
import CTA from "@/components/CTA";

export default function HealthTrackingFeature() {
  const items = [
    { title: "Treatment Logs", desc: "Record clinical checkups, diagnose sickness, input vet expenses, and attach checkup photos." },
    { title: "Bulk Vaccination", desc: "Schedule group vaccine runs, target specific pens or categories, and record raw batch metrics." },
    { title: "Breeding Lifecycle", desc: "Log insemination dates, straw batch codes, technician details, and track pregnancy status." },
    { title: "ADG & Growth", desc: "Track average daily weight gain (ADG) and monitor animal health indicators over time." }
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
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://animalcare360.com/features" },
              { "@type": "ListItem", "position": 3, "name": "Health Tracking", "item": "https://animalcare360.com/features/health-tracking" }
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
            "name": "Animal Health & Vaccination Tracking (AnimalCare360)",
            "operatingSystem": "All (Web & Android)",
            "applicationCategory": "BusinessApplication",
            "description": "Digitally record diagnostic records, bulk vaccinations, mating logs, expected calving dates, and treatment protocols for livestock."
          })
        }}
      />

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Core Feature</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Animal Health & Medical Record Tracking
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Digitize health cards for cattle, goats, and pets. Track veterinary treatments, automate vaccinations schedules, and log breeding cycles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/cattlepro/features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Detailed Feature Spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Standardized Veterinary Protocols</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Protect your herd from disease outbreaks. Create custom veterinary protocols, allocate medicine doses from stock cabinets, and assign tasks to farm staff. Keep absolute records to trace treatment durations, withdrawal periods, and veterinary expenditures.
              </p>
              <ul className="space-y-4">
                {["Centralized medical treatment cards", "Auto-reminders for next vaccine due dates", "Breeding straw pedigree tracking", "Expected calving calendar alarms"].map((item, idx) => (
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
                    <HeartPulse className="w-5 h-5 text-brand-primary" />
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
