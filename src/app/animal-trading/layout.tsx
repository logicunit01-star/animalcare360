import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Trading Software Pakistan | Sale, Purchase & Commission Records',
  description: 'Complete ERP for animal trading and commission agents in Pakistan. Track purchase & sale deals, mandi commissions, buyer/seller ledgers, transport costs, and lot profitability.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
