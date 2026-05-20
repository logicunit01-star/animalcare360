import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle & Dairy Farm Management Software Pakistan | AnimalCare360',
  description: 'Optimize your dairy and cattle farm with Pakistan\'s #1 livestock ERP. Track milk yield, breeding, animal health, vaccination schedules, feed costs, and fattening lots.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
