'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    trackGAEvent('whatsapp_clicked', {
      event_category: 'conversion',
      event_label: 'Floating WhatsApp Button',
      cta_location: 'floating_whatsapp',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href="https://wa.me/923391119259"
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-manual="true"
        onClick={handleClick}
        aria-label="Discuss your farm on WhatsApp"
        title="Discuss your farm on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg transition-transform hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden text-sm font-bold sm:inline">Discuss Your Farm</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
