import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X, ChevronRight } from "lucide-react";

const TopBanner = () => (
  <div id="top-banner" className="bg-brand-navy text-white text-[11px] py-1.5 px-10 flex justify-between items-center tracking-widest uppercase font-medium">
    <span>A product of Hulm Solutions</span>
    <span className="hidden sm:inline">Contact: +92 339 1119259</span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "Features", path: "/features" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-white border-b border-brand-border h-[72px] flex items-center">
      <div className="max-w-7xl w-full mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-navy">
            AnimalCare<span className="text-brand-primary">360</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? "text-brand-primary" : "text-brand-muted hover:text-brand-navy"
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
            className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-brand-navy border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://app.hulmsolutions.com/SigninPage" className="text-center py-3 font-semibold">Sign In</a>
                <a href="https://app.hulmsolutions.com/Register" className="bg-brand-primary text-white text-center py-4 rounded-xl font-bold">Register for Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer id="footer" className="bg-white pt-20 pb-10 border-t border-brand-border">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold tracking-tight text-brand-navy">AnimalCare<span className="text-brand-primary">360</span></span>
          </div>
          <p className="text-brand-muted text-sm leading-relaxed mb-6">
            Precision livestock management for the modern farm operator. From health tracking to financial reporting.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase font-black text-brand-navy tracking-widest">Hulm Solutions</p>
            <a href="https://hulmsolutions.com" className="text-brand-primary text-sm font-semibold hover:underline">hulmsolutions.com</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Company</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li><Link to="/solutions" className="hover:text-brand-navy transition-colors">Solutions</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-navy transition-colors">Pricing</Link></li>
            <li><Link to="/features" className="hover:text-brand-navy transition-colors">Features</Link></li>
            <li><a href="#" className="hover:text-brand-navy transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Resources</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li><Link to="/resources" className="hover:text-brand-navy transition-colors">Knowledge Base</Link></li>
            <li><a href="#" className="hover:text-brand-navy transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-navy transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-brand-navy transition-colors">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-navy mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Support</h4>
          <ul className="space-y-3 text-sm text-brand-muted font-medium">
            <li className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest opacity-60">WhatsApp / Call</span>
              <span className="text-brand-navy font-bold text-base">03391119259</span>
            </li>
            <li><a href="#" className="hover:text-brand-navy transition-colors">Help Center</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
          © {new Date().getFullYear()} AnimalCare360. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <a
      href="https://wa.me/923391119259"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all font-bold text-sm"
    >
      <MessageCircle className="w-5 h-5" />
      Talk to Expert
    </a>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Layout;
