import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Pricing | Cattle, Feed & Veterinary Software',
  description: 'Review current monthly starting prices for cattle and farm management, feed retail, and veterinary or pet pharmacy workflows.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
