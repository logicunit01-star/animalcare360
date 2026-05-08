import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Beef, Droplets, MapPin, Gauge, HeartPulse, LineChart, Users, ShoppingCart, Database, Activity, ArrowRight } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Wanda & Feed ERP",
      desc: "Custom-built for animal feed retailers and wholesalers (Wanda/Ration). Manage bulk supply chains, track fodder inventory, and handle high-velocity sales orders with multi-warehouse synchronization.",
      icon: ShoppingCart,
      color: "border-blue-200",
      link: "/feed-retail"
    },
    {
      title: "Livestock Farms & Dairy",
      desc: "Scalable technology for big cattle, chicken, and sheep farms. Monitor milk supply chains, pedigree health, and fattening performance with clinical precision and FBR-compliant reporting.",
      icon: Beef,
      color: "border-orange-200",
      link: "/cattle-management"
    },
    {
      title: "Animal Trading Hub",
      desc: "A specialized suite for Animal Traders. Manage the complete sale-purchase cycle of high-value livestock. Generate FBR QR receipts, track trading commissions, and maintain digital stock logs.",
      icon: Users,
      color: "border-green-200",
      link: "/animal-trading"
    },
    {
      title: "Pet Hospitals & Clinics",
      desc: "Professional clinical management for pet hospitals and pharmacies. Track patient digital records, surgery logs, and pharmacy inventory with an integrated appointment and billing system.",
      icon: HeartPulse,
      color: "border-red-200",
      link: "/pet-hospital"
    },
    {
      title: "FBR-Compliant Financials",
      desc: "Bridge the gap between animal care and tax compliance. Our financials handle QR-coded invoicing, B2B sales workflows, and complete audit logs for all animal-related enterprises.",
      icon: LineChart,
      color: "border-navy-200",
      link: "/pricing"
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Targeted Industry Tech</p>
          <h1 className="text-5xl md:text-6xl font-black text-brand-navy mb-8 tracking-tight leading-none">Unified Tech for <br/>Animal Enterprises.</h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-xl leading-relaxed">
            AnimalCare360 provides specialized ERP modules built to address the unique physiological and economic nuances of retailers, wholesalers, farmers, and clinicians.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((sol, i) => (
            <div key={i} className={`p-10 md:p-16 rounded-[48px] border-l-[12px] bg-white shadow-sm border-brand-border ${sol.color} relative overflow-hidden group hover:shadow-2xl hover:border-brand-primary transition-all`}>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                   <div className="w-16 h-16 bg-brand-background rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-brand-primary transition-colors">
                     <sol.icon className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors" />
                   </div>
                   <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">{sol.title}</h2>
                   <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-lg">{sol.desc}</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 mb-10">
                     {(sol.title === "Wanda & Feed ERP" ? ["Retail POS Terminal", "Fodder Supply Logs", "Wholesale Credit Limits", "Customer CRM Analytics"] : 
                       sol.title === "Livestock Farms & Dairy" ? ["Milk Supply Chain", "ADG Fattening Logs", "Pedigree Mapping", "Poultry/Egg Records"] :
                       sol.title === "Pet Hospitals & Clinics" ? ["Surgery Case Records", "Pharmacy Dispensary", "Appointment Hub", "Clinical Histories"] :
                       sol.title === "Animal Trading Hub" ? ["Sale/Purchase Logs", "Trading Commission", "FBR-Compliant Receipts", "Trader Dashboards"] :
                       ["QR-Coded Invoicing", "Auditable Tax Logs", "Profit/Loss Tracking", "Sales Order Workflows"]).map((item, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-sm font-black text-brand-navy uppercase tracking-widest">
                         <div className="w-2 h-2 rounded-full bg-brand-primary shadow-sm shadow-green-200"></div> {item}
                       </li>
                     ))}
                   </ul>
                    <Link 
                      to={sol.link || "/"} 
                      className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform"
                    >
                      Explore Detailed Solution <ArrowRight className="w-3 h-3" />
                    </Link>
                 </div>
                 <div className="bg-brand-background rounded-[32px] h-[400px] flex items-center justify-center border border-brand-border group-hover:bg-white transition-all shadow-inner group-hover:shadow-2xl">
                    <div className="text-center group-hover:scale-105 transition-transform">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-border shadow-md">
                        <Activity className="w-6 h-6 text-brand-primary" />
                      </div>
                      <span className="text-brand-navy font-black text-[10px] uppercase tracking-[0.2em] leading-none block">Module Live Preview</span>
                      <p className="text-brand-muted text-[9px] mt-2 font-bold uppercase">Digitizing Operations for {sol.title}</p>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PawPrintIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="15" r="2" />
    <circle cx="5" cy="8" r="2" />
    <circle cx="4" cy="15" r="2" />
    <path d="M12 21c-2.5 0-4.5-2-4.5-4.5 0-1.5 1-3 2.5-3.5 0 0 1-.5 2-.5s2 .5 2 .5c1.5.5 2.5 2 2.5 3.5 0 2.5-2 4.5-4.5 4.5z" />
  </svg>
);
