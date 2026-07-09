import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AnimalCare360',
  description: 'Learn about how AnimalCare360 protects, stores, and handles your livestock farm, shop, and hospital data.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
