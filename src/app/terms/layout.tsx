import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AnimalCare360',
  description: 'Read the AnimalCare360 terms for using the cloud ERP and mobile app across livestock, feed retail, animal trading, and clinic workflows.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
