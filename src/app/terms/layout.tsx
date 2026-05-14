import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AnimalCare360',
  description: 'Terms of Service for AnimalCare360 software products in Pakistan. Read our terms regarding SaaS usage, data ownership, and liabilities.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
