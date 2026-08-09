import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Care Software Solutions | AnimalCare360',
  description: 'Explore animal care software solutions for cattle farms, dairy records, goat and sheep farms, wanda retail shops, traders, and veterinary clinics.',
  alternates: {
    canonical: '/solutions',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
