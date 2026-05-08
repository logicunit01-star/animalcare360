import React from "react";
import { motion } from "motion/react";
import { HeartPulse, Syringe, Calendar, ClipboardList, Database, CheckCircle2, FlaskConical, Stethoscope } from "lucide-react";

export default function PetHospital() {
  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="bg-[#FEF2F2] py-24 text-brand-navy relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-red-500" />
               </div>
               <p className="text-red-600 font-bold text-xs uppercase tracking-widest">Clinical Management ERP</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Clinical Excellence for <br /> Pet Hospitals.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              Transform your veterinary clinic with digital patient records, automated surgery logs, and integrated pharmacy inventory. Designed for compassionate care and business growth.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-red-500/20">
              Schedule Practice Consult
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-40 blur-3xl -z-0"></div>
      </section>

      {/* Hospital Modules */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { title: "Electronic Health Records", icon: ClipboardList },
              { title: "Surgery & Case Logs", icon: Stethoscope },
              { title: "Lab Results Hub", icon: FlaskConical },
              { title: "Pharmacy Sync", icon: Syringe },
            ].map((mod, i) => (
              <div key={i} className="p-8 bg-brand-background border border-brand-border rounded-3xl text-center">
                <mod.icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h4 className="font-bold text-brand-navy">{mod.title}</h4>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Holistic Patient Journey</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                From the moment a patient checks in to their multi-year wellness tracking, AnimalCare360 ensures no detail is lost. Perfect for clinics managing high patient volumes.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Automated Appointment Reminders",
                  "Digital Consent Forms",
                  "Treatment Plan Mapping",
                  "Billing and Insurance Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-red-500" /> {item}
                  </li>
                ))}
              </div>
              <div className="p-8 bg-[#FFF5F5] border border-red-100 rounded-3xl">
                 <p className="text-sm italic text-brand-navy mb-4">"AnimalCare360 has reduced our administrative overhead by 40%. We spend more time with patients and less time on paperwork."</p>
                 <p className="text-xs font-bold uppercase text-red-600">— Senior Vet, Lahore Pet Clinic</p>
              </div>
            </div>
            <div className="space-y-6">
               <div className="bg-white border border-brand-border p-10 rounded-[40px] shadow-sm">
                  <Calendar className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Scheduling Excellence</h3>
                  <p className="text-brand-muted leading-relaxed">
                    Manage multi-room clinics and multiple doctors with a dynamic drag-and-drop calendar. Reduce no-shows with WhatsApp integrated reminders.
                  </p>
               </div>
               <div className="bg-white border border-brand-border p-10 rounded-[40px] shadow-sm">
                  <Database className="w-12 h-12 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Inventory & Dispensary</h3>
                  <p className="text-brand-muted leading-relaxed">
                    Track every vaccine vial and tablet. Automated alerts for pharmacy stock levels and expiry dates. FBR-compliant invoicing for retail pharmacies.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy text-white text-center">
         <div className="section-container">
            <h2 className="text-4xl font-bold mb-8">Ready to Modernize Your Practice?</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">Join the digital veterinary revolution in Pakistan. Standardize care, improve outcomes, and grow your clinic.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-red-500 px-10 py-5 rounded-2xl font-bold">Contact Us</button>
              <button className="bg-white/10 px-10 py-5 rounded-2xl font-bold">See Pricing</button>
            </div>
         </div>
      </section>
    </div>
  );
}
