'use client';
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, ArrowRight, Activity, Users, ShoppingCart, Beef, HeartPulse, Warehouse, Sparkles } from "lucide-react";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div>
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
              Track. Manage. Grow.
            </p>
            <h1 className="text-[44px] md:text-[56px] font-bold text-brand-navy leading-[1.1] mb-8">
              The Complete Tech Suite<br /> for Pakistan&apos;s Animal Care.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed max-w-lg">
              The unified tech hub for Pakistan&apos;s animal industry. Specialized ERP solutions for Feed Retailers, Animal Traders, Cattle Farms, and Pet Hospitals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://app.hulmsolutions.com/Register" className="btn-primary !py-4 !px-8 text-base">
                Start Free Trial
              </a>
              <Link href="/solutions" className="btn-ghost !py-4 !px-6 text-base flex items-center gap-2 group">
                Explore Modules <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  <p className="text-[10px] font-black uppercase text-brand-muted tracking-widest">Milk Yield</p>
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
                title: "Feed Retail (Wanda)",
                meta: "Pet Food & Ration",
                desc: "POS, Inventory, and multi-warehouse sync.",
                color: "border-[#F59E0B]",
                bg: "bg-[#FFFBEB]",
                link: "/feed-retail"
              },
              {
                title: "Animal Trading",
                meta: "B2B Livestock",
                desc: "Sale-purchase logs and trading commissions.",
                color: "border-[#8B5CF6]",
                bg: "bg-[#F5F3FF]",
                link: "/animal-trading"
              },
              {
                title: "Enterprise Farms",
                meta: "Cattle, Sheep, Poultry",
                desc: "Milk supply chain and pedigree tracking.",
                color: "border-[#3B82F6]",
                bg: "bg-[#EFF6FF]",
                link: "/cattle-management"
              },
              {
                title: "Pet Hospitals",
                meta: "Clinical ERP",
                desc: "Patient EMR, Pharmacy, and Surgery logs.",
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
                  <div className="text-[10px] uppercase font-black text-brand-muted tracking-widest">
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
              <span className="text-4xl md:text-7xl font-black text-white leading-none">360</span>
              <span className="text-[8px] md:text-[11px] font-black text-white px-4 py-1.5 bg-brand-navy/30 rounded-full mt-3 uppercase tracking-[0.2em]">Unified ERP</span>
            </motion.div>

            {/* Solutions Orbiting */}
            {[
              { title: "Feed Retail", icon: ShoppingCart, link: "/feed-retail", angle: 0 },
              { title: "Trading Hub", icon: Users, link: "/animal-trading", angle: 60 },
              { title: "Cattle Farms", icon: Beef, link: "/cattle-management", angle: 120 },
              { title: "Pet Hospital", icon: HeartPulse, link: "/pet-hospital", angle: 180 },
              { title: "Supply Chain", icon: Warehouse, link: "/feed-retail", angle: 240 },
              { title: "Gemini AI", icon: Sparkles, link: "/solutions", angle: 300 },
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

      {/* DETAILED FEATURE BLOCKS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="section-container">
          <div className="space-y-32">
            {[
              {
                title: "Feed & Pet Food Retailers (Wanda/Ration)",
                desc: "Manage your entire retail or wholesale business with our precision POS and ERP. Track fodder inventory, grass supply chains, and bulk sales with FBR-compliant QR receipts.",
                img: "/dashboard-procurement.png",
                link: "/feed-retail",
                features: ["FBR-compliant QR receipts", "Professional B2B group invoicing", "Automated sales workflows"]
              },
              {
                title: "Large Cattle & Poultry Farms",
                desc: "Scale your production with digital management. Monitor milk yields, vaccine schedules, and growth performance for cows, sheep, and chickens on one unified hub.",
                img: "/dashboard-palai.png",
                link: "/cattle-management",
                reverse: true,
                features: ["Milk Yield Tracking", "Vaccine Dose Alerts", "Growth Performance Analytics"]
              }
            ].map((block, i) => (
              <div key={i} className={`flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-1.5 bg-brand-primary rounded-full"></div>
                  <h3 className="text-4xl font-bold text-brand-navy leading-tight">{block.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-lg">{block.desc}</p>
                  <ul className="space-y-4">
                    {block.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-brand-navy font-bold text-sm">
                        <CheckCircle2 className="w-6 h-6 text-brand-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href={block.link} className="btn-primary !px-10 !py-4 flex items-center gap-2 w-fit">
                      Explore Module <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border border-brand-border">
                    <Image src={block.img} alt={block.title} fill className="object-cover" />
                  </div>
                  {/* Decorative elements */}
                  <div className={`absolute -bottom-6 ${block.reverse ? '-left-6' : '-right-6'} w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -z-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS & TRUST */}
      <section className="py-24 bg-brand-background">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Designed for the Ecosystem</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Seamlessly connecting your farm with hardware, accountants, and industry standards.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Ecosystems",
                desc: "Connect seamlessly with accounting packages like Xero or Quickbooks.",
                quote: "The easiest financial bridge I've ever used. AnimalCare360 saves us hours of data entry every month.",
                author: "Asim Nawaz, Dairy Operator"
              },
              {
                title: "Hardware & IoT",
                desc: "Compatible with RFID readers, smart tags, and automated weighing systems.",
                quote: "Real hardware integration that actually works in the field. The tagging system is foolproof.",
                author: "Robert Müller, Herd Manager"
              },
              {
                title: "Associations",
                desc: "Native support for breed association reporting and cattle registrations.",
                quote: "Registration used to be a nightmare. Now it's a few clicks and we're compliant with all breed regs.",
                author: "Saeed Khan, Beef Specialist"
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <h4 className="font-bold text-brand-navy mb-4 text-xl">{box.title}</h4>
                <p className="text-brand-muted text-sm mb-12">{box.desc}</p>
                <div className="mt-auto pt-8 border-t border-gray-50">
                  <p className="italic text-brand-navy text-sm mb-6 leading-relaxed">&quot;{box.quote}&quot;</p>
                  <p className="text-[10px] uppercase font-black text-brand-primary tracking-widest">{box.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
