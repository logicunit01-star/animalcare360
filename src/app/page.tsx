import Image from 'next/image';
import Link from 'next/link';
import {
  Activity, ArrowRight, BarChart3, Calculator, Check, HeartPulse,
  Landmark, MapPinned, Package, Scale, ShoppingCart, Wheat,
} from 'lucide-react';
import CTA from '@/components/CTA';

const workflow = [
  ['Purchase', 'Record source, purchase weight, price, and ownership.'],
  ['Feed', 'Capture rations, consumption, purchases, and feed cost.'],
  ['Weight', 'Monitor weigh-ins, gain, ADG, and performance trends.'],
  ['Health', 'Keep treatment, vaccination, medicine, and history records.'],
  ['Cost', 'Bring direct and allocated operating costs together.'],
  ['Sale', 'Record sale weight, buyer, price, payments, and settlement.'],
  ['Profit', 'Review animal, batch, farm, and partner-level results.'],
];

const capabilities = [
  { icon: Landmark, title: 'Animal costing', text: 'Follow purchase cost, feed, medicine, and other recorded expenses at the level your operation can measure.' },
  { icon: Wheat, title: 'Feed management', text: 'Connect feed purchases, stock, consumption, and cost to pens, batches, or animals.' },
  { icon: Scale, title: 'Weight & performance', text: 'Track weigh-ins, total gain, average daily gain, and animals that need attention.' },
  { icon: HeartPulse, title: 'Health records', text: 'Keep vaccinations, treatments, medicine use, and animal histories available to the team.' },
  { icon: Package, title: 'Inventory control', text: 'See feed, medicine, stores, purchases, consumption, and remaining stock.' },
  { icon: BarChart3, title: 'Profitability', text: 'Compare recorded cost, expected sale value, realized revenue, margin, and ROI.' },
  { icon: MapPinned, title: 'Multi-farm control', text: 'Work across farms and sheds while preserving location-level visibility.' },
  { icon: Activity, title: 'Partners & Palai', text: 'Track ownership, allocations, expenses, settlements, and profit sharing where this model applies.' },
];

const faq = [
  ['Who is AnimalCare360 built for?', 'The primary cattle workflow is designed for commercial fattening, beef finishing, feedlot, trading, and multi-farm operations that need better control over animal economics.'],
  ['Can it calculate the exact cost of one animal?', 'AnimalCare360 can combine animal-level records with batch, pen, or farm costs. Accuracy depends on how precisely your operation records and allocates shared feed, labour, and overhead.'],
  ['Does it replace veterinary or financial advice?', 'No. It organizes operational records and planning calculations. Health, tax, legal, and investment decisions still require qualified professional judgment.'],
  ['Can I keep using the other AnimalCare360 products?', 'Yes. Feed retail, animal trading, veterinary, pet hospital, dairy, goat, and sheep workflows remain part of the wider AnimalCare360 portfolio.'],
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AnimalCare360', applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Android',
        description: 'Cattle fattening management software for animal costing, feed, weight, health, inventory, sales, and profitability.',
        url: 'https://www.animalcare360.com', featureList: ['Animal costing', 'Feed management', 'Weight tracking', 'Health records', 'Inventory', 'Profitability reporting', 'Multi-farm management'],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      }) }} />

      <section className="border-b border-brand-border bg-white">
        <div className="section-container grid min-h-[560px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-brand-primary">Cattle fattening management software</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">Know the cost, weight performance and profit of every animal.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">Track cattle from purchase to sale, including feed, weight gain, health, expenses, inventory, ownership, and profitability, in one operational system.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cattle-fattening-profit-calculator" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"><Calculator className="h-5 w-5" /> Calculate Your Cattle Profit</Link>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-border px-7 py-3.5 font-bold text-brand-navy hover:border-brand-navy">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </div>
            <div className="mt-7 hidden flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted sm:flex">
              {['Web and Android access', 'Multi-farm visibility', 'Global currencies and workflows'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-primary" />{item}</span>)}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-brand-border bg-white shadow-card">
              <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
                <div><p className="text-xs font-bold uppercase text-brand-muted">Animal economics</p><p className="mt-1 font-bold text-brand-navy">Animal C-1047</p></div>
                <span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-800">ILLUSTRATIVE DATA</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-brand-border sm:grid-cols-3">
                {[['Current weight', '380 kg'], ['ADG', '1.18 kg'], ['Days on farm', '165'], ['Recorded cost', '$810'], ['Expected value', '$945'], ['Expected margin', '$135']].map(([label, value]) => (
                  <div key={label} className="p-5"><p className="text-xs text-brand-muted">{label}</p><p className="mt-2 text-xl font-bold text-brand-navy">{value}</p></div>
                ))}
              </div>
              <div className="bg-brand-navy p-5 text-white"><p className="text-xs text-slate-300">One operating view</p><p className="mt-1 font-bold">Purchase → Feed → Weight → Health → Cost → Sale → Profit</p></div>
            </div>
            <p className="mt-3 text-xs leading-5 text-brand-muted">Example values show the decision structure, not a customer result or financial guarantee.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-background">
        <div className="section-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-brand-primary">The economic problem</p>
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Purchase price and sale price are not the whole story.</h2>
            <p className="mt-5 text-base leading-7 text-brand-muted">Margins can disappear through untracked feed, medicine, labour, mortality, slow weight gain, and stock leakage. When those records live in registers, spreadsheets, and memory, underperforming animals are hard to see early.</p>
          </div>
          <div className="border-l-4 border-brand-primary bg-white p-7">
            <p className="text-2xl font-bold leading-9 text-brand-navy">If you do not know what an animal has cost, you cannot confidently know what it is worth.</p>
            <p className="mt-4 text-sm leading-6 text-brand-muted">AnimalCare360 turns daily operational records into a traceable view of cost and performance, while showing which figures are measured and which depend on allocation rules.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase text-brand-primary">From purchase to profit</p><h2 className="text-3xl font-bold text-brand-navy md:text-4xl">A workflow built around how cattle value changes</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-7">
            {workflow.map(([title, text], index) => <div key={title} className="bg-white p-5"><span className="text-xs font-bold text-brand-primary">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-4 font-bold text-brand-navy">{title}</h3><p className="mt-2 text-xs leading-5 text-brand-muted">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-background">
        <div className="section-container">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase text-brand-primary">Operational control</p><h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Manage outcomes, not just modules</h2><p className="mt-4 leading-7 text-brand-muted">Each capability contributes to the same commercial question: what is this animal or group costing, how is it performing, and what action should happen next?</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-lg border border-brand-border bg-white p-6"><Icon className="h-6 w-6 text-brand-primary" /><h3 className="mt-5 font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-brand-primary">Free planning tool</p>
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Estimate profit before you commit the capital.</h2>
            <p className="mt-5 leading-7 text-brand-muted">Model cattle count, purchase weight and price, daily feed, days on feed, expected gain, medicine, labour, other operating cost, mortality, and sale price. See expected investment, margin, ROI, cost per unit gained, and break-even sale price.</p>
            <Link href="/cattle-fattening-profit-calculator" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-primary">Open the cattle profit calculator <ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-navy p-7 text-white">
            <div className="grid grid-cols-2 gap-4">
              {[['Expected final weight', '412 kg'], ['Total feed cost', '$18,900'], ['Break-even price', '$3.12/kg'], ['Expected ROI', '14.8%']].map(([label, value]) => <div key={label} className="rounded-lg border border-slate-700 p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 text-xl font-bold">{value}</p></div>)}
            </div>
            <p className="mt-4 text-xs text-slate-400">Illustrative calculation only. Actual outcomes depend on input quality, market conditions, mortality, and operating performance.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-background">
        <div className="section-container">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase text-brand-primary">Real product views</p><h2 className="text-3xl font-bold text-brand-navy md:text-4xl">The records behind the decision</h2><p className="mt-4 text-brand-muted">Product screens from AnimalCare360 show how financial, procurement, and partner workflows connect with cattle operations.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[['/dashboard-finance.png', 'Finance and operating ledgers'], ['/dashboard-procurement.png', 'Purchases and inventory movement'], ['/dashboard-palai.png', 'Ownership and partner settlement']].map(([src, label]) => <figure key={src} className="overflow-hidden rounded-lg border border-brand-border bg-white"><div className="relative aspect-[16/10]"><Image src={src} alt={`${label} screen in AnimalCare360`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" /></div><figcaption className="border-t border-brand-border p-4 text-sm font-bold text-brand-navy">{label}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div><p className="mb-3 text-xs font-bold uppercase text-brand-primary">Broader AnimalCare360 portfolio</p><h2 className="text-3xl font-bold text-brand-navy">One focused entry point. Four operating products.</h2><p className="mt-4 max-w-2xl leading-7 text-brand-muted">CattlePro is the primary commercial focus. Feed retail, animal trading, and veterinary or pet hospital systems remain available for businesses that need those specialized workflows.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{[[ShoppingCart, 'Feed retail', '/solutions/feed-retail'], [Landmark, 'Animal trading', '/solutions/animal-trading'], [HeartPulse, 'Veterinary & pet hospital', '/solutions/pet-hospital'], [Activity, 'All solutions', '/solutions']].map(([Icon, label, href]) => { const ProductIcon = Icon as typeof Activity; return <Link key={label as string} href={href as string} className="flex items-center gap-3 rounded-lg border border-brand-border p-4 font-bold text-brand-navy hover:border-brand-primary"><ProductIcon className="h-5 w-5 text-brand-primary" />{label as string}</Link>; })}</div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-background">
        <div className="section-container max-w-4xl"><h2 className="text-3xl font-bold text-brand-navy">Questions commercial cattle operators ask</h2><div className="mt-8 divide-y divide-brand-border border-y border-brand-border">{faq.map(([q, a]) => <div key={q} className="py-6"><h3 className="font-bold text-brand-navy">{q}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{a}</p></div>)}</div></div>
      </section>

      <CTA />
    </div>
  );
}
