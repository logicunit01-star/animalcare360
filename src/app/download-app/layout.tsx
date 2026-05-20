import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download AnimalCare360 Android App | Farm & Livestock Management App',
  description: 'Download the AnimalCare360 Android app. Manage cattle records, feed distribution, milk logs, and doctor appointments offline or on the field.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
