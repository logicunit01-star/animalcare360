import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CTAProps {
  title?: string;
  subtitle?: string;
}

const CTA: React.FC<CTAProps> = ({ 
  title = "Ready to Digitise Your Animal Care Business?", 
  subtitle = "Join Pakistan's leading livestock enterprises. Connect with our experts today and see how AnimalCare360 can transform your operations."
}) => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/923391119259" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-green-900/20"
            >
              <MessageCircle className="w-6 h-6" />
              Connect with Expert
            </a>
            <a 
              href="https://app.hulmsolutions.com/Register"
              className="flex items-center gap-2 bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-brand-primary/20"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
              Built for Pakistan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
              FBR Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
