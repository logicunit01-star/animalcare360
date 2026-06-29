import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed & Medicine Inventory Management Software | AnimalCare360',
  description: 'Streamline animal feed and veterinary medicine inventory control. Track batch numbers, expiry alerts, low-stock thresholds, and multi-warehouse transfers.',
  alternates: {
    canonical: '/features/inventory-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
