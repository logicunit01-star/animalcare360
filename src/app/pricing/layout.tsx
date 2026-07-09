import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flexible Pricing Plans for Animal Care ERP | AnimalCare360',
  description: 'View simple, modular pricing plans for CattlePro, Wanda POS, and Vet Clinic software. Choose the modules you need.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
