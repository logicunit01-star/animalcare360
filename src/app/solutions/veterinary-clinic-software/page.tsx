'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartPulse, Calendar, CheckCircle2, FileText, ArrowRight, Activity, Shield } from "lucide-react";
import CTA from "@/components/CTA";

export default function VeterinaryClinicSoftware() {
  const items = [
    { title: "Patient EMR", desc: "Detailed records for pets and farm animals: breed, owner logs, diagnostics, vaccines, and treatment timelines." },
    { title: "SOAP Clinic Notes", desc: "Log veterinary diagnostics (Subjective, Objective, Assessment, Plan) with digital signatures." },
    { title: "Appointment Hub", desc: "Schedule clinic visits, register check-in statuses, and automate WhatsApp follow-up reminders." },
    { title: "Pharmacy & Billing", desc: "Auto-deduct medical inventories from pharmacy stock and generate invoices with FBR receipts." }
  ];

  return (
    <div className="pt-20 bg-brand-background">
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
              { "@type": "ListItem", "position": 3, "name": "Veterinary Software", "item": "https://animalcare360.com/solutions/veterinary-clinic-software" }
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
            "name": "Veterinary Clinic ERP (AnimalCare360)",
            "operatingSystem": "All (Web & Android)",
            "applicationCategory": "BusinessApplication",
            "description": "Patient EMR, appointments scheduling, veterinary SOAP clinic notes, pharmacy inventory, and billing software for pet clinics and veterinary hospitals in Pakistan."
          })
        }}
      />

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Industry Solution</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Veterinary Clinic & Pet Hospital Software
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Streamline clinical workflows, manage patient records, and coordinate doctor schedules. Replace manual diaries with an all-in-one clinical ERP.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/pet-hospital" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Clinic Solution Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Integrated Patient EMR & Clinical Notes</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Deliver superior patient care with centralized medical records. The veterinary module supports pet profiles, vaccination histories, diagnostic file attachments, and clinical prescriptions. Auto-verify upcoming checkups and notify owners directly.
              </p>
              <ul className="space-y-4">
                {["Digital medical case records", "Vaccines history & follow-up schedules", "Surgery logs & anesthesia records", "Audit-friendly billing POS"].map((item, idx) => (
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

          <div className="bg-brand-navy text-white rounded-[40px] p-12 overflow-hidden relative border border-white/5 shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Enterprise Clinic Operations</h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Manage multiple vet branches, staff access levels, audit logs, and pharmacy stocks under a single master dashboard.
                </p>
              </div>
              <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="bg-brand-primary hover:bg-opacity-90 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-primary/20 flex items-center gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
