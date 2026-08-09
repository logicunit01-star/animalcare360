'use client';
import React from "react";
import Link from "next/link";
import { HeartPulse, CheckCircle2, Syringe, Calendar, FileSpreadsheet, Activity, ClipboardList } from "lucide-react";
import CTA from "@/components/CTA";

export default function HealthTrackingFeature() {
  const items = [
    { title: "Treatment Logs", desc: "Record checkups, symptoms, treatment notes, medicines, vet cost, next due date, and attachments in the animal history." },
    { title: "Bulk Vaccination", desc: "Schedule group vaccine runs by farm, pen, species, category, or tag list and keep a clean record of covered animals." },
    { title: "Breeding Lifecycle", desc: "Log mating, insemination, pregnancy status, expected birth dates, calving, kidding, lambing, and failed cycles." },
    { title: "Growth Tracking", desc: "Track weight records, average daily gain, milk performance, health status, and animal readiness for sale or production." }
  ];

  const workflow = [
    "Create animal profiles with species, tag, breed, category, location, and status.",
    "Record treatment, vaccine, breeding, birth, mortality, and follow-up events.",
    "Connect medicine usage with inventory where stock control is enabled.",
    "Use due dates for vaccination, treatment follow-up, pregnancy checks, and expected birth.",
    "Review health history, medicine cost, and performance reports by animal or group."
  ];

  const reports = [
    "Vaccination due list",
    "Treatment history",
    "Medicine usage report",
    "Breeding calendar",
    "Mortality report",
    "Animal health timeline"
  ];

  const faqs = [
    { q: "Can AnimalCare360 track vaccination schedules?", a: "Yes. You can record vaccine history, next due dates, group vaccination runs, and animal-level vaccination timelines for cattle, goats, sheep, and mixed livestock farms." },
    { q: "Can treatment records connect to medicine inventory?", a: "Yes. Treatment records can include medicine usage, cost, doctor or staff notes, and inventory movement where medicine stock control is configured." },
    { q: "Does it support breeding and birth records?", a: "Yes. AnimalCare360 supports mating, insemination, pregnancy status, expected birth, calving, kidding, lambing, and linked offspring profiles." },
    { q: "Is this a replacement for veterinary advice?", a: "No. AnimalCare360 organizes farm and clinic records. Medical decisions should be made by qualified veterinary professionals." }
  ];

  return (
    <div className="pt-0 bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.animalcare360.com/features" },
              { "@type": "ListItem", "position": 3, "name": "Health Tracking", "item": "https://www.animalcare360.com/features/health-tracking" }
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
            "description": "Digitally record treatment logs, bulk vaccinations, breeding events, expected birth dates, and health protocols for livestock."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
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
              AnimalCare360 health tracking helps farms and clinics record treatments, vaccines, breeding cycles, due dates, medicine use, mortality, and health history for cattle, goats, sheep, dairy animals, and pets. It works as animal health tracking software for farms that need searchable records and clear follow-up lists.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/solutions/cattlepro/features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Detailed Feature Spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-20">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is animal health tracking software?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              Animal health tracking software stores each animal's treatment history, vaccination schedule, medicine usage, breeding activity, birth events, follow-ups, and health notes. AnimalCare360 connects those records with inventory and finance so farms can review both animal care and operating cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Standardized Health And Breeding Records</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Paper health cards are hard to search during urgent treatment, sale decisions, pregnancy checks, or audits. AnimalCare360 keeps health and breeding events connected to the correct animal profile so managers can review history in one place.
              </p>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Farms can use the same livestock health tracking software workflow for cattle, goats, sheep, and dairy animals, while veterinary clinics can use the record structure for patient histories, vaccines, follow-ups, and pharmacy-linked activity.
              </p>
              <ul className="space-y-4">
                {["Centralized animal medical cards", "Next vaccine and follow-up due dates", "Breeding, pregnancy, and birth history", "Medicine usage and cost visibility"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-navy font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((card) => (
                <div key={card.title} className="p-6 bg-brand-background border border-brand-border rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <HeartPulse className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Vaccination Control", icon: Syringe, desc: "Record vaccine name, date, group, next due date, and notes so teams know which animals are covered and which are pending." },
              { title: "Breeding Calendar", icon: Calendar, desc: "Track mating, insemination, pregnancy checks, expected calving, kidding, lambing, and birth outcomes in the animal timeline." },
              { title: "Performance Context", icon: Activity, desc: "Connect health events with weight, milk, feed, and sale decisions so managers can see how care affects production and profitability." }
            ].map((card) => (
              <div key={card.title} className="bg-brand-background border border-brand-border rounded-[32px] p-8">
                <card.icon className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">{card.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <section className="bg-white border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Health Tracking Workflow</h2>
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                    <p className="text-sm text-brand-muted leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-brand-navy text-white rounded-[32px] p-8">
              <FileSpreadsheet className="w-10 h-10 text-brand-primary mb-6" />
              <h2 className="text-2xl font-bold mb-6">Health Reports And Due Lists</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reports.map((report) => (
                  <div key={report} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm font-semibold">
                    {report}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-24">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Health Record Fields Teams Can Track</h2>
            <p className="text-brand-muted leading-relaxed mb-6 max-w-4xl">
              A reliable health record should make it easy to understand what happened, who handled it, what medicine was used, what it cost, and what needs follow-up. AnimalCare360 keeps this context connected to each animal profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "Animal tag, species, farm, pen, health status, event type, symptoms, and notes",
                "Medicine, vaccine, dose, batch, doctor or staff member, cost, photos, and attachments",
                "Treatment date, next due date, breeding status, expected birth date, outcome, and mortality reason"
              ].map((field) => (
                <div key={field} className="bg-white border border-brand-border rounded-2xl p-5 text-sm text-brand-muted leading-relaxed">
                  {field}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Health Tracking FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-background border border-brand-border rounded-2xl p-6">
                  <ClipboardList className="w-6 h-6 text-brand-primary mb-4" />
                  <h3 className="font-bold text-brand-navy mb-3">{faq.q}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <CTA
        title="Keep Every Health Record Searchable"
        subtitle="Use AnimalCare360 to track treatments, vaccinations, breeding, due dates, and medicine usage from one livestock and clinic platform."
      />
    </div>
  );
}
