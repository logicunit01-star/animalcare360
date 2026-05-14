import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cattle & Dairy Farm Management Software Pakistan | AnimalCare360',
  description: 'Manage cattle records, milk yield, breeding, vaccination, weight gain, feed cost, fattening lots, partner ROI, and farm reports with AnimalCare360.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
