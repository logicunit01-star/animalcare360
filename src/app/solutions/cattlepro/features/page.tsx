'use client';
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  HelpCircle, 
  CheckCircle2, 
  ArrowLeft, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  AlertCircle,
  FileSpreadsheet,
  Layers,
  HeartPulse,
  Syringe,
  FileText,
  Warehouse,
  Coins,
  Settings,
  UserCheck,
  Users
} from "lucide-react";
import CTA from "@/components/CTA";

export default function CattleProFeatures() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Modules" },
    { id: "herd", name: "Herd & Health" },
    { id: "operations", name: "Operations & Feed" },
    { id: "finance", name: "Finance & Sales" },
    { id: "system", name: "System & AI" }
  ];

  const features = [
    {
      id: 1,
      category: "system",
      title: "1. Authentication and Tenant Access",
      desc: "Secure, tenant-aware user entry linked to key URLs and session state providers.",
      icon: ShieldCheck,
      capabilities: [
        "Company-specific login initialization from URL parameters.",
        "Local session persistence via custom store handlers.",
        "Secure logout and session purging.",
        "Fallback admin login to bypass keycloak protocols in local sandboxes."
      ],
      dataModels: "Session context, Auth state tokens, URL parameters mapping"
    },
    {
      id: 2,
      category: "system",
      title: "2. Dashboard Hub",
      desc: "Main command center showcasing aggregated and context-aware operational highlights.",
      icon: Layers,
      capabilities: [
        "Real-time Livestock Key Performance Indicators (KPIs).",
        "Active, sick, deceased, and newly registered animal count indicators.",
        "Expense, revenue, and net profit operational summaries.",
        "Milk production monthly trend charts.",
        "Feed cost curves and inventory cost trends.",
        "Drill-down action routes directly linking widgets to source entries.",
        "Server-backed dashboard APIs with graceful mock local fallbacks."
      ],
      dataModels: "KPI Metrics, Monthly Aggregates, Trend vectors"
    },
    {
      id: 3,
      category: "system",
      title: "3. Multi-Farm & Location Management",
      desc: "Organize infinite cities and farm physical configurations under one master database tenant.",
      icon: Settings,
      capabilities: [
        "Create geographical locations or regional operating regions.",
        "Register multiple farms under distinct regions.",
        "Dynamic client context switching via header toggles.",
        "Context-based filtering across dashboard, operations, finances, reports, and registry logs.",
        "Locations and farms synchronizations with remote servers."
      ],
      dataModels: "Locations, Farms (name, region, type, currency, cost center code)"
    },
    {
      id: 4,
      category: "herd",
      title: "4. Livestock Herd Management",
      desc: "Robust profile tracking for cattle herds and goat flocks separately inside a unified data model.",
      icon: Database,
      capabilities: [
        "Distinct registry tracks for cattle herd and goat flock items.",
        "Register, edit, archive, and mark animals deceased with system validation.",
        "Track live status variables: active, sick, sold, deceased.",
        "Advanced searching, sorting, pagination, and multi-field filtration.",
        "Display animals in table registers, image grids, and pedigree timelines.",
        "Define animal ownership parameters: owned, leased, or Palai customer-owned.",
        "Link Palai customers and billing package details to profiles.",
        "Gallery uploads and multi-image attachments for individual animals.",
        "Record quick sales or transfers directly from animal profiles.",
        "Perform bulk treatments or vaccines on groups of tagged stock.",
        "Bulk move animals between distinct farms or physical pens."
      ],
      dataModels: "Livestock (Tag ID, breed, category, dob, purchase cost, status, dam/sire, weight history, milk yield)"
    },
    {
      id: 5,
      category: "herd",
      title: "5. Health and Medical Records",
      desc: "Keep records of clinical checkups, vet visits, injuries, heat periods, and vaccinations.",
      icon: HeartPulse,
      capabilities: [
        "Add diagnostic record type parameters: vaccine, treatment, injury check, heat log.",
        "Record medicine name, consulting doctor, date, actual cost, next due date, and images.",
        "Dynamic linkage to medicine cabinets for auto-deducting raw inventory.",
        "Automatic generation of financial expense logs from medical events.",
        "Group vaccination workflows targeting multiple tag IDs simultaneously.",
        "Operational treatment protocol mapping to streamline standardized care."
      ],
      dataModels: "Medical Records, Treatment Logs, Protocol Templates"
    },
    {
      id: 6,
      category: "herd",
      title: "6. Breeding & Birth Cycles",
      desc: "Track animal reproduction lifecycles from insemination to calving and kidding records.",
      icon: Syringe,
      capabilities: [
        "Log insemination or natural mating events.",
        "Track sire identifiers, sire breeds, breeders, straw batch numbers, technician details, and costs.",
        "Manage pregnancy statuses: confirmed, failed, pending check.",
        "Expected birth calculation algorithms based on conception dates.",
        "Register calving outcomes and automatically create linked calf or kid profiles.",
        "Record breeding expenses automatically inside farm accounts."
      ],
      dataModels: "Breeding Records, Pregnancy logs, Birth outcome logs"
    },
    {
      id: 7,
      category: "herd",
      title: "7. Weight & Milk Production Logs",
      desc: "Track livestock growth profiles and dairy yields inside animal profiles.",
      icon: HelpCircle,
      capabilities: [
        "Log animal weights with dates to record average daily gain (ADG).",
        "Record milk yields separated by morning and evening sessions.",
        "Track specific milk parameters like volume (liters) and optional fat percentage.",
        "Render history tables and productivity charts directly in the animal profile."
      ],
      dataModels: "Weight logs, Milk yields"
    },
    {
      id: 8,
      category: "operations",
      title: "8. Operations, Feed & Fixed Assets Workspace",
      desc: "Core workshop for feed stocks, fixed assets, diet plans, and treatment protocols.",
      icon: Warehouse,
      capabilities: [
        "Create, edit, and delete feed items in digital stores.",
        "Classify and inventory feed, medicine, fixed tools, vet supplies, and infrastructure assets.",
        "Record stock details: quantity, unit, weight-per-unit, purchase rate, reorder limits, expiration dates, and vendor.",
        "Auto-lookup for expired or expiring medicine batches.",
        "Low-stock warnings and total inventory valuation analytics.",
        "Register fixed assets with purchase value, current condition, and depreciation variables.",
        "Create asset maintenance tickets and log servicing costs as operational expenses.",
        "Design multi-ingredient diet plans targeting categories (milking, dry, fattening) or specific sheds.",
        "Supports distribution modes: per-head allotment, total batch distribution, or per-100kg bodyweight ratios.",
        "Execute diet runs to deduct feed stock and calculate feed cost per head."
      ],
      dataModels: "Feed Inventory, Fixed Assets, Diet Plans, Diet logs, Assets Maintenance"
    },
    {
      id: 9,
      category: "operations",
      title: "9. Procurement and Store Ledger",
      desc: "Manage feed imports, supplier procurement orders, and store allocations.",
      icon: FileText,
      capabilities: [
        "Dedicated procurement dashboards showing material intakes and costs.",
        "Create supply entry records for raw materials (Grass, Wanda, Silage, TMR).",
        "Track vendor purchase rates, weight logs, total cost, and invoice status (Paid/Unpaid).",
        "Auto-update store counts when procurement supplies are received.",
        "Supplier payables ledger integration to track balances due."
      ],
      dataModels: "Procurement records, Material logs, Supplier bills"
    },
    {
      id: 10,
      category: "finance",
      title: "10. Sales and Revenue Module",
      desc: "Manage invoice flows for animal deals, milk sales, manure collection orders, and generic revenue.",
      icon: Coins,
      capabilities: [
        "Sales dashboards detailing total revenues, pending collections, and profit margins.",
        "Record single or multi-animal deals with buyers.",
        "Record buyer contact details, amount, payment method (cash, online transfer), and payment status.",
        "Auto-transition sold animals into archived status while maintaining historical records.",
        "Generate print-ready invoices via backend services.",
        "Record non-animal revenue item types: Milk, Manure, and general scrap sales."
      ],
      dataModels: "Sales Invoices, Sales transactions, Buyer profiles"
    },
    {
      id: 11,
      category: "finance",
      title: "11. Finance Ledger and Accounts",
      desc: "The double-entry audit system to record every expense, sale transaction, and ledger balance.",
      icon: FileSpreadsheet,
      capabilities: [
        "Register categorized expenses: Feed, Medicine, Breeding, Staff Salaries, Maintenance, Utilities.",
        "Manage invoice statuses (Unpaid, Paid, Partially Paid) and edit payment logs.",
        "Aggregated finance KPIs (Revenue, Expense, Net margins) filtered by date and farm context.",
        "Double-entry ledgers detailing transaction histories by entity reference.",
        "Vendor payable logs summarizing outstandings."
      ],
      dataModels: "Expense logs, Sales records, Double-entry ledgers"
    },
    {
      id: 12,
      category: "finance",
      title: "12. Entity Registry",
      desc: "Complete address book for vendors, buyers, and Palai customers, tracking running balances.",
      icon: UserCheck,
      capabilities: [
        "Separate profiles for Vendors, Customers, and Palai clients.",
        "View running accounts detailing all historical invoices, payments, and open balances.",
        "Record general payments against entity profiles to settle outstanding balances.",
        "Filter registry directories by active farm location."
      ],
      dataModels: "Entities (Vendor, Buyer, Palai client profiles, Opening/Running balances)"
    },
    {
      id: 13,
      category: "finance",
      title: "13. Palai Boarding Partnering",
      desc: "Specialized system for boarding client-owned livestock and package billing.",
      icon: Users,
      capabilities: [
        "Palai overview metrics: client counts, package revenues, total boarded stock.",
        "Customer animal allocations linking specific tags to owners.",
        "Define client boarding packages: monthly rates, feed plans, custom instructions.",
        "Automated monthly boarding invoice generators.",
        "Palai customer ledger integrations to record payments against boarded animals."
      ],
      dataModels: "Palai packages, Boarded animal logs, Monthly invoices"
    },
    {
      id: 14,
      category: "system",
      title: "14. Reports & Performance Analytics",
      desc: "Generate spreadsheets and summaries for operational audits.",
      icon: Coins,
      capabilities: [
        "Financial reporting: Revenue vs Expenses curves, Profit & Loss summaries.",
        "Herd demographic analytics: Active head distribution, breed ratios, calf survival tracking.",
        "Inventory flow logs showing usage rates and valuation projections.",
        "Detailed feed consumption spreadsheets comparing budgeted diet plans with actual usage.",
        "Individual animal profitability indicators (purchase price + feed/med costs vs sale value).",
        "Export reports directly to CSV spreadsheets for external accounting."
      ],
      dataModels: "Report exports, CSV formats, Trend metrics"
    },
    {
      id: 15,
      category: "system",
      title: "15. Gemini AI Advisor Integration",
      desc: "Built-in intelligence engine utilizing state parameters to deliver diagnostic recommendations.",
      icon: Bot,
      capabilities: [
        "Reads active farm data arrays (livestock, health logs, diet plans).",
        "Accepts text questions regarding operations, medical advice, and financial reports.",
        "Provides answers based on real-time app parameters."
      ],
      dataModels: "AI prompts logs, App state context snapshots"
    },
    {
      id: 16,
      category: "system",
      title: "16. System settings Hub",
      desc: "Admin command deck to set up metadata contexts and sync background caches.",
      icon: Settings,
      capabilities: [
        "Add, edit, or remove operating cities and regions.",
        "Add new farm locations and link them to cities.",
        "Force background databases to sync with remote APIs.",
        "View mock lists of team members and access rules.",
        "Monitor system performance metrics and database statuses."
      ],
      dataModels: "Cities, System variables, Sync state metadata"
    }
  ];

  const filteredFeatures = useMemo(() => {
    return features.filter(feature => {
      const matchesSearch = 
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.capabilities.some(cap => cap.toLowerCase().includes(searchQuery.toLowerCase())) ||
        feature.dataModels.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || feature.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-0 bg-brand-background">
      {/* Breadcrumbs Schema */}
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
                "name": "Solutions",
                "item": "https://www.animalcare360.com/solutions"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "CattlePro",
                "item": "https://www.animalcare360.com/solutions/cattlepro"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Features",
                "item": "https://www.animalcare360.com/solutions/cattlepro/features"
              }
            ]
          })
        }}
      />

      <div className="section-container">
        {/* Header Navigation */}
        <div className="mb-12">
          <Link href="/solutions/cattlepro" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-navy font-bold text-xs uppercase tracking-widest transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Product Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            CattlePro Feature Catalog
          </h1>
          <p className="text-brand-muted text-lg max-w-3xl">
            Review the detailed capability lists across all 16 operating modules. Search for key workflows or filter modules by organizational category.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-6 rounded-3xl border border-brand-border shadow-sm mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? "bg-brand-primary text-white shadow-brand" 
                    : "bg-brand-background text-brand-muted hover:text-brand-navy border border-brand-border"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
            <input
              type="text"
              placeholder="Search features or data models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-background border border-brand-border py-3 pl-12 pr-4 rounded-xl text-brand-navy text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            />
          </div>
        </div>

        {/* Grid layout for features */}
        <div className="grid grid-cols-1 gap-12 mb-20">
          {filteredFeatures.length > 0 ? (
            filteredFeatures.map(feat => (
              <div 
                key={feat.id}
                id={`feature-${feat.id}`}
                className="bg-white border border-brand-border rounded-[40px] p-8 md:p-12 shadow-sm hover:shadow-card transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-background rounded-2xl flex items-center justify-center shrink-0 border border-brand-border">
                    <feat.icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-brand-navy tracking-tight mb-3">
                      {feat.title}
                    </h3>
                    <p className="text-brand-muted text-base mb-8 max-w-3xl leading-relaxed">
                      {feat.desc}
                    </p>

                    <h4 className="text-xs uppercase font-bold text-brand-navy tracking-widest border-b border-brand-border pb-3 mb-4">
                      Current Capabilities & Workflows
                    </h4>
                    <ul className="space-y-4 mb-8">
                      {feat.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-brand-navy font-medium leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-brand-background p-4 rounded-2xl border border-brand-border inline-flex items-center gap-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Data context:</span>
                      <span className="text-xs font-semibold text-brand-navy">{feat.dataModels}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white border border-brand-border rounded-[40px]">
              <AlertCircle className="w-12 h-12 text-brand-muted mx-auto mb-4" />
              <h3 className="font-bold text-brand-navy text-xl">No features found</h3>
              <p className="text-brand-muted mt-2 text-sm">Try resetting your search query or choosing another module category.</p>
            </div>
          )}
        </div>

        {/* Dataset & Demo Section */}
        <section className="bg-white border border-brand-border rounded-[48px] p-10 md:p-16 mb-16 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">Demo Datasets</span>
            <h2 className="text-3xl font-bold text-brand-navy tracking-tight mb-6">
              Evaluation & Sandbox Mock Data
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-8">
              CattlePro is pre-loaded with structured testing profiles so enterprise evaluation teams can test reports and dashboard filters without manual data entry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {[
                { title: "Locations & Farm Contexts", desc: "Pre-configured regions and physical farm sites (Farm A, Farm B, Farm C) to validate context-aware analytics." },
                { title: "Livestock Register", desc: "Cattle and goat profiles across categories: milking dairy heads, breeding stock, beef fattening lots, calves, and Palai clients." },
                { title: "Financial Transactions", desc: "Mock records covering feed purchases, vet treatment expenses, milk sales batches, manure invoices, and supplier ledgers." }
              ].map((data, idx) => (
                <div key={idx} className="p-6 bg-brand-background rounded-3xl border border-brand-border">
                  <h4 className="font-bold text-brand-navy text-sm mb-2">{data.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{data.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] p-6 rounded-3xl flex gap-4 items-start text-[#1E40AF]">
              <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-[#3B82F6]" />
              <div>
                <h4 className="font-bold text-sm mb-1">Production Readiness Note</h4>
                <p className="text-xs leading-relaxed">
                  The CattlePro software client supports sync modes with live servers. In network drop conditions, local dashboards gracefully utilize locally cached models or localStorage state fallbacks. Incomplete CRUD states or custom mock triggers should be fully reviewed against your server-side API specifications prior to final production deployments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTA />
    </div>
  );
}
