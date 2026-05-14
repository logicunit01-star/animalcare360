import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Solutions | Farm, Feed, Trading & Pet Hospital ERP',
  description: 'Explore AnimalCare360 modules for cattle farms, wanda and feed retailers, animal traders, and pet hospitals in Pakistan. Start with one module and scale your ERP.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
