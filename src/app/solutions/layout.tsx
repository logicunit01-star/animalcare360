import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Care Software Solutions | AnimalCare360',
  description: 'Explore cloud ERP solutions for cattle management, dairy farm records, wanda retail shops, and veterinary clinics.',
  alternates: {
    canonical: '/solutions',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
