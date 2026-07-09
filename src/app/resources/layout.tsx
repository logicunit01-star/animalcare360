import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livestock Farm & Veterinary Clinic Resources | AnimalCare360',
  description: 'Free resources, checklists, and templates for livestock record keeping, pet clinic operations, and wanda store management.',
  alternates: {
    canonical: '/resources',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
