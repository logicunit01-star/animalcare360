import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Health & Medical Record Tracking Software | AnimalCare360',
  description: 'Digitally record livestock checkups, vet treatment protocols, heat cycle calendars, breeding inseminations, and group vaccinations schedules.',
  alternates: {
    canonical: '/features/health-tracking',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
