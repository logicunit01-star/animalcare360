'use client';
import React from "react";
import { Check, Info } from "lucide-react";
import CTA from "@/components/CTA";
import PricingCalculator from "@/components/PricingCalculator";

const pricingData = [
  {
    name: "Retail & Pharmacy",
    price: "$19",
    desc: "Essential POS and inventory for pet shops and pharmacies.",
    features: [
      "Point of Sale Terminal",
      "Medicine Expiry Tracking",
      "Tax QR Receipts",
      "Customer Loyalty CRM",
      "Sales Analytics"
    ]
  },
  {
    name: "Feed & Wanda ERP",
    price: "$49",
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
    price: "$79",
    desc: "Comprehensive software for cattle, dairy, goat, sheep, and mixed livestock farms.",
    features: [
      "Cattle, Goat & Sheep Records",
      "Milk Yield Monitoring",
      "Vaccination Alerts",
      "ADG Performance Tracking",
      "Feed & Diet Cost Tracking"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-0 pb-0 bg-brand-background">
      {/* Pricing Breadcrumb Schema */}
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
                "item": "https://www.animalcare360.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": "https://www.animalcare360.com/pricing"
              }
            ]
          })
        }}
      />

      {/* Pricing FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I start with one module?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many businesses start with farm, feed retail, or clinic management first, then add more modules later."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide onboarding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We help configure your business, train staff, and support the first live records."
                }
              },
              {
                "@type": "Question",
                "name": "Is AnimalCare360 suitable for small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Small shops and clinics can start with essential POS, inventory, billing, and records, then scale as they grow."
                }
              },
              {
                "@type": "Question",
                "name": "Can you migrate my Excel or register data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We can help import clean starting data for animals, stock, customers, vendors, and balances."
                }
              },
              {
                "@type": "Question",
                "name": "Does the system support tax-ready invoicing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AnimalCare360 includes tax-ready invoicing workflows for eligible retail and enterprise use cases. Final setup depends on your business registration and local compliance requirements."
                }
              }
            ]
          })
        }}
      />

      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Investment Plans</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-6 tracking-tight">Pricing Plans for Farms, Wanda Shops, Traders, and Pet Clinics</h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the module that fits your business today. Prices are listed in USD per month and can scale by number of users, animals, locations, inventory volume, and implementation needs.
          </p>
        </div>

        <div className="bg-white border border-brand-border rounded-[32px] p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "USD Monthly Plans", desc: "Base prices are monthly subscription starting points. Final pricing depends on selected modules and operating scale." },
              { title: "Global + South Asia Fit", desc: "Plans support global livestock operations plus Pakistan/South Asia needs such as wanda, khata, mandi, and tax-ready invoicing." },
              { title: "Implementation Support", desc: "Data migration, staff training, and workflow setup can be added for farms, shops, traders, and clinics." }
            ].map((item) => (
              <div key={item.title} className="p-5 bg-brand-background rounded-2xl border border-brand-border">
                <h2 className="text-base font-bold text-brand-navy mb-2">{item.title}</h2>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Calculators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <PricingCalculator basePrice={49} label="Wanda ERP Feed" type="wanda" />
          <PricingCalculator basePrice={79} label="Farm Management" type="farm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {pricingData.map((plan, i) => (
            <div
              key={i}
              className={`p-10 rounded-[40px] border transition-all ${plan.highlight
                  ? "bg-brand-navy text-white shadow-card relative border-brand-navy scale-105 z-10"
                  : "bg-white text-brand-navy border-brand-border"
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
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
                href="https://app.animalcare360.com/register"
                className={`w-full block text-center py-5 rounded-2xl font-bold transition-all text-sm ${plan.highlight
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

        <div className="bg-white border border-brand-border rounded-[40px] p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">What Affects Your Final Plan?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[720px]">
              <thead>
                <tr className="border-b border-brand-border bg-brand-background">
                  <th className="p-4 text-xs uppercase tracking-widest text-brand-navy">Factor</th>
                  <th className="p-4 text-xs uppercase tracking-widest text-brand-navy">Examples</th>
                  <th className="p-4 text-xs uppercase tracking-widest text-brand-navy">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {[
                  ["Business type", "Farm, wanda shop, trader, clinic", "Each workflow uses different modules and reports."],
                  ["Operating scale", "Animals, SKUs, invoices, locations", "Larger operations need more records, users, and automation."],
                  ["Modules selected", "Health, inventory, POS, finance, EMR", "You can start with one module and add more later."],
                  ["Data migration", "Excel, registers, stock ledgers", "Clean starting data improves launch speed and reporting quality."],
                  ["Tax-ready billing", "QR invoices, customer credit, supplier ledgers", "Invoice setup depends on the business and region."]
                ].map(([factor, examples, why]) => (
                  <tr key={factor} className="hover:bg-brand-background/40">
                    <td className="p-4 font-bold text-brand-navy text-sm">{factor}</td>
                    <td className="p-4 text-sm text-brand-muted">{examples}</td>
                    <td className="p-4 text-sm text-brand-muted">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              { q: "Does the system support tax-ready invoicing?", a: "AnimalCare360 includes tax-ready invoicing workflows for eligible retail and enterprise use cases. Final setup depends on your business registration and local compliance requirements." }
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
