'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Beef, HeartPulse, LineChart, Users, ShoppingCart, Activity, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function Solutions() {
  const solutions = [
    {
      title: "Wanda and Feed Retail ERP",
      desc: "For shops, wholesalers, distributors, and pet food retailers that need POS, inventory, expiry, customer credit, supplier ledgers, and FBR-ready invoices.",
      icon: ShoppingCart,
      color: "border-blue-200",
      link: "/feed-retail"
    },
    {
      title: "Cattle and Dairy Farm ERP",
      desc: "For farms that need accurate records for animals, milk, feed, breeding, treatment, weight gain, and farm profitability.",
      icon: Beef,
      color: "border-orange-200",
      link: "/cattle-management"
    },
    {
      title: "Animal Trading Suite",
      desc: "For traders, dealers, brokers, and livestock investors who need sale-purchase records, commission tracking, buyer/seller ledgers, and profit visibility.",
      icon: Users,
      color: "border-green-200",
      link: "/animal-trading"
    },
    {
      title: "Pet Hospital ERP",
      desc: "For veterinary clinics and pet hospitals that need patient EMR, appointment scheduling, surgery logs, pharmacy inventory, billing, and reminders.",
      icon: HeartPulse,
      color: "border-red-200",
      link: "/pet-hospital"
    },
    {
      title: "FBR and Financial Control",
      desc: "For businesses that need clean invoices, audit logs, profit/loss reports, receivables, payables, and tax-friendly digital records.",
      icon: LineChart,
      color: "border-slate-200",
      link: "/pricing"
    }
  ];

  return (
    <div className="pt-0 pb-0">
      {/* Solutions Breadcrumb Schema */}
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
                "name": "Solutions",
                "item": "https://animalcare360.com/solutions"
              }
            ]
          })
        }}
      />
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Targeted Industry Tech</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight leading-[1.1]">Software Modules for Every Animal Business in Pakistan</h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-xl leading-relaxed">
            AnimalCare360 is modular, so you can start with the system your business needs today and expand as your operations grow. Each module is designed for a specific animal industry workflow, not a generic ERP template.
          </p>
        </div>

        <div className="space-y-16 mb-32">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 md:p-16 rounded-[48px] border-l-[12px] bg-white shadow-sm border-brand-border ${sol.color} relative overflow-hidden group hover:shadow-2xl hover:border-brand-primary transition-all`}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="w-16 h-16 bg-brand-background rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-brand-primary transition-colors">
                    <sol.icon className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">{sol.title}</h2>
                  <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-lg">{sol.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 mb-10">
                    {(sol.title === "Wanda and Feed Retail ERP" ? ["Retail POS Terminal", "Fodder Supply Logs", "Wholesale Credit Limits", "Customer CRM Analytics"] :
                      sol.title === "Cattle and Dairy Farm ERP" ? ["Milk Supply Chain", "ADG Fattening Logs", "Pedigree Mapping", "Poultry/Egg Records"] :
                        sol.title === "Pet Hospital ERP" ? ["Surgery Case Records", "Pharmacy Dispensary", "Appointment Hub", "Clinical Histories"] :
                          sol.title === "Animal Trading Suite" ? ["Sale/Purchase Logs", "Trading Commission", "FBR-Compliant Receipts", "Trader Dashboards"] :
                            ["QR-Coded Invoicing", "Auditable Tax Logs", "Profit/Loss Tracking", "Sales Order Workflows"]).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-[10px] font-bold text-brand-navy uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-sm shadow-green-200"></div> {item}
                              </li>
                            ))}
                  </ul>
                  <Link
                    href={sol.link}
                    className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform"
                  >
                    Explore Detailed Solution <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="bg-brand-background rounded-[32px] h-[400px] flex items-center justify-center border border-brand-border group-hover:bg-white transition-all shadow-inner group-hover:shadow-2xl overflow-hidden relative">
                  <div className="text-center group-hover:scale-105 transition-transform">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-border shadow-md">
                      <Activity className="w-6 h-6 text-brand-primary" />
                    </div>
                    <span className="text-brand-navy font-bold text-[10px] uppercase tracking-[0.2em] leading-none block">Module Live Preview</span>
                    <p className="text-brand-muted text-[9px] mt-2 font-bold uppercase">Digitizing Operations for {sol.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
