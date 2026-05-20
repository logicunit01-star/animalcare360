import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Hospital Software Pakistan | Veterinary EMR, Pharmacy & Billing',
  description: 'All-in-one veterinary clinic and pet hospital management software in Pakistan. Manage patient EMR, vaccination logs, billing, pharmacy inventory, and automated WhatsApp alerts.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
