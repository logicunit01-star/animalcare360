import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CattlePro Complete Product Guide & Features | AnimalCare360',
  description: 'Read the complete product guide for CattlePro: the multi-farm livestock operations platform in Pakistan. Detailed records across animals, inventory, finances, and Palai partnering.',
  alternates: {
    canonical: '/cattlepro',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
