'use client';
import React from "react";
import { Check, Info } from "lucide-react";
import CTA from "@/components/CTA";
import PricingCalculator from "@/components/PricingCalculator";

const pricingData = [
  {
    name: "Retail & Pharmacy",
    price: "PKR 2,999",
    desc: "Essential POS and inventory for pet shops and pharmacies.",
    features: [
      "Point of Sale Terminal",
      "Medicine Expiry Tracking",
      "FBR QR Receipts",
      "Customer Loyalty CRM",
      "Sales Analytics"
    ]
  },
  {
    name: "Feed & Wanda ERP",
    price: "PKR 8,500",
    desc: "Specially designed for Wholesalers and Retailers of Pet Food & Grass.",
    features: [
      "Bulk Sales Orders",
      "Multi-Warehouse Inventory",
      "Vendor Credit Tracking",
      "Purchase Order Flow",
      "Distributor Dashboards"
    ],
    highlight: true
  },
  {
    name: "Farm Management",
    price: "PKR 12,000",
    desc: "Comprehensive software for Cattle, Dairy, and Poultry farms.",
    features: [
      "Cattle Pedigree Tracking",
      "Milk Yield Monitoring",
      "Vaccination Alerts",
      "ADG Performance Tracking",
      "Precision Diet Formulation"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-20 pb-0 bg-brand-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Investment Plans</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-6 tracking-tight">Pricing Plans for Farms, Wanda Shops, Traders, and Pet Clinics</h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the module that fits your business today. Pricing can scale by number of users, animals, locations, inventory volume, and implementation needs.
          </p>
        </div>

        {/* Dynamic Calculators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <PricingCalculator basePrice={8500} label="Wanda ERP Feed" type="wanda" />
          <PricingCalculator basePrice={12000} label="Farm Management" type="farm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {pricingData.map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-[40px] border transition-all ${
                plan.highlight 
                  ? "bg-brand-navy text-white shadow-card relative border-brand-navy scale-105 z-10" 
                  : "bg-white text-brand-navy border-brand-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1 tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                <span className="opacity-60 text-sm font-medium">/month</span>
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
                className={`w-full block text-center py-5 rounded-2xl font-bold transition-all text-sm ${
                  plan.highlight 
                    ? "bg-brand-primary text-white hover:opacity-90 shadow-brand" 
                    : "bg-brand-background text-brand-navy hover:bg-gray-100"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
               <Info className="w-6 h-6 text-blue-500" />
             </div>
             <div>
               <h4 className="text-xl font-bold text-brand-navy mb-2">Data Migration & Implementation</h4>
               <p className="text-brand-muted text-sm leading-relaxed">Need migration from Excel, registers, or another software? Our team can help prepare your starting records and train your staff.</p>
             </div>
           </div>
           <a 
             href="https://wa.me/923391119259" 
             target="_blank"
             rel="noopener noreferrer"
             className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold whitespace-nowrap hover:bg-slate-800 transition-colors"
           >
             Contact Sales Team
           </a>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I start with one module?", a: "Yes. Many businesses start with farm, feed retail, or clinic management first, then add more modules later." },
              { q: "Do you provide onboarding?", a: "Yes. We help configure your business, train staff, and support the first live records." },
              { q: "Is AnimalCare360 suitable for small businesses?", a: "Yes. Small shops and clinics can start with essential POS, inventory, billing, and records, then scale as they grow." },
              { q: "Can you migrate my Excel or register data?", a: "Yes. We can help import clean starting data for animals, stock, customers, vendors, and balances." },
              { q: "Does the system support FBR invoicing?", a: "AnimalCare360 includes FBR-ready invoicing workflows for eligible retail and enterprise use cases. Final setup depends on your business registration and compliance requirements." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-brand-navy text-lg mb-2">{faq.q}</h4>
                <p className="text-brand-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
