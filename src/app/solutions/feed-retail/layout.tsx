import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wanda & Feed Retail Software with POS | AnimalCare360',
  description: 'Streamline feed shop sales, stock inventory, customer credit, supplier records, and digital invoices with Wanda POS.',
  alternates: {
    canonical: '/solutions/feed-retail',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
