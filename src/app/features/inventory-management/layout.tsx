import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed & Medicine Inventory Management Software | AnimalCare360',
  description: 'Feed inventory software for farms, wanda shops, and veterinary pharmacies. Track medicine stock, batch numbers, expiry, low-stock alerts, and warehouses.',
  alternates: {
    canonical: '/features/inventory-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
