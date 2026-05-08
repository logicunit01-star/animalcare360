'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/923391119259"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all font-bold text-sm"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Talk to Expert</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
