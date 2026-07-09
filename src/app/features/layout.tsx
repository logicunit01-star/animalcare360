import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All ERP Features for Farm, Retail & Clinic | AnimalCare360',
  description: 'View features including animal breeding records, milk logging, low-stock warnings, digital billing POS, and pet EMR.',
  alternates: {
    canonical: '/features',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
