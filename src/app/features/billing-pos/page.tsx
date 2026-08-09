'use client';
import React from "react";
import Link from "next/link";
import { Coins, CheckCircle2, FileText, Users, ShoppingCart, Percent, ReceiptText, BarChart3 } from "lucide-react";
import CTA from "@/components/CTA";

export default function BillingPOSFeature() {
  const items = [
    { title: "Digital Invoicing", desc: "Create tax-ready QR-coded invoice workflows for eligible feed retail shops, pet stores, and veterinary pharmacies." },
    { title: "Retail POS", desc: "Use a fast billing screen for walk-in buyers, item search, quantity, pricing, payment mode, and receipt sharing." },
    { title: "Customer Credit", desc: "Track khata-style customer balances, credit limits, partial payments, overdue accounts, and running ledgers." },
    { title: "Sales Margins", desc: "Connect item cost, sale price, discount, stock movement, and daily closing reports for clearer margin control." }
  ];

  const workflow = [
    "Add products, services, customers, suppliers, prices, opening stock, and tax-ready invoice settings where applicable.",
    "Create POS invoices for cash, online transfer, partial payment, or customer credit sales.",
    "Update stock automatically after sales, returns, purchases, or stock adjustments.",
    "Record payments against customers, suppliers, vendors, or clinic accounts.",
    "Review daily sales, margins, receivables, payables, and closing reports."
  ];

  const reports = [
    "Daily sales report",
    "Customer credit ledger",
    "Supplier payable ledger",
    "Invoice history",
    "Product margin report",
    "Cash and payment summary"
  ];

  const faqs = [
    { q: "Can AnimalCare360 manage wanda shop billing?", a: "Yes. AnimalCare360 supports POS billing for wanda shops, feed retailers, pet food stores, and veterinary pharmacies with inventory, customer credit, supplier records, and invoice history." },
    { q: "Can it manage customer khata?", a: "Yes. Customer credit, partial payments, opening balances, running ledgers, overdue balances, and payment history can be tracked inside AnimalCare360." },
    { q: "Does it support tax-ready invoices?", a: "Yes. AnimalCare360 supports tax-ready invoice workflows for eligible businesses. Final setup depends on business registration and local requirements." },
    { q: "Can POS connect with inventory?", a: "Yes. Sales can update stock counts, purchase records can increase stock, and inventory reports can show stock value, low stock, and expiry-sensitive items." }
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
              { "@type": "ListItem", "position": 3, "name": "Billing & POS", "item": "https://www.animalcare360.com/features/billing-pos" }
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
            "name": "Invoicing & Retail POS ERP (AnimalCare360)",
            "operatingSystem": "All (Web & Android)",
            "applicationCategory": "BusinessApplication",
            "description": "Tax-ready QR-coded receipts, retail POS screens, customer credit ledgers, supplier payable ledgers, and profit calculations for veterinary clinics and feed stores."
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
              Invoicing & Retail POS
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              AnimalCare360 POS helps wanda shops, feed retailers, pet hospitals, and veterinary pharmacies manage billing, tax-ready invoices, customer credit, supplier ledgers, payments, stock movement, and margin reports.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/pricing" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Review Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-20">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is POS and invoicing software for animal businesses?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              POS and invoicing software helps animal businesses create bills, record payments, manage customer credit, update inventory, track supplier balances, and review sales reports. AnimalCare360 adapts this workflow for wanda shops, feed stores, pet hospitals, veterinary pharmacies, and livestock sale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 tracking-tight">Unified Credit And Financial Registers</h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Billing is not just receipt printing. A proper POS should connect every sale with stock, customer balance, supplier cost, payment status, and margin. AnimalCare360 keeps those records together so owners can see what sold, who paid, what remains in stock, and what suppliers are owed.
              </p>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                For Pakistan and South Asia businesses, this includes khata-style customer credit, partial payments, supplier balances, and invoice records. For global businesses, the same workflow supports clean sales, inventory, and accounting visibility.
              </p>
              <ul className="space-y-4">
                {["POS with QR invoice workflows", "Integrated customer credit ledger", "Inventory updates after sales and purchases", "Sales margin and daily closing reports"].map((item, idx) => (
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
                    <Coins className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "For Feed Retail", icon: ShoppingCart, desc: "Create invoices for wanda, feed, medicines, pet food, accessories, and bulk supplies while keeping stock and customer credit updated." },
              { title: "For Clinics", icon: ReceiptText, desc: "Bill consultations, pharmacy items, vaccines, procedures, and follow-ups while connecting medicine stock and patient records." },
              { title: "For Owners", icon: Percent, desc: "Review daily sales, margin, pending collections, supplier payables, cash movement, and product performance from one reporting view." }
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
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Billing Workflow</h2>
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
              <h2 className="text-2xl font-bold mb-6">POS Reports And Ledgers</h2>
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
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Billing And Ledger Fields Teams Can Track</h2>
            <p className="text-brand-muted leading-relaxed mb-6 max-w-4xl">
              Strong billing records help owners answer practical questions quickly: what was sold, who paid, who still owes money, which supplier bill is pending, and which product or service produced margin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "Invoice number, customer, item, quantity, rate, discount, tax-ready settings, and payment mode",
                "Customer opening balance, credit limit, partial payments, overdue amount, and running khata ledger",
                "Supplier bill, purchase cost, stock update, product margin, daily closing cash, and payment history"
              ].map((field) => (
                <div key={field} className="bg-white border border-brand-border rounded-2xl p-5 text-sm text-brand-muted leading-relaxed">
                  {field}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Billing And POS FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-background border border-brand-border rounded-2xl p-6">
                  <FileText className="w-6 h-6 text-brand-primary mb-4" />
                  <h3 className="font-bold text-brand-navy mb-3">{faq.q}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <CTA
        title="Connect Sales, Stock, Credit, and Reports"
        subtitle="Use AnimalCare360 POS to manage billing for feed retail, veterinary pharmacies, pet hospitals, and animal businesses."
      />
    </div>
  );
}
