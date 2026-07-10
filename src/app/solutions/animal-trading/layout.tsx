import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Trading & Livestock Deal Ledger | AnimalCare360',
  description: 'Manage livestock trading deals, purchase and sales logs, commission structures, partner shares, and transportation expenses.',
  alternates: {
    canonical: '/solutions/animal-trading',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
