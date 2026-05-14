import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AnimalCare360',
  description: 'Privacy Policy for AnimalCare360. Learn how we protect your farm, livestock, trading, and retail data in Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
