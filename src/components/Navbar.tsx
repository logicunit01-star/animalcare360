'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { Calculator, ChevronDown, Menu, X } from 'lucide-react';

const productLinks = [
  { name: 'CattlePro', path: '/solutions/cattlepro', note: 'Cattle operations and farm economics' },
  { name: 'Feed Retail', path: '/solutions/feed-retail', note: 'Inventory, sales, and supplier control' },
  { name: 'Animal Trading', path: '/solutions/animal-trading', note: 'Deals, ledgers, and trade profitability' },
  { name: 'Veterinary & Pet Hospital', path: '/solutions/pet-hospital', note: 'Clinical records, billing, and pharmacy' },
];

const primaryLinks = [
  { name: 'Cattle Fattening', path: '/cattle-fattening-software' },
  { name: 'Calculator', path: '/cattle-fattening-profit-calculator' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Resources', path: '/resources' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav id="navbar" aria-label="Primary navigation" className="sticky top-0 z-50 flex h-[72px] items-center border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="AnimalCare360 home">
          <Image src="/user-icon.png" alt="" width={40} height={40} priority className="h-10 w-10 object-contain" />
          <span className="hidden text-xl font-bold text-brand-navy sm:block">AnimalCare<span className="text-brand-primary">360</span></span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {primaryLinks.slice(0, 2).map((link) => (
            <Link key={link.path} href={link.path} className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-navy'}`}>{link.name}</Link>
          ))}
          <div className="group relative py-3">
            <button type="button" className="flex items-center gap-1 text-sm font-semibold text-brand-muted hover:text-brand-navy" aria-haspopup="true">Products <ChevronDown className="h-4 w-4" /></button>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-lg border border-brand-border bg-white p-2 opacity-0 shadow-card transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {productLinks.map((item) => (
                <Link key={item.path} href={item.path} className="block rounded-md px-3 py-3 hover:bg-brand-background">
                  <span className="block text-sm font-bold text-brand-navy">{item.name}</span>
                  <span className="mt-0.5 block text-xs text-brand-muted">{item.note}</span>
                </Link>
              ))}
              <Link href="/solutions" className="block border-t border-brand-border px-3 pt-3 text-xs font-bold text-brand-primary">View all solutions</Link>
            </div>
          </div>
          {primaryLinks.slice(2).map((link) => (
            <Link key={link.path} href={link.path} className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-navy'}`}>{link.name}</Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://app.animalcare360.com/login" className="px-3 py-2 text-sm font-semibold text-brand-navy hover:text-brand-primary">Login</a>
          <Link href="/demo" className="btn-ghost">Book a Demo</Link>
          <Link href="/cattle-fattening-profit-calculator" className="btn-primary inline-flex items-center gap-2"><Calculator className="h-4 w-4" /> Calculate Profit</Link>
        </div>

        <button type="button" className="rounded-md p-2 text-brand-navy lg:hidden" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="absolute left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto border-b border-brand-border bg-white shadow-xl lg:hidden">
            <div className="space-y-1 px-5 py-5">
              {primaryLinks.map((link) => <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-sm font-bold text-brand-navy hover:bg-brand-background">{link.name}</Link>)}
              <p className="px-3 pb-1 pt-4 text-[11px] font-bold uppercase text-brand-muted">Products</p>
              {productLinks.map((item) => <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-background">{item.name}</Link>)}
              <Link href="/solutions" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-primary">All solutions</Link>
              <div className="grid gap-2 border-t border-brand-border pt-4">
                <a href="https://app.animalcare360.com/login" className="rounded-lg border border-brand-border py-3 text-center text-sm font-bold text-brand-navy">Login</a>
                <Link href="/demo" onClick={() => setIsOpen(false)} className="rounded-lg border border-brand-navy py-3 text-center text-sm font-bold text-brand-navy">Book a Demo</Link>
                <Link href="/cattle-fattening-profit-calculator" onClick={() => setIsOpen(false)} className="rounded-lg bg-brand-primary py-3 text-center text-sm font-bold text-white">Calculate Profit</Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
