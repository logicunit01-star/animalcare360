import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Hospital Software Pakistan | Veterinary EMR, Pharmacy & Billing',
  description: 'Run a veterinary clinic or pet hospital with patient EMR, appointments, surgery logs, lab records, pharmacy stock, medicine expiry, billing, and WhatsApp reminders.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
