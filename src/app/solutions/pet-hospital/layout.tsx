import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Hospital ERP & Veterinary EMR Software | AnimalCare360',
  description: 'All-in-one veterinary clinic software. Manage pet patient EMR histories, vaccine alerts, SOAP records, doctor schedules, and pharmacy billing.',
  alternates: {
    canonical: '/solutions/pet-hospital',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
