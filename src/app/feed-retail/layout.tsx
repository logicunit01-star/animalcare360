import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wanda & Feed Retail Software Pakistan | POS, Stock & FBR Invoices',
  description: 'Manage wanda, feed, pet food, pharmacy stock, customer credit, supplier payments, expiry, multi-warehouse inventory, and FBR invoices with AnimalCare360.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
