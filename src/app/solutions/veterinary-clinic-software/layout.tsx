import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary Clinic & Pet Hospital Software | AnimalCare360',
  description: 'Run your vet clinic or pet hospital in Pakistan. Manage patient EMRs, appointments scheduling, veterinary SOAP notes, pharmacy inventory, and billing.',
  alternates: {
    canonical: '/solutions/veterinary-clinic-software',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
