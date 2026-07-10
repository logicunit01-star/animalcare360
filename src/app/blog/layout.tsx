import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Care & Livestock Business Blog | AnimalCare360',
  description: 'Read practical guides on feed inventory control, livestock record keeping, veterinary clinic EMR management, and retail store tips.',
  alternates: {
    canonical: '/blog',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
