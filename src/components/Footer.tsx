import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <footer id="footer" className="bg-white border-t border-brand-border">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/user-icon.png" alt="AnimalCare360 Logo" width={32} height={32} />
            <span className="text-2xl font-bold tracking-tight text-brand-navy">AnimalCare<span className="text-brand-primary">360</span></span>
          </div>
          <p className="text-brand-muted text-sm leading-relaxed mb-6">
            Precision livestock management for the modern farm operator. From health tracking to financial reporting. Built specifically for Pakistan&apos;s agricultural ecosystem.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase font-bold text-brand-navy tracking-widest">Main Portal</p>
            <a href="https://app.animalcare360.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary text-sm font-semibold hover:underline">app.animalcare360.com</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Solutions</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li><Link href="/cattle-management" className="hover:text-brand-navy transition-colors">Cattle Management</Link></li>
            <li><Link href="/solutions/dairy-farm-software" className="hover:text-brand-navy transition-colors">Dairy Farm Software</Link></li>
            <li><Link href="/cattlepro" className="hover:text-brand-navy transition-colors">CattlePro Product Guide</Link></li>
            <li><Link href="/feed-retail" className="hover:text-brand-navy transition-colors">Wanda Feed Retail</Link></li>
            <li><Link href="/animal-trading" className="hover:text-brand-navy transition-colors">Animal Trading</Link></li>
            <li><Link href="/pet-hospital" className="hover:text-brand-navy transition-colors">Pet Hospital ERP</Link></li>
            <li><Link href="/solutions/veterinary-clinic-software" className="hover:text-brand-navy transition-colors">Veterinary Software</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Quick Links</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li><Link href="/pricing" className="hover:text-brand-navy transition-colors">Pricing</Link></li>
            <li><Link href="/features" className="hover:text-brand-navy transition-colors">Key Features</Link></li>
            <li><Link href="/blog" className="hover:text-brand-navy transition-colors">Company Blog</Link></li>
            <li><Link href="/resources" className="hover:text-brand-navy transition-colors">Learning Hub</Link></li>
            <li><Link href="/download-app" className="hover:text-brand-navy transition-colors flex items-center gap-2">Mobile App <span className="text-[8px] bg-brand-primary text-white px-1.5 py-0.5 rounded-full font-bold uppercase tracking-widest">New</span></Link></li>
            <li><a href="https://app.animalcare360.com/register" className="hover:text-brand-navy transition-colors">Register for Free</a></li>
            <li><a href="https://app.animalcare360.com/login" className="hover:text-brand-navy transition-colors">Portal Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Support</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest opacity-60">WhatsApp / Call</span>
              <a href="tel:+923391119259" className="text-brand-navy font-bold text-base hover:text-brand-primary transition-colors">+92 339 1119259</a>
            </li>
            <li><Link href="/resources" className="hover:text-brand-navy transition-colors">Knowledge Base</Link></li>
            <li><a href="https://wa.me/923391119259" className="hover:text-brand-navy transition-colors">Talk to an Expert</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
          © {new Date().getFullYear()} AnimalCare360. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[10px] font-bold text-brand-muted uppercase tracking-widest hover:text-brand-navy">Privacy Policy</Link>
          <Link href="/terms" className="text-[10px] font-bold text-brand-muted uppercase tracking-widest hover:text-brand-navy">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
