import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle Fattening Management Software | AnimalCare360',
  description: 'Manage cattle purchases, feed, weight gain, health, inventory, costs, sales, and profit for commercial fattening, beef finishing, and feedlot operations.',
  alternates: { canonical: '/cattle-fattening-software' },
  openGraph: { title: 'Cattle Fattening Management Software', description: 'Know the cost, weight performance, and profit of every animal from purchase to sale.', url: '/cattle-fattening-software' },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
