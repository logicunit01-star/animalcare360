import React from "react";
import { motion } from "motion/react";
import { Check, Info } from "lucide-react";

const pricingData = [
  {
    name: "Retail & Pharmacy",
    price: "PKR 2,999",
    desc: "Essential POS and inventory for pet shops and pharmacies.",
    features: [
      "Point of Sale (POS) Terminal",
      "Medicine Expiry Tracking",
      "Clinical Record Basics",
      "FBR-Compliant QR Receipts",
      "Customer Loyalty CRM",
      "Sales Analytics"
    ],
    highlight: false
  },
  {
    name: "Feed & Wanda ERP",
    price: "PKR 2,999",
    desc: "Specially designed for Wholesalers and Retailers of Pet Food & Grass.",
    features: [
      "Bulk Sales Orders",
      "Wholesale Pricing Tiers",
      "Multi-Warehouse Inventory",
      "Vendor Credit Tracking",
      "Purchase Order Flow",
      "Distributor Dashboards"
    ],
    highlight: true
  },
  {
    name: "Farm Management",
    price: "PKR 8,500",
    desc: "Comprehensive software for Cattle, Dairy, and Poultry farms.",
    features: [
      "Cattle Pedigree Tracking",
      "Milk Yield & Component Monitoring",
      "Automated Vaccination Alerts",
      "Fattening ADG Performance",
      "Palai Partnering Portal",
      "Precision Diet Formulation"
    ],
    highlight: false
  }
];

const hospitalPlan = {
  name: "Pet Hospital Enterprise",
  price: "Custom",
  desc: "Full clinical & business suite for Veterinary Hospitals.",
  features: [
    "Advanced Patient EMR",
    "Surgery & Case Logs",
    "Appointment Scheduling",
    "Pharmacy Dispensary ERP",
    "Laboratory Integration",
    "Multi-Branch Support",
    "FBR Compliance for Medical Services",
    "Dedicated Account Manager"
  ],
  highlight: false
};

export default function Pricing() {
  return (
    <div className="pt-20 pb-32 bg-brand-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Investment Plans</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-6">Simple, Transparent Pricing</h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            No hidden fees. Scale your subscription as your farm grows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-6">
          {pricingData.map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-2xl border ${
                plan.highlight 
                  ? "bg-brand-navy text-white shadow-card relative border-brand-navy" 
                  : "bg-white text-brand-navy border-brand-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-1 tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                {plan.price !== "Custom" && <span className="opacity-60 text-sm font-medium">/month</span>}
              </div>
              <p className={`text-sm mb-10 leading-relaxed ${plan.highlight ? "text-slate-300" : "text-brand-muted"}`}>
                {plan.desc}
              </p>
              
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <Check className={`w-4 h-4 text-brand-primary`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://app.hulmsolutions.com/Register"
                className={`w-full block text-center py-4 rounded-xl font-bold transition-all text-sm ${
                  plan.highlight 
                    ? "bg-brand-primary text-white hover:opacity-90 shadow-brand" 
                    : "bg-brand-background text-brand-navy hover:bg-gray-100"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Full Width Hospital Plan */}
        <div className="bg-white border border-brand-border p-10 md:p-16 rounded-[32px] flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Enterprise Grade
            </div>
            <h3 className="text-3xl font-bold text-brand-navy mb-4">{hospitalPlan.name}</h3>
            <p className="text-brand-muted leading-relaxed mb-10 text-lg">
              {hospitalPlan.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {hospitalPlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                  {feature}
                </div>
              ))}
            </div>
            <a 
              href="https://app.hulmsolutions.com/Register"
              className="inline-block bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-gray-200"
            >
              Get Custom Proposal
            </a>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
             <div className="bg-brand-background rounded-3xl p-8 text-center border border-gray-100">
                <p className="text-brand-primary font-black text-2xl mb-1">24/7</p>
                <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Support Response</p>
             </div>
             <div className="bg-brand-background rounded-3xl p-8 text-center border border-gray-100">
                <p className="text-brand-primary font-black text-2xl mb-1">Multi</p>
                <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Location ERP</p>
             </div>
             <div className="bg-brand-background rounded-3xl p-8 text-center border border-gray-100">
                <p className="text-brand-primary font-black text-2xl mb-1">FBR</p>
                <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Compliant Modules</p>
             </div>
             <div className="bg-brand-background rounded-3xl p-8 text-center border border-gray-100">
                <p className="text-brand-primary font-black text-2xl mb-1">Cloud</p>
                <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">99.9% Uptime</p>
             </div>
          </div>
        </div>

        <div className="mt-24 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
             <h4 className="text-xl font-bold text-brand-navy mb-2 flex items-center gap-2">
               <Info className="w-5 h-5 text-brand-primary" /> Need a Custom Quote?
             </h4>
             <p className="text-brand-muted text-sm">For organizations with specific integration or scale requirements.</p>
           </div>
           <button className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap">
             Contact Sales Team
           </button>
        </div>
      </div>
    </div>
  );
}
