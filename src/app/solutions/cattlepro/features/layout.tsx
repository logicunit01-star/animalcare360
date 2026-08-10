import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CattlePro Detailed Feature Set & Catalog | AnimalCare360',
  description: 'Review 16 CattlePro modules for livestock profiles, health, breeding, feed operations, finance, reporting, settings, and AI advisor workflows.',
  alternates: {
    canonical: '/solutions/cattlepro/features',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
