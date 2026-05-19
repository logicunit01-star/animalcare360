'use client';
import React from "react";
import { motion } from "motion/react";
import { FileText, ShieldCheck, BookOpen, PlayCircle, Settings, ChevronRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function Resources() {
  return (
    <div className="pt-20">
      {/* Resources Breadcrumb Schema */}
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
                "name": "Resources",
                "item": "https://animalcare360.com/resources"
              }
            ]
          })
        }}
      />
      <div className="section-container">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Support Hub</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight">Livestock, Feed Retail, and Veterinary Business Resources</h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-xl leading-relaxed">
            Learn how to improve records, reduce manual work, control inventory, manage animal health, and grow animal businesses in Pakistan with practical guides from AnimalCare360.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Knowledge Base", desc: "Detailed step-by-step documentation for every module.", icon: BookOpen },
            { title: "Video Tutorials", desc: "Watch how-to videos for every ERP feature.", icon: PlayCircle },
            { title: "Implementation", desc: "Guides for multi-farm and multi-site setup.", icon: Settings },
            { title: "Privacy & Security", desc: "Data protection and Pakistani compliance.", icon: ShieldCheck },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-brand-border flex flex-col transition-all"
            >
              <div className="w-16 h-16 bg-brand-background rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <item.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-navy mb-4 text-xl tracking-tight">{item.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              <button className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                Explore <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden border border-white/5 mb-32 shadow-2xl shadow-slate-900/40">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-16 tracking-tight">Module-Specific Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
              {[
                "Farm Management",
                "Dairy Records",
                "Feed and Wanda Retail",
                "Animal Trading",
                "Pet Hospital Operations",
                "FBR and Business Records",
                "Product Tutorials"
              ].map((guide, idx) => (
                <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                    <FileText className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 group-hover:text-brand-primary transition-colors text-lg">{guide}</h4>
                    <p className="text-xs text-slate-400 font-medium">Average reading time: 6 mins</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative background circle */}
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-brand-muted text-lg">Everything you need to know about setting up AnimalCare360 for your enterprise in Pakistan.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is AnimalCare360 compatible with FBR requirements?",
                a: "Yes. Our Retail and Enterprise plans include built-in FBR-compliant QR invoicing and digital record-keeping modules designed specifically for Pakistan's sales tax compliance."
              },
              {
                q: "Can I manage multiple farm locations from one account?",
                a: "Absolutely. Our ERP is built on a multi-tenant cloud architecture, allowing you to monitor dozens of locations, warehouses, or clinics from a single master dashboard."
              },
              {
                q: "Does the system work without an internet connection?",
                a: "The core ERP is cloud-based for real-time data sync, but our mobile applications support offline data entry for field tasks like vaccination logs and weight recording, syncing once you're back online."
              },
              {
                q: "How does the Palai Partnership module work?",
                a: "It's a specialized reporting hub where you can assign stock to different partners. The system automatically calculates ROI based on growth metrics, feed costs, and sale price, providing transparent P&L statements."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-10 rounded-[40px] shadow-sm hover:border-brand-primary transition-colors">
                <h4 className="font-bold text-brand-navy mb-4 text-xl tracking-tight">{faq.q}</h4>
                <p className="text-base text-brand-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
