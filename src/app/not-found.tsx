import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-brand-background flex flex-col justify-center items-center px-6 py-24 text-center">
      <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[40px] border border-brand-border shadow-2xl">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-100">
          <HelpCircle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-5xl font-bold text-brand-navy mb-2 tracking-tight">404</h1>
        <h2 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wider">Page Not Found</h2>
        <p className="text-brand-muted mb-8 text-sm leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <Link href="/" className="w-full flex items-center justify-center gap-3 bg-brand-primary hover:opacity-90 text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-brand-primary/10 text-sm">
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-brand-navy hover:bg-slate-800 text-white py-4 px-6 rounded-2xl font-bold transition-all text-sm">
            Contact Support via WhatsApp
          </a>
        </div>

        <div className="pt-8 border-t border-brand-border">
          <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-4">Popular Solutions</p>
          <div className="grid grid-cols-2 gap-3 text-left">
            <Link href="/solutions/cattle-management" className="text-xs font-bold text-brand-navy hover:text-brand-primary flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Cattle Farm ERP
            </Link>
            <Link href="/solutions/feed-retail" className="text-xs font-bold text-brand-navy hover:text-brand-primary flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Feed Retail POS
            </Link>
            <Link href="/solutions/animal-trading" className="text-xs font-bold text-brand-navy hover:text-brand-primary flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Animal Trading
            </Link>
            <Link href="/solutions/pet-hospital" className="text-xs font-bold text-brand-navy hover:text-brand-primary flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Pet Hospital ERP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
