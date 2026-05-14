import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Features | Livestock ERP, FBR Billing, Inventory & EMR',
  description: 'See AnimalCare360 features for livestock records, feed inventory, FBR QR invoices, animal trading, veterinary EMR, pharmacy stock, milk tracking, and reporting.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
