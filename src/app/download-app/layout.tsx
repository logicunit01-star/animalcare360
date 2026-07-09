import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download AnimalCare360 Mobile App for Android | AnimalCare360',
  description: 'Download the AnimalCare360 Android app (APK) to manage your cattle farm, feed shop inventory, and pet hospital on the go.',
  alternates: {
    canonical: '/download-app',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
