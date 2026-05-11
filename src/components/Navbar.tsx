'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "Features", path: "/features" },
    { name: "Resources", path: "/resources" },
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path ? "text-brand-primary" : "text-brand-muted hover:text-brand-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.hulmsolutions.com/SigninPage" className="btn-ghost">
            Sign In
          </a>
          <a href="https://app.hulmsolutions.com/Register" className="btn-primary">
            Register for Free
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
            <div className="px-6 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-brand-navy border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://app.hulmsolutions.com/SigninPage" className="text-center py-3 font-semibold text-brand-navy">Sign In</a>
                <a href="https://app.hulmsolutions.com/Register" className="bg-brand-primary text-white text-center py-4 rounded-xl font-bold">Register for Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
