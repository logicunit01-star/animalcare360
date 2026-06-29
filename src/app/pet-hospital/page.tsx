'use client';
import React from "react";
import { HeartPulse, Syringe, Calendar, ClipboardList, Database, CheckCircle2, FlaskConical, Stethoscope } from "lucide-react";
import CTA from "@/components/CTA";

export default function PetHospital() {
  return (
    <div className="pt-0">
      {/* Pet Hospital Breadcrumb Schema */}
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
                "name": "Pet Hospital ERP",
                "item": "https://animalcare360.com/pet-hospital"
              }
            ]
          })
        }}
      />

      {/* Pet Hospital Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Pet Hospital & Veterinary Clinic Software (AnimalCare360)",
            "image": "https://animalcare360.com/user-icon.png",
            "description": "Veterinary clinical management ERP. Digitally manage patient Electronic Medical Records (EMR), drag-and-drop appointment calendars, surgery logs, laboratory results, pharmacy stock control with expiry alerts, and medical billing with WhatsApp reminders in Pakistan.",
            "brand": {
              "@type": "Brand",
              "name": "AnimalCare360"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "PKR",
              "price": "2999",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "2999",
                "priceCurrency": "PKR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-[#FEF2F2] py-24 text-brand-navy relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-red-600 font-bold text-xs uppercase tracking-widest">Clinical Management ERP</p>
            </div>
            <h1 className="text-5xl font-bold mb-8 leading-tight tracking-tight">
              Pet Hospital and Veterinary Clinic Software for Pakistan
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              AnimalCare360 helps veterinary clinics and pet hospitals manage patient care and business operations together. Keep patient histories, appointments, prescriptions, surgery notes, pharmacy stock, billing, and reminders in one system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923391119259" className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-red-500/20">
                Schedule Practice Consult
              </a>
              <a href="https://app.animalcare360.com/apps" className="bg-white text-brand-navy border border-brand-border px-10 py-5 rounded-2xl font-bold transition-all hover:bg-gray-50">
                Free Trial
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-40 blur-3xl -z-0"></div>
      </section>

      {/* Hospital Modules */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { title: "Patient EMR", icon: ClipboardList, desc: "Store pet profiles, owner details, visit history, diagnosis, treatment plans, vaccinations, and follow-ups." },
              { title: "Appointments", icon: Calendar, desc: "Manage doctors, rooms, follow-ups, and reminders so fewer patients are missed." },
              { title: "Surgery and Lab Records", icon: Stethoscope, desc: "Record procedures, consent, notes, lab results, attachments, and post-treatment instructions." },
              { title: "Pharmacy and Billing", icon: Syringe, desc: "Track medicines, expiry dates, prescriptions, stock levels, sales, and FBR-ready invoices where applicable." },
            ].map((mod, i) => (
              <div key={i} className="p-10 bg-brand-background border border-brand-border rounded-[32px] text-center hover:border-red-500 transition-all shadow-sm">
                <mod.icon className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h4 className="font-bold text-brand-navy text-lg mb-4">{mod.title}</h4>
                <p className="text-brand-muted text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-8 tracking-tight leading-tight">Holistic Patient Journey</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-10">
                From the moment a patient checks in to their multi-year wellness tracking, AnimalCare360 ensures no detail is lost. Perfect for clinics managing high patient volumes.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  "Automated Appointment Reminders",
                  "Digital Consent Forms",
                  "Treatment Plan Mapping",
                  "Billing and Insurance Integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-brand-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-red-500" /> {item}
                  </div>
                ))}
              </div>
              <div className="p-10 bg-[#FFF5F5] border border-red-100 rounded-[40px] shadow-sm">
                <p className="text-lg italic text-brand-navy mb-6 leading-relaxed">&quot;AnimalCare360 has reduced our administrative overhead by 40%. We spend more time with patients and less time on paperwork.&quot;</p>
                <p className="text-xs font-bold uppercase text-red-600 tracking-widest">— Senior Vet, Lahore Pet Clinic</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-brand-border p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all">
                <Calendar className="w-14 h-14 text-blue-500 mb-8" />
                <h3 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Scheduling Excellence</h3>
                <p className="text-brand-muted leading-relaxed text-lg">
                  Manage multi-room clinics and multiple doctors with a dynamic drag-and-drop calendar. Reduce no-shows with WhatsApp integrated reminders.
                </p>
              </div>
              <div className="bg-white border border-brand-border p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all">
                <Database className="w-14 h-14 text-green-500 mb-8" />
                <h3 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Inventory & Dispensary</h3>
                <p className="text-brand-muted leading-relaxed text-lg">
                  Track every vaccine vial and tablet. Automated alerts for pharmacy stock levels and expiry dates. FBR-compliant invoicing for retail pharmacies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Modernize Your Practice?"
        subtitle="Join the digital veterinary revolution in Pakistan. Standardize care, improve outcomes, and grow your clinic with AnimalCare360."
      />
    </div>
  );
}
