import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://wa.me/923391119259',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/implementation',
        destination: '/#implementation',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://wa.me/923391119259',
        permanent: true,
      },
      {
        source: '/cattle-management',
        destination: '/solutions/cattle-management',
        permanent: true,
      },
      {
        source: '/feed-retail',
        destination: '/solutions/feed-retail',
        permanent: true,
      },
      {
        source: '/animal-trading',
        destination: '/solutions/animal-trading',
        permanent: true,
      },
      {
        source: '/pet-hospital',
        destination: '/solutions/pet-hospital',
        permanent: true,
      },
      {
        source: '/cattlepro',
        destination: '/solutions/cattlepro',
        permanent: true,
      },
      {
        source: '/cattlepro/features',
        destination: '/solutions/cattlepro/features',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
