import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimalCare360 Solutions | Farm, Feed, Trading & Pet Hospital ERP',
  description: 'Explore AnimalCare360 ERP modules tailored for Pakistan\'s agriculture sector. Scalable software for cattle farms, feed retailers, livestock traders, and vet clinics.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
