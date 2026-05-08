import React from "react";
import { Link } from "react-router-dom";
import { Beef, Droplets, PawPrint, CloudOff, LineChart, Users, Database, FileText, ShoppingCart, HeartPulse, Sprout, Sparkles, Warehouse, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Cattle Management",
      desc: "Comprehensive tracking for Pakistan's growing livestock sector. Classify your herd by pedigree, category, and breed. Features include 'Never Miss a Dose' health alerts, daily milk yield tracking, and weight gain analysis on one screen.",
      icon: PawPrint,
      details: ["Pedigree Traceability", "Milk Component Monitoring", "Weight Gain Analysis", "Automated Health Alerts"],
      link: "/cattle-management"
    },
    {
      title: "Animal Trading Suite",
      desc: "Designed for B2B Animal Traders. Manage high-value livestock trade from sale-purchase to collection. Features include professional trading commission tracking and FBR-compliant digital receipt generation.",
      icon: Users,
      details: ["Sale/Purchase Logs", "Commission Tracking", "Stock Movement", "B2B Dashboards"],
      link: "/animal-trading"
    },
    {
      title: "Pet Hospital & Clinics",
      desc: "Comprehensive clinical software for pet hospitals. Manage patient EMRs, surgery logs, and pharmacy inventory. Integrated with appointment scheduling and automated billing modules.",
      icon: HeartPulse,
      details: ["Patient EMR", "Surgery Logs", "Pharmacy Sync", "Appointment Hub"],
      link: "/pet-hospital"
    },
    {
      title: "Feed Retail (Wanda/Ration)",
      desc: "A powerful ERP for Wanda, Ration, and grass retailers. Manage bulk supply chains, track fodder inventory with multi-warehouse support, and handle credit limits for your regular vendors.",
      icon: ShoppingCart,
      details: ["Retail POS", "Wholesale Orders", "Credit Tracking", "Bulk Supply Logs"],
      link: "/feed-retail"
    },
    {
      title: "Precision Diet Formulation",
      desc: "Maximize ROI through nutritional science. Formulate custom rations for fattening lots and dairy herds. Track ingredient stocks and analyze feed-to-milk conversion ratios to optimize input costs.",
      icon: Sprout,
      details: ["Scientific Rations", "Input Cost Analysis", "Ingredient Inventory", "Conversion Reporting"],
      link: "/cattle-management"
    },
    {
      title: "Financials & FBR Compliance",
      desc: "Bridge the gap between farm operations and tax compliance. Generate FBR-compliant QR receipts, manage complex profit/loss statements, and maintain digital records for auditing and transparency.",
      icon: LineChart,
      details: ["FBR QR Receipts", "Tax Compliance Logs", "P&L Dashboards", "Auditing Readiness"],
      link: "/pricing"
    },
    {
      title: "Warehouse Management",
      desc: "Multi-location inventory control for feed, raw materials, and machinery. Track stock across different sites, manage inter-warehouse transfers, and get automated reordering alerts based on actual consumption.",
      icon: Warehouse,
      details: ["Multi-Site Support", "Stock Transfers", "Automated Reordering", "Asset Maintenance"],
      link: "/feed-retail"
    },
    {
      title: "Palai Partnership Portal",
      desc: "Unique collaboration features for Pakistan's growing stock. Manage shared stock, calculate ROI distributions, and provide partner login portals for transparent data sharing and profit-sharing management.",
      icon: Users,
      details: ["Partner Portals", "ROI Calculations", "Stock Distribution", "Profit Share Contracts"],
      link: "/cattle-management"
    },
    {
      title: "Gemini AI Advisor",
      desc: "Your data, intelligently analyzed. Gemini AI provides proactive tips on nutrition ratios, breeding windows, and market timing based on your unique herd performance and local market trends.",
      icon: Sparkles,
      details: ["Nutritional Insights", "Breeding Optimization", "Market Timing", "Risk Forecasting"],
      link: "/solutions"
    },
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">The ERP Ecosystem</p>
          <h1 className="text-5xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">Built for Precision.</h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-xl leading-relaxed">
            AnimalCare360 integrates every facet of your business into a single hub. From clinical health to complex financial compliance and procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col p-10 bg-white border border-brand-border rounded-[32px] group hover:border-brand-primary transition-all shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-background rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors mb-8 shadow-inner">
                <feature.icon className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {feature.desc}
              </p>
              
              <Link 
                to={feature.link} 
                className="mb-8 flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-[9px] hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>

              <div className="pt-8 border-t border-brand-border grid grid-cols-2 gap-y-4 gap-x-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.05em] leading-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-sm shadow-green-200"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
