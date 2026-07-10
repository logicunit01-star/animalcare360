'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Bot, 
  TrendingUp, 
  FileSpreadsheet, 
  BadgeHelp,
  Activity,
  HeartPulse,
  Scale,
  Milk,
  Calculator,
  Warehouse,
  ShoppingBag
} from "lucide-react";
import CTA from "@/components/CTA";

export default function CattleProOverview() {
  const valueProps = [
    {
      title: "Centralized Livestock Records",
      desc: "Maintain profiles for cattle and goats with full parentage, category, breed, status, and status timelines.",
      icon: Database
    },
    {
      title: "Multi-Farm Operations",
      desc: "City-wise and farm-wise operational tracking under a single tenant. Toggle contexts seamlessly.",
      icon: Layers
    },
    {
      title: "Feed, Assets & Diet Logs",
      desc: "Design detailed diet plans, track fix assets maintenance, and automate feed stock deductions.",
      icon: Warehouse
    },
    {
      title: "Integrated Farm Finance",
      desc: "Connect operational events directly with financial impact. Ledgers, expenses, sales, and entity balances.",
      icon: Scale
    },
    {
      title: "Palai Care Partnering",
      desc: "Track client-owned animals, monthly boarding packages, care invoice billing, and customer balances.",
      icon: Users
    },
    {
      title: "Gemini AI Advisor",
      desc: "An intelligent advisor integrated directly with your operational state for quick management help.",
      icon: Bot
    }
  ];

  const targetUsers = [
    {
      role: "Farm Owners",
      benefit: "Consolidated visibility across multiple locations, farms, and overall operational profitability in real time."
    },
    {
      role: "Farm Managers",
      benefit: "Simple daily logging for health treatments, breeding sessions, weight checks, feed, and milk production."
    },
    {
      role: "Accountants & Finance",
      benefit: "Automated expense ledger creation, revenue entries, buyer/vendor payable tracking, and clean transaction audits."
    },
    {
      role: "Procurement Teams",
      benefit: "Inventory thresholds tracking, low-stock warnings, purchase rates history, and material intake logs."
    },
    {
      role: "Palai Operators",
      benefit: "Client animal assignment, package-based automated monthly billing, and client ledger management."
    },
    {
      role: "Senior Management",
      benefit: "Visual dashboards, exportable CSV reports, operational audits, and KPI trends to base decisions on."
    }
  ];

  const appModules = [
    { name: "Dashboard", desc: "Live operating summaries, milk charts, and animal count indicators." },
    { name: "Livestock Management", desc: "Tag registration, species sorting, gallery uploads, and weight tracks." },
    { name: "Operations & Feed", desc: "Inventory management, medicine cabinet, diet plans, and asset logs." },
    { name: "Procurement & Stores", desc: "Material purchase entries, supplier payables, and stock intake ledger." },
    { name: "Finance & Accounts", desc: "Categorized expenses, sales logs, audit-ready ledgers, and cash flows." },
    { name: "Sales & Revenue", desc: "Animal sales invoice, milk delivery orders, and manure order receipts." },
    { name: "Entity Registry", desc: "Vendor, customer, and Palai client details with current running balances." },
    { name: "Reports Hub", desc: "Deep financial performance sheets, herd census, and feed consumption logs." },
    { name: "Palai Partnering", desc: "Package configuration, customer ledgers, and recurring board invoices." },
    { name: "Gemini Advisor", desc: "State-aware AI support module for predictive diagnostics and alerts." },
    { name: "System Settings", desc: "City registries, farm parameters configuration, and team permissions." }
  ];

  const dataModels = [
    { category: "Structure", items: "Locations, Farms, System Settings, Team Profiles" },
    { category: "Livestock", items: "Livestock Profiles, Medical Logs, Breeding Logs, Weight Logs, Milk Production" },
    { category: "Inventory & Assets", items: "Feed Stock, Medicines, Supplies, Fixed Assets, Maintenance Logs" },
    { category: "Operations", items: "Diet Plans, Feed Consumption Logs, Processed Feed Ledgers, Treatment Protocols, Treatment Logs" },
    { category: "Finance", items: "Expenses, Sales, Entity Ledgers, Bills, Invoices, Vendor/Customer Profiles" }
  ];

  return (
    <div className="pt-0 bg-brand-background">
      {/* JSON-LD Schemas */}
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "CattlePro",
                "item": "https://animalcare360.com/solutions/cattlepro"
              }
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
            "name": "CattlePro Livestock ERP Software",
            "image": "https://animalcare360.com/dashboard-procurement.png",
            "description": "CattlePro is a multi-farm livestock operations and finance ERP platform for managing cattle, goats, feed, procurement, ledger finance, and Palai partnering.",
            "brand": {
              "@type": "Brand",
              "name": "AnimalCare360"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "79",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "79",
                "priceCurrency": "USD",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.25em] bg-white/5 px-4 py-2 rounded-full mb-6 inline-block">
              Flagship Livestock ERP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              CattlePro: Complete Livestock Operations & Finance System
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              A comprehensive multi-farm platform to manage cattle, goats, feed, procurement, finance, Palai partnering, and day-to-day farm activity from one unified web and mobile application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.animalcare360.com/register" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
                Start Free Trial
              </a>
              <Link href="/solutions/cattlepro/features" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all border border-white/20 flex items-center gap-2">
                Detailed Feature Set <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">Product Summary</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                Connect Day-to-Day Animal Activities with Financial Impact
              </h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                CattlePro brings livestock records, farm context, expenses, sales, feed inventory, medical activity, breeding, milk production, and reporting into one system. Your team can make operations decisions from live operational and financial data instead of disconnected notebooks or spreadsheets.
              </p>
              <p className="text-brand-muted text-base leading-relaxed mb-8">
                Designed specifically for livestock operations, CattlePro fully supports multi-currency transactions, Palai client animal care, feed procurement workflows, and farm-wise cost tracking.
              </p>
              <div className="p-6 bg-brand-background rounded-3xl border border-brand-border flex gap-4 items-start">
                <Bot className="w-8 h-8 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-navy text-base mb-1">State-Aware AI Assistance</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Powered by Google Gemini, the built-in AI advisor analyzes your farm records and provides answers to help optimize diets, check animal treatment timelines, and audit costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-brand-background rounded-[40px] border border-brand-border shadow-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-navy/10 z-10 flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-navy/40">OPERATIONS CONTROL</span>
                <h3 className="text-2xl font-bold text-brand-navy mt-1">Multi-Farm Dashboard Overview</h3>
              </div>
              <div className="absolute top-[20%] left-[10%] w-[80%] h-[70%] bg-white rounded-t-2xl shadow-2xl border border-brand-border overflow-hidden">
                {/* Simulated interface mockup */}
                <div className="bg-brand-navy text-white px-4 py-2 text-[10px] flex justify-between items-center">
                  <span className="font-bold">CattlePro ERP v2.0</span>
                  <div className="flex gap-2">
                    <span className="bg-white/10 px-2 py-0.5 rounded">Alpha Farm</span>
                    <span className="bg-brand-primary px-2 py-0.5 rounded font-bold">Active</span>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Herd", val: "482 Heads" },
                    { label: "Daily Milk Yield", val: "1,240 Liters" },
                    { label: "Feed Consumption", val: "3.2 Tons" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-brand-background p-2.5 rounded-xl border border-brand-border">
                      <span className="text-[8px] uppercase tracking-wider text-brand-muted block font-semibold">{card.label}</span>
                      <span className="text-xs font-bold text-brand-navy mt-1 block">{card.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-24 bg-brand-background border-y border-brand-border">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">Value Proposition</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Operational Efficiency Meets Fiscal Discipline
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto mt-4 text-base">
              CattlePro eliminates guess-work by connecting animal-level data with expense tracking and cash accounts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((val, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-10 rounded-[32px] hover:shadow-card transition-all duration-300 group">
                <div className="w-14 h-14 bg-brand-background rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                  <val.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">Users & Roles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Tailored Workspaces for Every Role on the Farm
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetUsers.map((user, idx) => (
              <div key={idx} className="p-8 bg-brand-background rounded-[32px] border border-brand-border flex flex-col justify-between">
                <div>
                  <span className="text-brand-navy font-bold text-lg block mb-4 border-b border-brand-border pb-3">
                    {user.role}
                  </span>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {user.benefit}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase text-brand-primary tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Ready Workspace
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Structure */}
      <section className="py-24 bg-brand-background border-t border-brand-border">
        <div className="section-container">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">System Layout</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Navigation & Feature Workspaces
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto mt-4 text-sm">
              CattlePro is organized into a clean sidebar menu system with dynamic local context filtering for cities, locations, and individual sheds.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {appModules.map((mod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-brand-primary shrink-0 mt-2"></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{mod.name}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-[36px] border border-brand-border shadow-sm max-w-4xl mx-auto">
            <h4 className="font-bold text-brand-navy text-center text-lg mb-6">Global Context Filter System</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              {[
                { title: "Global View", desc: "Summarized visibility across multiple regions, branches, and all farm locations." },
                { title: "City/Region Filters", desc: "Isolate operations inside specific hubs or geographical cities." },
                { title: "Individual Farm Context", desc: "Narrow down database updates to unique farm locations." },
                { title: "Tenant Context aware", desc: "Access clean, segmented data parameters via custom URL structures." }
              ].map((filter, idx) => (
                <div key={idx} className="p-4 bg-brand-background rounded-2xl border border-brand-border">
                  <span className="font-bold text-brand-navy text-xs block mb-1">{filter.title}</span>
                  <p className="text-[10px] text-brand-muted leading-relaxed">{filter.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Model Overview */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">Core Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
                Frontend Domain Data Model
              </h2>
              <p className="text-brand-muted mt-4 text-base">
                CattlePro is built upon a relational data architecture that joins animal status tracking, finance accounts, and operational items.
              </p>
            </div>
            <div className="border border-brand-border rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-brand-background text-brand-navy border-b border-brand-border">
                    <th className="p-5 font-bold uppercase text-[10px] tracking-widest w-1/3">Data Category</th>
                    <th className="p-5 font-bold uppercase text-[10px] tracking-widest w-2/3">Underlying Data Models</th>
                  </tr>
                </thead>
                <tbody>
                  {dataModels.map((row, idx) => (
                    <tr key={idx} className="border-b border-brand-border last:border-0 hover:bg-brand-background/30 transition-colors">
                      <td className="p-5 font-bold text-brand-navy text-sm">{row.category}</td>
                      <td className="p-5 text-brand-muted text-xs leading-relaxed">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Link href="/solutions/cattlepro/features" className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs hover:translate-x-2 transition-transform">
                Read the Complete 16-Feature Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Livestock Enterprise?" 
        subtitle="Access all 16 CattlePro workspaces today. Track your cattle, feed inventory, Palai partnering, and financial ledger from one unified dashboard." 
      />
    </div>
  );
}
