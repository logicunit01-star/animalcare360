'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Solutions",
      path: "/solutions",
      subItems: [
        { name: "Cattle Management solution", path: "/cattle-management" },
        { name: "Dairy Farm Software", path: "/solutions/dairy-farm-software" },
        { name: "CattlePro Product Guide", path: "/cattlepro" },
        { name: "Wanda Feed Retail", path: "/feed-retail" },
        { name: "Animal Trading", path: "/animal-trading" },
        { name: "Pet Hospital ERP", path: "/pet-hospital" },
        { name: "Veterinary Clinic Software", path: "/solutions/veterinary-clinic-software" }
      ]
    },
    {
      name: "Features",
      path: "/features",
      subItems: [
        { name: "Inventory Management", path: "/features/inventory-management" },
        { name: "Animal Health Tracking", path: "/features/health-tracking" },
        { name: "FBR Invoicing & POS", path: "/features/billing-pos" },
        { name: "CattlePro Feature Spec", path: "/cattlepro/features" }
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resources" },
    { name: "Mobile App", path: "/download-app" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-white border-b border-brand-border h-[72px] flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image src="/user-icon.png" alt="Logo Icon" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-navy hidden sm:block">
            AnimalCare<span className="text-brand-primary">360</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.subItems) {
              return (
                <div key={link.name} className="relative group py-2">
                  <button className="flex items-center gap-1 text-sm font-medium text-brand-muted hover:text-brand-navy transition-colors cursor-pointer">
                    {link.name} <ChevronDown className="w-4 h-4 text-brand-muted group-hover:text-brand-navy transition-colors" />
                  </button>
                  <div className="absolute left-0 mt-2 w-72 bg-white border border-brand-border rounded-2xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4 flex flex-col gap-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="text-xs font-semibold text-brand-navy hover:text-brand-primary p-2.5 rounded-xl hover:bg-brand-background transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path ? "text-brand-primary" : "text-brand-muted hover:text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.animalcare360.com/login" className="text-sm font-semibold text-brand-navy hover:text-brand-primary px-3 py-2 transition-colors">
            Login
          </a>
          <a href="https://app.animalcare360.com/register" className="btn-ghost">
            Start Free Trial
          </a>
          <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 py-2">
                  {link.subItems ? (
                    <div>
                      <span className="block px-3 py-1 text-[10px] font-bold text-brand-navy uppercase tracking-wider opacity-60">
                        {link.name}
                      </span>
                      <div className="pl-3 flex flex-col gap-1 mt-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-xs font-semibold text-brand-muted hover:text-brand-navy"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-brand-navy"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://app.animalcare360.com/login" className="text-center py-3 font-semibold text-brand-navy border border-brand-border rounded-xl">Login</a>
                <a href="https://app.animalcare360.com/register" className="text-center py-3 font-semibold text-white bg-brand-navy rounded-xl">Start Free Trial</a>
                <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white text-center py-4 rounded-xl font-bold">Book a Demo</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
