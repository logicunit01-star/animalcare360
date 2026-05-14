import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Pricing Pakistan | Farm, Feed & Pet Hospital ERP Plans',
  description: 'See AnimalCare360 pricing for cattle farms, wanda shops, feed retailers, animal traders, and pet hospitals in Pakistan. Start small and scale by users, animals, and locations.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
