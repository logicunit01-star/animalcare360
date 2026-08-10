import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AnimalCare360',
  description: 'Learn how AnimalCare360 protects, stores, and handles data for livestock farms, feed shops, animal traders, and veterinary clinics.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
