'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';

interface CTAProps {
  title?: string;
  subtitle?: string;
}

const CTA: React.FC<CTAProps> = ({ 
  title = "Ready to see the economics behind every animal?",
  subtitle = "Calculate a planning estimate now, then see how AnimalCare360 can track the underlying records across your real operation."
}) => {
  return (
    <section className="border-y border-slate-700 bg-brand-navy">
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-300">
            {subtitle}
          </p>
          
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/cattle-fattening-profit-calculator" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-bold text-white">Calculate Your Cattle Profit <ArrowRight className="h-5 w-5" /></Link>
            <Link
              href="/demo"
              data-analytics-manual="true"
              onClick={() => trackGAEvent('cta_clicked', {
                event_category: 'engagement',
                event_label: 'Book a Demo',
                cta_location: 'cta_section',
              })}
              className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-7 py-3.5 font-bold text-white hover:border-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
