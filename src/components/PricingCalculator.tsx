'use client';
import React, { useState, useEffect } from 'react';
import { Calculator, ShoppingCart, Beef, Warehouse, TrendingUp } from 'lucide-react';

interface PricingCalculatorProps {
  basePrice: number;
  label: string;
  type: 'wanda' | 'farm';
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ basePrice, label, type }) => {
  const [qty, setQty] = useState<number>(0);
  const [stores, setStores] = useState<number>(1);
  const [total, setTotal] = useState<number>(basePrice);

  useEffect(() => {
    // Dynamic pricing logic based on user requirements
    // base + per unit cost logic
    const unitCost = type === 'wanda' ? 10 : 50; // Example variables
    const storeCost = 2000;
    
    let calculatedTotal = basePrice;
    if (qty > 0) calculatedTotal += (qty * unitCost);
    if (stores > 1) calculatedTotal += ((stores - 1) * storeCost);
    
    setTotal(calculatedTotal);
  }, [qty, stores, basePrice, type]);

  return (
    <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
          <Calculator className="w-5 h-5 text-brand-primary" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">{label} Calculator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-brand-muted mb-2">
            {type === 'wanda' ? 'Inventory Items / SKU Count' : 'Total Cattle / Animal Quantity'}
          </label>
          <input
            type="number"
            value={qty || ''}
            onChange={(e) => setQty(Math.max(0, parseInt(e.target.value) || 0))}
            placeholder={type === 'wanda' ? "e.g. 100" : "e.g. 50"}
            className="w-full bg-brand-background border border-brand-border p-4 rounded-xl text-brand-navy font-bold focus:ring-2 focus:ring-brand-primary outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-brand-muted mb-2">
            Number of Stores / Locations
          </label>
          <input
            type="number"
            value={stores || ''}
            onChange={(e) => setStores(Math.max(1, parseInt(e.target.value) || 1))}
            placeholder="e.g. 1"
            className="w-full bg-brand-background border border-brand-border p-4 rounded-xl text-brand-navy font-bold focus:ring-2 focus:ring-brand-primary outline-none transition-all"
          />
        </div>

        <div className="pt-6 border-t border-brand-border">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted mb-1">Estimated Monthly Investment</p>
              <p className="text-3xl font-black text-brand-navy">PKR {total.toLocaleString()}</p>
            </div>
            <a 
              href={`https://wa.me/923391119259?text=Hi, I am interested in ${label} for ${qty} items and ${stores} stores. Can you provide a custom quote?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white p-3 rounded-xl hover:scale-110 transition-transform shadow-brand"
            >
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[9px] text-brand-muted mt-4 font-medium italic">*Final pricing may vary based on exact data volume and support requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
