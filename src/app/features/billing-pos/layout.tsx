import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FBR Invoicing & Retail POS Software | AnimalCare360',
  description: 'Run animal feed retail stores or pet clinics with FBR-compliant billing POS. Manage invoices, customer credit limits, supplier payables, and ledgers.',
  alternates: {
    canonical: '/features/billing-pos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
