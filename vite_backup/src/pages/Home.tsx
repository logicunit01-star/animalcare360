import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, ArrowRight, Activity, Users, DollarSign, Sprout, MessageCircle, ShoppingCart, Database, Beef, HeartPulse, Warehouse, Sparkles } from "lucide-react";

// --- HERO SECTION ---
const Hero = () => (
  <section id="hero" className="relative pt-16 pb-24 overflow-hidden bg-white">
    <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        <p className="text-brand-primary font-bold mb-4 text-sm tracking-widest uppercase">
          Track. Manage. Grow.
        </p>
        <h1 className="text-[44px] font-bold text-brand-navy leading-[1.1] mb-8">
          The Complete Tech Suite<br /> for Pakistan's Animal Care.
        </h1>
        <p className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed max-w-lg">
          The unified tech hub for Pakistan's animal industry. Specialized ERP solutions for Feed Retailers, Animal Traders, Cattle Farms, and Pet Hospitals.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="https://app.hulmsolutions.com/Register" className="btn-primary !py-4 !px-8 text-base">
            Start Free Trial
          </a>
          <button className="btn-ghost !py-4 !px-6 text-base flex items-center gap-2 group">
            Watch Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* DASHBOARD MOCKUP */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="bg-white rounded-2xl shadow-card border border-brand-border h-[480px] flex overflow-hidden">
          {/* Mockup Sidebar */}
          <div className="w-48 bg-brand-background border-r border-brand-border p-4 hidden md:flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center text-[10px] text-white font-bold">CP</div>
              <span className="text-[10px] font-bold text-brand-navy">AnimalCare ERP</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[8px] uppercase font-black text-brand-light tracking-widest pl-1">Livestock</p>
                <div className="bg-brand-primary/10 text-brand-primary px-2 py-1.5 rounded text-[9px] font-bold">Cattle Herd</div>
                <div className="text-brand-muted px-2 py-1.5 text-[9px] font-medium">Goat Flock</div>
              </div>
              
              <div className="space-y-1">
                <p className="text-[8px] uppercase font-black text-brand-light tracking-widest pl-1">Operations</p>
                <div className="text-brand-muted px-2 py-1.5 text-[9px] font-medium">Medicine Cabinet</div>
                <div className="text-brand-muted px-2 py-1.5 text-[9px] font-medium">Diet Management</div>
                <div className="text-brand-muted px-2 py-1.5 text-[9px] font-medium">Procurement</div>
              </div>

              <div className="space-y-1">
                <p className="text-[8px] uppercase font-black text-brand-light tracking-widest pl-1">Analytics</p>
                <div className="text-brand-muted px-2 py-1.5 text-[9px] font-medium flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Gemini Advisor
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="h-12 border-b border-brand-border bg-white flex items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="text-[10px] font-bold text-brand-navy bg-brand-background px-3 py-1 rounded-full">All Farms Overview</div>
              <div className="w-6 h-6 rounded-full bg-gray-100 italic flex items-center justify-center text-[8px]">SA</div>
            </div>
            
            <div className="flex-1 p-6 bg-[#FAFBFC] overflow-hidden">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Milk Today", val: "842 L", color: "border-blue-200" },
                    { label: "Net Profit", val: "PKR 450k", color: "border-green-200" },
                    { label: "Mortality", val: "0.4%", color: "border-red-100" },
                    { label: "Active Spend", val: "PKR 12k", color: "border-gray-200" }
                  ].map((stat, idx) => (
                    <div key={idx} className={`bg-white p-3 rounded-lg border-b-2 shadow-sm ${stat.color}`}>
                      <p className="text-[8px] uppercase font-black text-brand-light tracking-tighter mb-1">{stat.label}</p>
                      <p className="text-sm font-black text-brand-navy">{stat.val}</p>
                    </div>
                  ))}
               </div>

               <div className="bg-white border border-brand-border rounded-xl p-4 h-48 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] font-bold text-brand-navy">Milk Production Trend</p>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end gap-1 px-2">
                     {[20, 35, 25, 45, 60, 55, 75, 90, 85, 95, 70, 100].map((h, i) => (
                       <div key={i} className="flex-1 bg-brand-primary/10 hover:bg-brand-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
               </div>

               <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white border border-brand-border rounded-lg p-3">
                    <p className="text-[9px] font-bold mb-2">Pending Alerts</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-50 text-red-500 rounded flex items-center justify-center text-[10px]">!</div>
                      <p className="text-[9px] font-medium text-brand-muted">Vaccine check for B-104</p>
                    </div>
                  </div>
                  <div className="bg-white border border-brand-border rounded-lg p-3">
                    <p className="text-[9px] font-bold mb-2">Gemini Advisor Tip</p>
                    <p className="text-[8px] leading-tight text-brand-primary font-bold italic">"Optimize grain ratio by 5% for better yield."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- INDUSTRY SECTION ---
const IndustrySection = () => (
  <section className="py-24 bg-white border-y border-brand-border">
    <div className="section-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Feed Retail (Wanda)",
            meta: "Pet Food & Ration",
            desc: "POS, Inventory, and multi-warehouse sync.",
            color: "border-[#F59E0B]",
            bg: "bg-[#FFFBEB]",
            link: "/feed-retail"
          },
          {
            title: "Animal Trading",
            meta: "B2B Livestock",
            desc: "Sale-purchase logs and trading commissions.",
            color: "border-[#8B5CF6]",
            bg: "bg-[#F5F3FF]",
            link: "/animal-trading"
          },
          {
            title: "Enterprise Farms",
            meta: "Cattle, Sheep, Poultry",
            desc: "Milk supply chain and pedigree tracking.",
            color: "border-[#3B82F6]",
            bg: "bg-[#EFF6FF]",
            link: "/cattle-management"
          },
          {
            title: "Pet Hospitals",
            meta: "Clinical ERP",
            desc: "Patient EMR, Pharmacy, and Surgery logs.",
            color: "border-[#EF4444]",
            bg: "bg-[#FEF2F2]",
            link: "/pet-hospital"
          }
        ].map((card, i) => (
          <Link key={i} to={card.link}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`${card.bg} p-6 h-full rounded-2xl border-l-[4px] ${card.color} shadow-sm flex flex-col gap-2`}
            >
              <div className="text-[10px] uppercase font-black text-brand-muted tracking-widest">
                {card.meta}
              </div>
              <h3 className="text-base font-bold text-brand-navy">{card.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// --- FEATURE BLOCKS ---
const FeatureBlock = ({ title, desc, img, reverse, link }: any) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-20`}>
    <div className="flex-1 space-y-6">
      <div className="w-12 h-1 bg-brand-primary"></div>
      <h3 className="text-3xl font-bold text-brand-navy leading-tight">{title}</h3>
      <p className="text-brand-muted leading-relaxed text-lg">{desc}</p>
      <ul className="space-y-4">
        {["FBR-compliant QR receipts", "Professional B2B group invoicing", "Automated sales workflows"].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-brand-navy font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {item}
          </li>
        ))}
      </ul>
      <Link to={link} className="pt-4 text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
        Explore Module <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
    <div className="flex-1 w-full bg-white rounded-3xl shadow-xl overflow-hidden aspect-[4/3] relative">
      <img src={img} alt={title} className="w-full h-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/10 to-transparent"></div>
    </div>
  </div>
);

// --- QUERY FORM ---
const QueryForm = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-background rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">Have a Question?</h2>
          <p className="text-brand-muted text-lg mb-8">
            Our experts are ready to help you digitize your farm operations. Get a personalized walkthrough today.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <MessageCircle className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-brand-light">Direct Expert Access</p>
              <p className="text-xl font-bold text-brand-navy">03391119259</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-white p-8 rounded-2xl shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-brand-background border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-primary outline-none" />
              <input type="email" placeholder="Email Address" className="w-full bg-brand-background border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-primary outline-none" />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full bg-brand-background border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-primary outline-none" />
            <textarea placeholder="Your Query" rows={4} className="w-full bg-brand-background border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-primary outline-none resize-none"></textarea>
            <button className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-100">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// --- CIRCULAR 360 SOLUTIONS SECTION ---
const SolutionsCircle = () => {
  const solutions = [
    { title: "Feed Retail", icon: ShoppingCart, link: "/feed-retail" },
    { title: "Trading Hub", icon: Users, link: "/animal-trading" },
    { title: "Cattle Farms", icon: Beef, link: "/cattle-management" },
    { title: "Pet Hospital", icon: HeartPulse, link: "/pet-hospital" },
    { title: "Supply Chain", icon: Warehouse, link: "/feed-retail" },
    { title: "Gemini AI", icon: Sparkles, link: "/solutions" },
  ];

  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/20 rounded-full scale-150 -translate-y-1/2"></div>
      </div>
      
      <div className="section-container text-center relative z-10">
        <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">The Unified Ecosystem</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Everything Animal Care. <span className="text-brand-primary">One Hub.</span></h2>
        
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center">
          {/* Central 360 Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="w-32 h-32 md:w-48 md:h-48 bg-brand-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.4)] z-20 border-8 border-brand-navy"
          >
            <span className="text-4xl md:text-6xl font-black text-white leading-none">360</span>
            <span className="text-[8px] md:text-[10px] font-black text-white px-3 py-1 bg-brand-navy/30 rounded-full mt-2 uppercase tracking-tighter">Unified ERP</span>
          </motion.div>

          {/* Solutions Orbiting */}
          {solutions.map((sol, i) => {
            const angle = (i * (360 / solutions.length)) * (Math.PI / 180);
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <Link
                key={i}
                to={sol.link}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`
                }}
                className="flex flex-col items-center gap-3 z-30 group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300"
                >
                  <sol.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest leading-none text-center">{sol.title}</span>
              </Link>
            );
          })}

          {/* Connective lines / Rings */}
          <div className="absolute inset-0 border-[1px] border-white/10 rounded-full scale-100"></div>
          <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-125"></div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <IndustrySection />
      <SolutionsCircle />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FeatureBlock 
             title="Feed & Pet Food Retailers (Wanda/Ration)"
             desc="Manage your entire retail or wholesale business with our precision POS and ERP. Track fodder inventory, grass supply chains, and bulk sales with FBR-compliant QR receipts."
             img="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1471&auto=format&fit=crop"
             link="/feed-retail"
           />
           <FeatureBlock 
             title="Large Cattle & Poultry Farms"
             desc="Scale your production with digital management. Monitory milk yields, vaccine schedules, and growth performance for cows, sheep, and chickens on one unified hub."
             img="https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1470&auto=format&fit=crop"
             reverse
             link="/cattle-management"
           />
           <FeatureBlock 
             title="Animal Trading & B2B Hub"
             desc="Designed for modern traders. Professional sale/purchase logs, trading commission tracking, and digital stock movement management for high-value livestock."
             img="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1470&auto=format&fit=crop"
             link="/animal-trading"
           />
           <FeatureBlock 
             title="Pet Pharmacy & Hospital Management"
             desc="Complete clinical suite for veterinary clinics. Manage patient electronic records, pharmacy dispensary, and appointment scheduling with absolute precision."
             img="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1470&auto=format&fit=crop"
             reverse
             link="/pet-hospital"
           />
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {[
               {
                 title: "Software Ecosystems",
                 desc: "Connect seamlessly with accounting packages like Xero or Quickbooks.",
                 quote: "\"The easiest financial bridge I've ever used. AnimalCare360 saves us hours of data entry every month.\"",
                 author: "Asim Nawaz, Dairy Operator"
               },
               {
                 title: "Hardware & IoT",
                 desc: "Compatible with RFID readers, smart tags, and automated weighing systems.",
                 quote: "\"Real hardware integration that actually works in the field. The tagging system is foolproof.\"",
                 author: "Robert Müller, Herd Manager"
               },
               {
                 title: "Associations",
                 desc: "Native support for breed association reporting and cattle registrations.",
                 quote: "\"Registration used to be a nightmare. Now it's a few clicks and we're compliant with all breed regs.\"",
                 author: "Saeed Khan, Beef Specialist"
               }
             ].map((box, i) => (
               <div key={i} className="bg-white p-10 rounded-3xl flex flex-col">
                 <h4 className="font-bold text-brand-navy mb-4 text-xl">{box.title}</h4>
                 <p className="text-brand-muted text-sm mb-10">{box.desc}</p>
                 <div className="mt-auto pt-10 border-t border-gray-50">
                    <p className="italic text-brand-navy text-sm mb-4 leading-relaxed">{box.quote}</p>
                    <p className="text-xs uppercase font-bold text-brand-primary">{box.author}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <QueryForm />

      {/* FOOTER CTA */}
      <section className="bg-brand-navy py-24 text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Run Your Herd, Not the Paperwork.</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {["No Credit Card Required", "Unlimited Animals", "Daily Data Backups"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {text}
              </div>
            ))}
          </div>
          <a href="https://app.hulmsolutions.com/Register" className="inline-block bg-brand-primary text-white font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-green-900/40">
            Start Free Trial Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
