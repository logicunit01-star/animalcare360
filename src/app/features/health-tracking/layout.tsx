import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Health & Medical Record Tracking Software | AnimalCare360',
  description: 'Animal health tracking software for livestock checkups, treatment records, vaccination schedules, breeding events, due dates, and medicine usage.',
  alternates: {
    canonical: '/features/health-tracking',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
