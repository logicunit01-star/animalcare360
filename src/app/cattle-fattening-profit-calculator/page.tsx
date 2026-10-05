import CattleProfitCalculator from '@/components/CattleProfitCalculator';

const faq = [
  ['How is expected final weight calculated?', 'Starting weight plus expected average daily gain multiplied by the number of fattening days.'],
  ['What is included in total investment?', 'Purchase cost, planned feed, medicine, labour, and other operating cost entered in the calculator.'],
  ['How is break-even selling price calculated?', 'Total planned investment divided by the estimated saleable live weight after the mortality assumption.'],
  ['Is this a guarantee of cattle profit?', 'No. It is a planning model. Actual gain, mortality, feed prices, selling prices, fees, and operating costs can differ.'],
];

export default function CalculatorPage() {
  return <div className="bg-brand-background">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Cattle Fattening Profit Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Any', url: 'https://www.animalcare360.com/cattle-fattening-profit-calculator', offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' }, description: 'A free planning calculator for cattle fattening cost, weight gain, sales value, profit, ROI, cost of gain, and break-even price.' }) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }) }} />
    <section className="border-b border-brand-border bg-white"><div className="section-container max-w-4xl text-center"><p className="text-xs font-bold uppercase text-brand-primary">Free planning tool</p><h1 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">Cattle Fattening Profit Calculator</h1><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-brand-muted">Estimate cost, final weight, sales value, profit, ROI, cost per unit gained, and break-even price before putting capital at risk.</p></div></section>
    <main className="section-container"><CattleProfitCalculator /></main>
    <section className="border-t border-brand-border bg-white"><div className="section-container max-w-4xl"><h2 className="text-3xl font-bold text-brand-navy">Calculator questions</h2><div className="mt-7 divide-y divide-brand-border border-y border-brand-border">{faq.map(([q, a]) => <div key={q} className="py-6"><h3 className="font-bold text-brand-navy">{q}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{a}</p></div>)}</div><p className="mt-6 text-xs leading-5 text-brand-muted">This calculator is for operational planning and education. It is not veterinary, tax, legal, or investment advice. Validate assumptions using current market data and qualified professional guidance.</p></div></section>
  </div>;
}
