'use client';
import React from "react";
import Image from "next/image";
import { FileText, CheckCircle2, BadgePercent, Coins, Truck, Users, BarChart3, ClipboardList } from "lucide-react";
import CTA from "@/components/CTA";

export default function AnimalTrading() {
  const features = [
    { title: "Deal Records", icon: FileText, desc: "Record purchase, sale, animal details, buyer, seller, rate, quantity, date, market, and deal status in one place." },
    { title: "Commission Tracking", icon: BadgePercent, desc: "Calculate broker, agent, or partner commission and keep every party's ledger clear." },
    { title: "Payment Control", icon: Coins, desc: "Track advance, partial payment, balance, cash flow, pending collections, and payment proof for each deal." },
    { title: "Transport Cost", icon: Truck, desc: "Log loading, transport, feed during holding, medicine, mandi expenses, and other deal-level costs." }
  ];

  const workflow = [
    "Create buyer, seller, agent, partner, and transporter records.",
    "Record animal or lot purchase details with cost, quantity, market, and source.",
    "Add sale details, buyer payment terms, commission, transport, and extra expenses.",
    "Track advance payments, partial collections, payable balances, and partner shares.",
    "Review profit by animal, lot, buyer, seller, agent, market, or trading period."
  ];

  const reports = [
    "Deal profit report",
    "Buyer receivable ledger",
    "Seller payable ledger",
    "Commission summary",
    "Transport cost report",
    "Partner share statement"
  ];

  const faqs = [
    { q: "Can AnimalCare360 manage animal trading deals?", a: "Yes. AnimalCare360 can track animal purchase, sale, buyer, seller, commission, transport, payments, balances, and profit by deal or animal lot." },
    { q: "Can it support mandi and khata-style workflows?", a: "Yes. AnimalCare360 supports Pakistan and South Asia trading language such as mandi, commission, customer khata, advance payments, and running balances." },
    { q: "Can I track partner share or investor returns?", a: "Yes. Partner contribution, shared cost, deal revenue, and return can be recorded in ledgers and reviewed through profit reports." },
    { q: "Can trading records connect with livestock records?", a: "Yes. Animal trading workflows can connect with animal profiles, sales records, billing, inventory, customer/vendor ledgers, and finance reports." }
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.animalcare360.com/solutions" },
              { "@type": "ListItem", "position": 3, "name": "Animal Trading ERP", "item": "https://www.animalcare360.com/solutions/animal-trading" }
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
            "name": "Animal Trading Software (AnimalCare360)",
            "image": "https://www.animalcare360.com/dashboard-finance.png",
            "description": "Digitally track animal purchases, sales, deal registers, agent commission tracking, transit cost logs, buyer and seller ledgers, and profit reporting per animal or lot.",
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

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Marketplace & B2B Hub</p>
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Animal Trading Software for Sale, Purchase, Commission, and Payments
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              AnimalCare360 helps livestock traders, dealers, brokers, mandi agents, and investors keep clean records for every deal. Track buyer and seller details, animal lots, advance payments, commission, transport costs, balances, partner share, and profit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/apps" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
                Start Trading Today
              </a>
              <a href="https://wa.me/923391119259" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all border border-white/20">
                Expert Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-20">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is animal trading software?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              Animal trading software records livestock purchases, sales, buyer and seller balances, commission, transport, partner share, payments, and profit. AnimalCare360 turns traditional registers and WhatsApp deal notes into searchable ledgers for cattle, goat, sheep, dairy, mandi, and investor-backed trading workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Deal Ledger", val: "Buy/Sell", unit: "Records" },
                  { label: "Commission", val: "Agent", unit: "Share" },
                  { label: "Payments", val: "Advance", unit: "Balance" },
                  { label: "Profit", val: "Lot", unit: "Reports" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-brand-background p-8 rounded-3xl border border-brand-border text-center shadow-sm">
                    <p className="text-3xl font-bold text-brand-navy">{stat.val}</p>
                    <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{stat.label}</p>
                    <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mt-1">{stat.unit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Bring Structure to High-Value Livestock Deals</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                Animal trading depends on trust, accurate balances, and clear profit calculations. AnimalCare360 helps trading teams replace scattered registers with digital deal records that show who sold, who bought, what was paid, what is pending, and what profit remains after costs.
              </p>
              <div className="space-y-5">
                {["Digital sale and purchase records", "Commission and partner-share tracking", "Buyer and seller credit ledgers", "Transport, holding, and medicine cost logs"].map((item) => (
                  <div key={item} className="flex gap-4 p-5 rounded-2xl hover:bg-brand-background transition-colors border border-transparent hover:border-brand-border">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <p className="font-bold text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature) => (
              <div key={feature.title} className="p-10 border border-brand-border rounded-[40px] hover:border-brand-primary transition-all shadow-sm hover:shadow-xl bg-white">
                <feature.icon className="w-10 h-10 text-brand-primary mb-8" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <section className="bg-brand-background border border-brand-border rounded-[32px] p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Animal Trading Workflow</h2>
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
              <BarChart3 className="w-10 h-10 text-brand-primary mb-6" />
              <h2 className="text-2xl font-bold mb-6">Trading Reports And Ledgers</h2>
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
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Deal Fields Traders Can Track</h2>
            <p className="text-brand-muted leading-relaxed mb-6 max-w-4xl">
              A clean trading ledger should show both the animal movement and the money movement. AnimalCare360 keeps deal context, parties, costs, and payments together so traders can review profit without rebuilding the deal from memory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "Animal tag or lot, species, breed, weight, source market, purchase date, and purchase rate",
                "Buyer, seller, agent, commission, advance payment, remaining balance, and payment method",
                "Transport, holding feed, medicine cost, partner share, sale value, profit, and closing status"
              ].map((field) => (
                <div key={field} className="bg-white border border-brand-border rounded-2xl p-5 text-sm text-brand-muted leading-relaxed">
                  {field}
                </div>
              ))}
            </div>
          </section>

          <div className="relative aspect-video rounded-[48px] overflow-hidden border border-brand-border shadow-2xl mb-24">
            <Image src="/dashboard-finance.png" alt="Trading Financial Management" fill className="object-cover" />
          </div>

          <section>
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Animal Trading Software FAQ</h2>
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
        title="Scale Your Trading Business"
        subtitle="Digitize commission, sale logs, payments, partner share, and deal profit for professional livestock trading."
      />
    </div>
  );
}
