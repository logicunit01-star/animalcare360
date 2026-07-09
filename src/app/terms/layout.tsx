import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AnimalCare360',
  description: 'Read the terms of service governing the use of the AnimalCare360 cloud ERP software on web and mobile.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
