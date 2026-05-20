import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livestock Business Resources Pakistan | AnimalCare360 Guides',
  description: 'Get free guides, templates, and best practices for running profitable dairy farms, feed retail shops, animal trading, and veterinary clinics in Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
