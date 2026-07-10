import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dairy Farm Management Software | AnimalCare360',
  description: 'Optimize dairy farm productivity. Track daily milk yield, fat content, breeding success, heat cycles, dry period calendars, and feed costs per cow.',
  alternates: {
    canonical: '/solutions/dairy-farm-software',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
