'use client';
import React from "react";
import Image from "next/image";
import { Droplets, HeartPulse, LineChart, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function CattleManagement() {
  return (
    <div>
      {/* Cattle Management Breadcrumb Schema */}
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
                "name": "Cattle Management",
                "item": "https://www.animalcare360.com/solutions/cattle-management"
              }
            ]
          })
        }}
      />

      {/* Cattle Management Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cattle & Dairy Farm Management Software (AnimalCare360)",
            "image": "https://www.animalcare360.com/dashboard-palai.png",
            "description": "Digitally track cattle breeding, milk production, vaccination schedules, weight gain (ADG), fattening lots, palai partnership ROI, and feed inventory for dairy farms.",
            "brand": {
              "@type": "Brand",
              "name": "AnimalCare360"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "49",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "49",
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
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Farm Operations ERP</p>
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Cattle and Dairy Farm Management Software
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              AnimalCare360 gives cattle, dairy, and fattening farms a complete digital record for every animal. Track purchase, birth, breed, health, vaccination, breeding, milk, weight, feed cost, sale, and profit from one system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.animalcare360.com/apps" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20">
                Start Free Trial
              </a>
              <a href="https://wa.me/923391119259" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all border border-white/20">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Dashboard Image */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Full Lifecycle Traceability</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                Manage your herd with absolute precision. Our software allows you to classify every animal by category (A, B, C), breed, and pedigree.
                Whether you are managing a 500-head fattening lot or a boutique dairy enterprise, AnimalCare360 provides the data granularity you need.
              </p>
              <ul className="space-y-4">
                {[
                  "Birth and acquisition logs",
                  "Pedigree and breed classification",
                  "Weight gain (ADG) tracking",
                  "Market readiness forecasting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-brand-border shadow-2xl">
              <Image
                src="/dashboard-palai.png"
                alt="Palai and Herd Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Herd Register",
                icon: CheckCircle2,
                desc: "Keep complete profiles for every animal with category, breed, tag, purchase details, health history, and lifecycle status."
              },
              {
                title: "Milk Records",
                icon: Droplets,
                desc: "Track daily milk yield, animal-wise trends, buyer supply, and production changes over time."
              },
              {
                title: "Health & Vaccination",
                icon: HeartPulse,
                desc: "Record treatments, vet visits, medicine usage, vaccination schedules, and withdrawal periods."
              },
              {
                title: "Fattening Performance",
                icon: LineChart,
                desc: "Monitor weight gain, feed cost, ADG, FCR, market readiness, and profit per animal or lot."
              },
              {
                title: "Partner ROI",
                icon: CheckCircle2,
                desc: "Manage palai or partnership arrangements with transparent cost, sale, and return reporting."
              },
              {
                title: "Inventory Syncing",
                icon: CheckCircle2,
                desc: "Real-time tracking of feed and medicine consumption. Automated reordering logs."
              }
            ].map((card, i) => (
              <div key={i} className="p-10 bg-white border border-brand-border rounded-[32px] hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-background rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                  <card.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{card.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-background rounded-[48px] p-12 md:p-20 overflow-hidden relative border border-brand-border shadow-sm">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-brand-navy mb-16">Enterprise Features for Modern Farms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                {[
                  {
                    title: "Inventory Syncing",
                    desc: "Real-time tracking of feed and medicine consumption. Automated reordering logs."
                  },
                  {
                    title: "Palai Partnership",
                    desc: "Specially designed for shared profit distribution and partner ROI tracking."
                  },
                  {
                    title: "Staff Management",
                    desc: "Assign tasks to farm hands and track completion through mobile apps."
                  },
                  {
                    title: "Financial Auditing",
                    desc: "Generate tax-compliant records for all livestock purchases and sales."
                  }
                ].map((f, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-bold text-brand-navy mb-3">{f.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="mt-16">
            <div className="bg-brand-navy text-white rounded-[32px] p-8 md:p-12 max-w-4xl mx-auto shadow-xl border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-primary/5"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Detailed Product Specifications</h3>
                  <p className="text-sm text-slate-300">
                    Read the comprehensive CattlePro product guide outlining all 16 operating modules, data models, and features.
                  </p>
                </div>
                <Link href="/solutions/cattlepro" className="bg-brand-primary hover:bg-opacity-90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-primary/20 shrink-0">
                  View Product Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Digitize Your Farm?"
        subtitle="Join leading livestock enterprises. Start your free trial today and experience precision farm management."
      />
    </div>
  );
}
