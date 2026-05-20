import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Features | Livestock ERP, FBR Billing, Inventory & EMR',
  description: 'Explore the full capabilities of AnimalCare360: livestock health records, POS billing, feed inventory, FBR compliance, financial reporting, and offline Android app support.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
