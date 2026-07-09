import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle Farm & Dairy Management Software | AnimalCare360',
  description: 'Digitally track cattle breeding, milk production, vaccination schedules, weight gain (ADG), and feed inventory for cattle and dairy farms.',
  alternates: {
    canonical: '/cattle-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
