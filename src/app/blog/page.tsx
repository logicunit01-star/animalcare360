'use client';
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";
import { blogArticles } from "@/lib/blogArticles";

export default function BlogIndex() {
  const articles = blogArticles;

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
            <Link key={idx} href={`/blog/${art.slug}`} className="bg-white border border-brand-border rounded-[32px] p-8 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="inline-block bg-brand-background text-brand-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                  {art.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-6 line-clamp-4">
                  {art.description}
                </p>
              </div>
              <div className="pt-6 border-t border-brand-border flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-[10px] text-brand-muted font-bold uppercase">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                </div>
                <span className="text-brand-primary group-hover:translate-x-1.5 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
