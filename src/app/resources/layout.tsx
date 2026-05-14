import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livestock Business Resources Pakistan | AnimalCare360 Guides',
  description: 'Practical guides for dairy farms, cattle records, wanda shops, animal trading, FBR invoices, veterinary clinics, inventory, and livestock ERP in Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
