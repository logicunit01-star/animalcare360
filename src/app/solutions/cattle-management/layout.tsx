import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle Farm & Dairy Management Software | AnimalCare360',
  description: 'Cattle management software to track breeding, milk production, vaccination schedules, weight gain, feed inventory, and farm profit.',
  alternates: {
    canonical: '/solutions/cattle-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
