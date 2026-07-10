import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CattlePro Detailed Feature Set & Catalog | AnimalCare360',
  description: 'Read the full capability catalog of CattlePro: 16 modules covering authentication, livestock profiles, health, breeding, operations feed, financials, and Gemini advisor.',
  alternates: {
    canonical: '/solutions/cattlepro/features',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
