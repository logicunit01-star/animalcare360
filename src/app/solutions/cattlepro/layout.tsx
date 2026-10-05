import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CattlePro Operations, Cost & Profit Software | AnimalCare360',
  description: 'Explore CattlePro for cattle records, feed, weight, health, inventory, finance, profitability, multi-farm reporting, and partner workflows.',
  alternates: {
    canonical: '/solutions/cattlepro',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
