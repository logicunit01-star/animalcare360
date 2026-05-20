import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wanda & Feed Retail Software Pakistan | POS, Stock & FBR Invoices',
  description: 'Modern POS and inventory ERP for wanda and feed retailers in Pakistan. Simplify multi-warehouse stock tracking, customer credit (khata), pharmacy expiry dates, and FBR invoices.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
