import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Pricing Pakistan | Farm, Feed & Pet Hospital ERP Plans',
  description: 'Transparent pricing plans for livestock farms, wanda feed retailers, trading agents, and pet clinics in Pakistan. Affordable packages scaled to your business size.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
