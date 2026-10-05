import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle Fattening Profit Calculator | AnimalCare360',
  description: 'Estimate cattle fattening investment, feed cost, final weight, profit, ROI, cost per unit gained, and break-even selling price.',
  alternates: { canonical: '/cattle-fattening-profit-calculator' },
  openGraph: { title: 'Free Cattle Fattening Profit Calculator', description: 'Model purchase, feed, weight gain, operating cost, mortality, sale value, profit, and break-even price.', url: '/cattle-fattening-profit-calculator' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
