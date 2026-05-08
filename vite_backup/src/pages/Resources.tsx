import React from "react";
import { motion } from "motion/react";
import { FileText, Database, ShieldCheck, HelpCircle, BookOpen, PlayCircle, Settings, MessageSquare, ChevronRight } from "lucide-react";

export default function Resources() {
  return (
    <div className="pt-20 pb-32">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Support Hub</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-6">Learning & Resources</h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Master the AnimalCare360 ERP ecosystem with our comprehensive knowledge base, tutorials, and success guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { title: "Knowledge Base", desc: "Detailed step-by-step documentation.", icon: BookOpen },
            { title: "Video Tutorials", desc: "Watch how-to videos for every module.", icon: PlayCircle },
            { title: "Implementation", desc: "Guides for multi-farm setup.", icon: Settings },
            { title: "Privacy & Security", desc: "Data protection and compliance.", icon: ShieldCheck },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-background rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <button className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity">
                Explore <ChevronRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12">Module-Specific Documentation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                {[
                  "Cattle Management Setup",
                  "FBR-Compliant Invoicing",
                  "Multi-Location Inventory",
                  "Procurement Workflows",
                  "Vendor Performance Monitoring",
                  "Gemini AI Advisor Config"
                ].map((guide, idx) => (
                  <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                      <FileText className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 group-hover:text-brand-primary transition-colors">{guide}</h4>
                      <p className="text-xs text-slate-400">Average reading time: 6 mins</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           
           {/* Decorative background circle */}
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-muted">Everything you need to know about setting up AnimalCare360 for your enterprise.</p>
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
                a: "It's a specialized reporting hub where you can assign stock to different partners. The system automatically calculates ROI based on growth metrics, feed costs, and sale price, providing transparent P&L statements to all stakeholders."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-8 rounded-[24px]">
                <h4 className="font-bold text-brand-navy mb-2">{faq.q}</h4>
                <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
