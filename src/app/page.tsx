'use client';
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, ArrowRight, Activity, Users, ShoppingCart, Beef, HeartPulse, Warehouse, Sparkles, Smartphone } from "lucide-react";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div>
      {/* Homepage Structured Data - SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": "https://animalcare360.com/#software",
            "name": "AnimalCare360",
            "operatingSystem": "All (Web & Mobile/Android)",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "PKR",
              "price": "2999",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "2999",
                "priceCurrency": "PKR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "124"
            }
          })
        }}
      />

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-16 pb-24 overflow-hidden bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <p className="text-brand-primary font-bold mb-4 text-sm tracking-widest uppercase">
              Built for Pakistan's Animal Industry
            </p>
            <h1 className="text-[44px] md:text-[44px] font-bold text-brand-navy leading-[1.1] mb-8">
              Livestock, Feed Retail, Animal Trading, and Pet Hospital Software for Pakistan
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed max-w-lg">
              AnimalCare360 helps animal businesses replace scattered registers, spreadsheets, and manual follow-ups with one cloud ERP. Manage animals, stock, sales, FBR invoices, health records, milk production, partner ROI, and clinic operations from web and Android.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="btn-primary !py-4 !px-8 text-base">
                Book a Demo
              </a>
              <a href="https://app.hulmsolutions.com/Register" className="bg-brand-navy text-white hover:bg-brand-navy/90 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 text-base shadow-lg hover:shadow-xl">
                Start Free Trial
              </a>
              <Link href="/solutions" className="btn-ghost !py-4 !px-6 text-base flex items-center gap-2 group">
                Explore Solutions <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* DASHBOARD PREVIEW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-card border border-brand-border p-2 overflow-hidden relative aspect-[1.6/1]">
              <Image
                src="/dashboard-procurement.png"
                alt="AnimalCare360 Dashboard Preview"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Floating micro-stats for visual interest */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-brand-muted tracking-widest">Milk Yield</p>
                  <p className="text-lg font-bold text-brand-navy">+12.5%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="py-24 bg-brand-background border-y border-brand-border">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cattle and Dairy Farms",
                meta: "Farm ERP",
                desc: "Track every animal from purchase or birth to breeding, treatment, milk, weight gain, sale, and profit.",
                color: "border-[#3B82F6]",
                bg: "bg-[#EFF6FF]",
                link: "/cattle-management"
              },
              {
                title: "Wanda and Feed Retailers",
                meta: "Retail ERP",
                desc: "Run POS, stock, expiry, supplier payments, customer credit, and FBR invoices from one retail system.",
                color: "border-[#F59E0B]",
                bg: "bg-[#FFFBEB]",
                link: "/feed-retail"
              },
              {
                title: "Animal Traders",
                meta: "B2B Trading",
                desc: "Record sale, purchase, commission, transport, payments, and profit for every deal and animal lot.",
                color: "border-[#8B5CF6]",
                bg: "bg-[#F5F3FF]",
                link: "/animal-trading"
              },
              {
                title: "Pet Hospitals and Clinics",
                meta: "Clinical ERP",
                desc: "Manage patient EMR, appointments, surgery notes, pharmacy stock, billing, and reminders.",
                color: "border-[#EF4444]",
                bg: "bg-[#FEF2F2]",
                link: "/pet-hospital"
              }
            ].map((card, i) => (
              <Link key={i} href={card.link}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                  className={`${card.bg} p-8 h-full rounded-[32px] border-l-[6px] ${card.color} shadow-sm flex flex-col gap-3 transition-all`}
                >
                  <div className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">
                    {card.meta}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">{card.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-brand-navy font-bold text-xs uppercase tracking-widest">
                    View Module <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 360 SOLUTIONS HUB (CIRCULAR) */}
      <section className="py-24 bg-brand-navy overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/20 rounded-full scale-150 -translate-y-1/2"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">The Unified Ecosystem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Everything Animal Care. <span className="text-brand-primary">One Hub.</span></h2>

          <div className="relative w-80 h-80 md:w-[600px] md:h-[600px] mx-auto flex items-center justify-center">
            {/* Central 360 Hub */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 15 }}
              className="w-32 h-32 md:w-56 md:h-56 bg-brand-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(34,197,94,0.3)] z-20 border-8 border-brand-navy"
            >
              <span className="text-4xl md:text-7xl font-bold text-white leading-none">360</span>
              <span className="text-[8px] md:text-[11px] font-bold text-white px-4 py-1.5 bg-brand-navy/30 rounded-full mt-3 uppercase tracking-[0.2em]">Unified ERP</span>
            </motion.div>

            {/* Solutions Orbiting */}
            {[
              { title: "Feed Retail", icon: ShoppingCart, link: "/feed-retail", angle: 0 },
              { title: "Trading Hub", icon: Users, link: "/animal-trading", angle: 60 },
              { title: "Cattle Farms", icon: Beef, link: "/cattle-management", angle: 120 },
              { title: "Pet Hospital", icon: HeartPulse, link: "/pet-hospital", angle: 180 },
              { title: "Supply Chain", icon: Warehouse, link: "/feed-retail", angle: 240 },
              { title: "Integrations", icon: Sparkles, link: "/solutions", angle: 300 },
            ].map((sol, i) => {
              const rad = sol.angle * (Math.PI / 180);
              const r = 240; // radius
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${Math.cos(rad) * r}px), calc(-50% + ${Math.sin(rad) * r}px))`
                  }}
                  className="hidden md:flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <Link href={sol.link}>
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-xl">
                      <sol.icon className="w-8 h-8 text-white" />
                    </div>
                  </Link>
                  <span className="text-white font-bold text-xs uppercase tracking-widest text-center">{sol.title}</span>
                </motion.div>
              );
            })}

            {/* Mobile simplified view of orbit */}
            <div className="md:hidden absolute inset-0 border border-white/10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* BUILT FOR PAKISTAN */}
      <section className="py-24 bg-white overflow-hidden border-b border-brand-border">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">Built for Pakistan's Animal Industry</h2>
          <p className="text-brand-muted max-w-3xl mx-auto mb-16 text-lg">
            From dairy farms in Punjab to wanda retailers, livestock traders, and pet hospitals in major cities, AnimalCare360 is designed around the way animal businesses actually work in Pakistan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              "FBR-ready invoices and digital sales records",
              "Farm, shop, clinic, and field workflows in one system",
              "Multi-location stock, staff, and customer management",
              "WhatsApp-friendly onboarding and support",
              "Android app for field teams and owners"
            ].map((bullet, i) => (
              <div key={i} className="flex items-start gap-3 p-6 bg-brand-background rounded-2xl border border-brand-border">
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                <span className="font-medium text-brand-navy">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section id="implementation" className="py-24 bg-brand-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Go Live Without Disrupting Daily Work</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Our team helps set up your business, import starting data, train staff, and configure reports so your team can start using AnimalCare360 with confidence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                "Business workflow review",
                "Data and module setup",
                "Staff training",
                "First live records and invoices",
                "Weekly optimization"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-primary text-brand-primary font-bold flex items-center justify-center text-lg mb-4 z-10 relative">
                    {i + 1}
                  </div>
                  {i !== 4 && <div className="hidden md:block absolute top-6 left-[60%] w-[calc(100%-20px)] h-[2px] bg-brand-primary/20 -z-0"></div>}
                  <p className="font-medium text-brand-navy text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <p className="text-lg font-medium text-brand-navy mb-6">Ready to run your animal business with better records?</p>
            <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="btn-primary !px-10 !py-4">
              Book a demo with our Pakistan team
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
