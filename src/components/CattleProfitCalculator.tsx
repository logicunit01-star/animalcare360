'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, MessageCircle } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';

type Inputs = {
  cattle: number; purchaseWeight: number; purchasePrice: number; feedPerDay: number;
  days: number; adg: number; medicinePerHead: number; labourTotal: number;
  otherTotal: number; sellingPrice: number; mortality: number;
};

const initialInputs: Inputs = {
  cattle: 50, purchaseWeight: 250, purchasePrice: 700, feedPerDay: 2.2,
  days: 120, adg: 1.1, medicinePerHead: 18, labourTotal: 1200,
  otherTotal: 800, sellingPrice: 3.25, mortality: 1,
};

const currencies = ['USD', 'PKR', 'SAR', 'AED', 'EUR', 'GBP', 'KES', 'AUD'];

export default function CattleProfitCalculator() {
  const [inputs, setInputs] = useState(initialInputs);
  const [currency, setCurrency] = useState('USD');
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const [showResults, setShowResults] = useState(true);
  const started = useRef(false);

  const results = useMemo(() => {
    const survivingCattle = inputs.cattle * (1 - inputs.mortality / 100);
    const finalWeight = inputs.purchaseWeight + inputs.adg * inputs.days;
    const gainPerHead = Math.max(0, finalWeight - inputs.purchaseWeight);
    const totalWeightGain = gainPerHead * survivingCattle;
    const purchaseCost = inputs.purchasePrice * inputs.cattle;
    const feedCost = inputs.feedPerDay * inputs.days * inputs.cattle;
    const medicineCost = inputs.medicinePerHead * inputs.cattle;
    const operatingCost = feedCost + medicineCost + inputs.labourTotal + inputs.otherTotal;
    const totalInvestment = purchaseCost + operatingCost;
    const salesValue = finalWeight * inputs.sellingPrice * survivingCattle;
    const profit = salesValue - totalInvestment;
    const roi = totalInvestment > 0 ? (profit / totalInvestment) * 100 : 0;
    const costPerGain = totalWeightGain > 0 ? operatingCost / totalWeightGain : 0;
    const saleableWeight = finalWeight * survivingCattle;
    const breakEvenPrice = saleableWeight > 0 ? totalInvestment / saleableWeight : 0;
    return { survivingCattle, finalWeight, totalWeightGain, feedCost, medicineCost, operatingCost, totalInvestment, salesValue, profit, roi, costPerGain, breakEvenPrice };
  }, [inputs]);

  const money = (value: number) => new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
  const decimalMoney = (value: number) => new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);

  const update = (field: keyof Inputs, value: number) => {
    setInputs((current) => ({ ...current, [field]: Number.isFinite(value) ? value : 0 }));
    if (!started.current) {
      started.current = true;
      trackGAEvent('calculator_started', { calculator_name: 'cattle_fattening_profit', unit, currency });
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setShowResults(true);
    trackGAEvent('calculator_completed', {
      calculator_name: 'cattle_fattening_profit', unit, currency,
      herd_size_band: inputs.cattle < 50 ? 'under_50' : inputs.cattle <= 250 ? '50_250' : inputs.cattle <= 1000 ? '251_1000' : 'over_1000',
    });
    requestAnimationFrame(() => document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const fields: Array<{ key: keyof Inputs; label: string; suffix?: string; min?: number; max?: number; step?: number }> = [
    { key: 'cattle', label: 'Number of cattle', min: 1, step: 1 },
    { key: 'purchaseWeight', label: 'Average purchase weight', suffix: unit, min: 0 },
    { key: 'purchasePrice', label: 'Purchase price per animal', suffix: currency, min: 0 },
    { key: 'feedPerDay', label: 'Feed cost per animal / day', suffix: currency, min: 0, step: 0.01 },
    { key: 'days', label: 'Fattening period', suffix: 'days', min: 1, step: 1 },
    { key: 'adg', label: 'Expected average daily gain', suffix: `${unit}/day`, min: 0, step: 0.01 },
    { key: 'medicinePerHead', label: 'Medicine cost per animal', suffix: currency, min: 0, step: 0.01 },
    { key: 'labourTotal', label: 'Total labour cost', suffix: currency, min: 0, step: 0.01 },
    { key: 'otherTotal', label: 'Other operating cost', suffix: currency, min: 0, step: 0.01 },
    { key: 'sellingPrice', label: `Expected selling price per ${unit}`, suffix: currency, min: 0, step: 0.01 },
    { key: 'mortality', label: 'Expected mortality', suffix: '%', min: 0, max: 100, step: 0.1 },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
      <form onSubmit={submit} className="rounded-lg border border-brand-border bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-4 border-b border-brand-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div><h2 className="text-xl font-bold text-brand-navy">Your planning assumptions</h2><p className="mt-1 text-sm text-brand-muted">Use one consistent currency and weight unit.</p></div>
          <div className="flex gap-2">
            <label className="text-xs font-bold text-brand-muted">Currency<select value={currency} onChange={(event) => setCurrency(event.target.value)} className="mt-1 block rounded-md border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy">{currencies.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-xs font-bold text-brand-muted">Weight<select value={unit} onChange={(event) => setUnit(event.target.value as 'kg' | 'lb')} className="mt-1 block rounded-md border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy"><option value="kg">kg</option><option value="lb">lb</option></select></label>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {fields.map((field) => <label key={field.key} className="text-sm font-bold text-brand-navy"><span>{field.label}</span><span className="relative mt-2 block"><input type="number" value={inputs[field.key]} min={field.min} max={field.max} step={field.step ?? 0.01} onChange={(event) => update(field.key, Number(event.target.value))} className="input-primary pr-20" required /><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-brand-muted">{field.suffix}</span></span></label>)}
        </div>
        <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 font-bold text-white"><Calculator className="h-5 w-5" /> Calculate profit</button>
      </form>

      <div id="calculator-results" className="scroll-mt-28 rounded-lg border border-brand-border bg-brand-navy p-5 text-white sm:p-7 lg:sticky lg:top-28">
        <p className="text-xs font-bold uppercase text-brand-primary">Planning estimate</p>
        <h2 className="mt-2 text-2xl font-bold">Expected cattle economics</h2>
        {showResults ? <>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-slate-700">
            {[
              ['Final weight / animal', `${results.finalWeight.toFixed(1)} ${unit}`],
              ['Total weight gain', `${results.totalWeightGain.toFixed(0)} ${unit}`],
              ['Feed cost', money(results.feedCost)],
              ['Operating cost', money(results.operatingCost)],
              ['Total investment', money(results.totalInvestment)],
              ['Expected sales', money(results.salesValue)],
              ['Expected profit', money(results.profit)],
              ['Expected ROI', `${results.roi.toFixed(1)}%`],
              [`Cost per ${unit} gained`, decimalMoney(results.costPerGain)],
              [`Break-even price / ${unit}`, decimalMoney(results.breakEvenPrice)],
            ].map(([label, value]) => <div key={label} className="bg-slate-900 p-4"><p className="text-xs leading-5 text-slate-400">{label}</p><p className={`mt-1 font-bold ${label === 'Expected profit' ? (results.profit >= 0 ? 'text-brand-primary' : 'text-red-400') : 'text-white'}`}>{value}</p></div>)}
          </div>
          <div className="mt-5 rounded-lg border border-slate-700 p-4 text-xs leading-5 text-slate-300">
            Assumptions: all entered cattle incur the planned purchase and operating costs; mortality reduces saleable animals; final weight equals starting weight plus ADG × days. Taxes, finance cost, sale fees, salvage value, and changing market prices are excluded unless added under other operating cost.
          </div>
          <div className="mt-6 border-t border-slate-700 pt-6"><h3 className="font-bold">Want to track this with real farm records?</h3><p className="mt-2 text-sm text-slate-300">Use AnimalCare360 to connect the estimate with purchases, feed, weigh-ins, treatments, inventory, and sales.</p><div className="mt-4 grid gap-2 sm:grid-cols-2"><Link href="/demo" className="flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-sm font-bold">Book a Demo <ArrowRight className="h-4 w-4" /></Link><a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-4 py-3 text-sm font-bold"><MessageCircle className="h-4 w-4" /> Discuss Your Farm</a></div></div>
        </> : null}
      </div>
    </div>
  );
}
