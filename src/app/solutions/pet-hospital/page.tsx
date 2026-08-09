'use client';
import React from "react";
import { HeartPulse, Syringe, Calendar, ClipboardList, Database, CheckCircle2, Stethoscope, ReceiptText, FileText, BarChart3 } from "lucide-react";
import CTA from "@/components/CTA";

export default function PetHospital() {
  const modules = [
    { title: "Patient EMR", icon: ClipboardList, desc: "Store pet profiles, owner details, visit history, symptoms, diagnosis notes, treatment plans, vaccinations, and follow-ups." },
    { title: "Appointments", icon: Calendar, desc: "Manage doctors, rooms, checkups, follow-ups, reminders, and daily clinic schedules from one calendar." },
    { title: "Surgery And Lab Records", icon: Stethoscope, desc: "Record procedures, consent notes, lab results, attachments, post-treatment instructions, and clinical observations." },
    { title: "Pharmacy And Billing", icon: Syringe, desc: "Track medicines, expiry dates, prescriptions, stock levels, invoices, payments, and pharmacy sales where configured." }
  ];

  const workflow = [
    "Create patient and owner profiles with species, breed, age, contact details, and visit history.",
    "Schedule appointments, check-ins, consultation notes, procedures, vaccines, and follow-ups.",
    "Record prescriptions, pharmacy stock use, medicine expiry, and invoice details.",
    "Track pending payments, service revenue, pharmacy sales, and daily clinic closing reports.",
    "Use history, reminders, and reports to standardize clinic operations across doctors and staff."
  ];

  const reports = [
    "Patient visit history",
    "Appointment schedule",
    "Vaccine due list",
    "Pharmacy stock report",
    "Invoice and payment report",
    "Doctor or service revenue"
  ];

  const faqs = [
    { q: "Can AnimalCare360 manage veterinary clinic EMR?", a: "Yes. AnimalCare360 can manage pet patient profiles, owner records, visit history, treatment notes, vaccine reminders, prescriptions, pharmacy stock, and billing workflows." },
    { q: "Can clinics track appointments and follow-ups?", a: "Yes. Clinics can manage appointments, doctor schedules, follow-up reminders, and patient check-ins from one workflow." },
    { q: "Can pharmacy stock connect with billing?", a: "Yes. Medicine stock, expiry dates, prescriptions, pharmacy sales, invoices, and payment records can be connected where inventory and billing modules are enabled." },
    { q: "Is AnimalCare360 only for pet hospitals?", a: "No. AnimalCare360 also supports livestock farms, feed retailers, animal traders, and mixed animal businesses, so groups with clinics and livestock operations can use one ecosystem." }
  ];

  return (
    <div className="pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.animalcare360.com/solutions" },
              { "@type": "ListItem", "position": 3, "name": "Pet Hospital & Clinic Software", "item": "https://www.animalcare360.com/solutions/pet-hospital" }
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
            "name": "Pet Hospital & Veterinary Clinic Software (AnimalCare360)",
            "image": "https://www.animalcare360.com/user-icon.png",
            "description": "Veterinary clinical management ERP for patient EMR, appointment calendars, surgery logs, lab results, pharmacy stock control, expiry alerts, billing, and reminders.",
            "brand": { "@type": "Brand", "name": "AnimalCare360" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "19",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "19",
                "priceCurrency": "USD",
                "referenceQuantity": { "@type": "QuantitativeValue", "value": "1", "unitCode": "MON" }
              }
            }
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
              Pet Hospital and Veterinary Clinic Software
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              AnimalCare360 helps veterinary clinics and pet hospitals manage patient EMR, owner records, appointments, SOAP-style notes, prescriptions, vaccine reminders, pharmacy inventory, billing, and follow-up workflows in one system.
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

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-20">
            <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is pet hospital software?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              Pet hospital software helps veterinary clinics manage patient profiles, owner communication, appointments, consultation notes, vaccines, prescriptions, pharmacy stock, invoices, and payments. AnimalCare360 connects clinical records with business operations so clinic teams can reduce manual registers and improve follow-up visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {modules.map((mod) => (
              <div key={mod.title} className="p-10 bg-brand-background border border-brand-border rounded-[32px] text-center hover:border-red-500 transition-all shadow-sm">
                <mod.icon className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h3 className="font-bold text-brand-navy text-lg mb-4">{mod.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-8 tracking-tight leading-tight">Manage the Complete Patient Journey</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                A clinic visit creates many records: patient symptoms, doctor notes, diagnosis, treatment plan, prescription, pharmacy movement, invoice, payment, and follow-up date. AnimalCare360 keeps those records connected so doctors and staff do not need to search separate notebooks, spreadsheets, or chat messages.
              </p>
              <p className="text-brand-muted text-lg leading-relaxed mb-10">
                The same platform can support small clinics, multi-doctor hospitals, veterinary pharmacies, and animal businesses that need clinic workflows alongside livestock, feed retail, or trading operations.
              </p>
              <div className="space-y-4 mb-12">
                {["Appointment and follow-up reminders", "SOAP-style consultation records", "Treatment plans and prescription history", "Pharmacy billing and invoice records"].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-brand-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-red-500" /> {item}
                  </div>
                ))}
              </div>
              <div className="p-10 bg-[#FFF5F5] border border-red-100 rounded-[40px] shadow-sm">
                <p className="text-lg italic text-brand-navy mb-6 leading-relaxed">&quot;A complete clinic workflow should help doctors spend less time searching for records and more time with patients.&quot;</p>
                <p className="text-xs font-bold uppercase text-red-600 tracking-widest">AnimalCare360 Veterinary Workflow Principle</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-brand-border p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all">
                <Calendar className="w-14 h-14 text-blue-500 mb-8" />
                <h3 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Scheduling And Follow-Up Control</h3>
                <p className="text-brand-muted leading-relaxed text-lg">
                  Manage doctors, rooms, checkups, vaccinations, surgeries, repeat visits, and reminders. Clinic teams can see what is scheduled, what is pending, and which patients need follow-up.
                </p>
              </div>
              <div className="bg-white border border-brand-border p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all">
                <Database className="w-14 h-14 text-green-500 mb-8" />
                <h3 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Inventory And Dispensary</h3>
                <p className="text-brand-muted leading-relaxed text-lg">
                  Track medicines, vaccines, pharmacy items, expiry dates, prescriptions, and invoice-linked stock movement so the clinic pharmacy stays connected with patient care and billing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <section className="bg-brand-background border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Clinic Workflow</h2>
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                    <p className="text-sm text-brand-muted leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-brand-navy text-white rounded-[32px] p-8">
              <BarChart3 className="w-10 h-10 text-red-400 mb-6" />
              <h2 className="text-2xl font-bold mb-6">Clinic Reports And Lists</h2>
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
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Veterinary Record Fields Teams Can Track</h2>
            <p className="text-brand-muted leading-relaxed mb-6 max-w-4xl">
              Good veterinary records need enough detail for repeat visits, follow-up care, billing, and pharmacy control. AnimalCare360 keeps medical and business context together while leaving clinical decisions with qualified veterinary professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "Patient name, species, breed, age, owner details, visit reason, symptoms, and doctor notes",
                "Vaccines, prescriptions, dosage, medicine batch, expiry date, procedure notes, and attachments",
                "Appointment date, follow-up date, invoice, payment status, pharmacy stock movement, and visit history"
              ].map((field) => (
                <div key={field} className="bg-white border border-brand-border rounded-2xl p-5 text-sm text-brand-muted leading-relaxed">
                  {field}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Pet Hospital Software FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-background border border-brand-border rounded-2xl p-6">
                  <FileText className="w-6 h-6 text-red-500 mb-4" />
                  <h3 className="font-bold text-brand-navy mb-3">{faq.q}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <CTA
        title="Ready to Modernize Your Practice?"
        subtitle="Standardize patient records, appointments, pharmacy, billing, and follow-ups with AnimalCare360."
      />
    </div>
  );
}
