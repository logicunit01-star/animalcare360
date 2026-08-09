import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blogArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.animalcare360.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/solutions',
    '/solutions/livestock-management-software',
    '/solutions/herd-management-software',
    '/solutions/dairy-farm-management-software',
    '/solutions/goat-farm-management-software',
    '/solutions/sheep-farm-management-software',
    '/solutions/livestock-record-keeping-software',
    '/features',
    '/pricing',
    '/resources',
    '/download-app',
    '/solutions/cattle-management',
    '/solutions/feed-retail',
    '/solutions/animal-trading',
    '/solutions/pet-hospital',
    '/solutions/cattlepro',
    '/solutions/cattlepro/features',
    '/features/inventory-management',
    '/features/health-tracking',
    '/features/billing-pos',
    '/blog',
    '/privacy',
    '/terms',
  ];

  return [
    ...routes,
    ...blogArticles.map((article) => `/blog/${article.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
