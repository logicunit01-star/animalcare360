import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CattlePro Complete Product Guide & Features | AnimalCare360',
  description: 'Explore CattlePro for multi-farm livestock operations, including animal records, inventory, finance, reports, and Palai partnering workflows.',
  alternates: {
    canonical: '/solutions/cattlepro',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
