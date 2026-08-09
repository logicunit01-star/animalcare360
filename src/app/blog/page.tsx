'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function BlogIndex() {
  const articles = [
    {
      title: "Best Livestock Management Software for Agribusiness",
      desc: "Explore how cloud-based farm ERP systems solve milk yield tracking, cattle breeding pedigrees, and profit-sharing distributions for dairy owners.",
      tag: "Livestock Management",
      readTime: "8 min read",
      date: "June 24, 2026"
    },
    {
      title: "How to Optimize Animal Feed Inventory Management",
      desc: "Prevent feed stockouts and control costs. Learn how multi-warehouse allocations, low-stock notifications, and automatic diet run deductions streamline stores.",
      tag: "Feed Inventory",
      readTime: "6 min read",
      date: "June 18, 2026"
    },
    {
      title: "Ultimate Guide to Pet Hospital Management Systems",
      desc: "Discover how veterinary practices organize appointment schedules, patient medical charts, surgical registers, and pharmacy stock cabinets from one cloud ERP.",
      tag: "Pet Hospital EMR",
      readTime: "7 min read",
      date: "June 12, 2026"
    },
    {
      title: "Why Veterinary Clinic Software is Critical for Modern Practices",
      desc: "Compare manual diaries with unified SOAP note software. Learn about tax-compliant billing POS and auto reminders to boost veterinary clinic client retention.",
      tag: "Clinical Workflows",
      readTime: "5 min read",
      date: "June 05, 2026"
    },
    {
      title: "Animal Health Monitoring & Preventive Care Guide",
      desc: "Learn how to build vaccine schedules, log veterinarian visits, record clinical treatment plans, and track heat cycles to ensure dairy herd safety.",
      tag: "Animal Health",
      readTime: "9 min read",
      date: "May 28, 2026"
    },
    {
      title: "Wanda & Feed Retail Business Management Strategy",
      desc: "Unlock retail success. Automate credit ledger accounts, coordinate supplier payable limits, and print digital sales receipts.",
      tag: "Feed Store Retail",
      readTime: "6 min read",
      date: "May 20, 2026"
    }
  ];

  return (
    <div className="pt-0 bg-brand-background">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.animalcare360.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.animalcare360.com/blog" }
            ]
          })
        }}
      />

      <div className="section-container">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">Resource Center</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-6">
            Animal Care & Livestock Business Insights
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-base">
            Expert guides, best practices, and operations tips designed specifically for livestock farm operators, wanda feed retailers, and veterinary clinics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {articles.map((art, idx) => (
            <div key={idx} className="bg-white border border-brand-border rounded-[32px] p-8 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="inline-block bg-brand-background text-brand-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                  {art.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-6 line-clamp-4">
                  {art.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-brand-border flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-[10px] text-brand-muted font-bold uppercase">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                </div>
                <button className="text-brand-primary group-hover:translate-x-1.5 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
