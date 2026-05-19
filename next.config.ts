import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
