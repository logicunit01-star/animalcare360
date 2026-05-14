import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download AnimalCare360 Android App | Farm & Livestock Management App',
  description: 'Download the AnimalCare360 Android app for farm, cattle, milk, vaccination, feed, and field staff records. Built for livestock businesses in Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
