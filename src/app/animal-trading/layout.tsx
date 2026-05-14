import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Trading Software Pakistan | Sale, Purchase & Commission Records',
  description: 'Track animal sale and purchase, mandi deals, broker commission, buyer/seller ledgers, transport costs, payments, and profit per animal with AnimalCare360.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
