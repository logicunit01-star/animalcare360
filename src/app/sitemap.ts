import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blogArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.animalcare360.com';
  const routes = [
    '',
    '/cattle-fattening-software',
    '/cattle-fattening-profit-calculator',
    '/demo',
    '/customers',
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

  const routeEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/cattle-fattening') ? 0.9 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(`${article.date} UTC`).toISOString().slice(0, 10),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routeEntries, ...articleEntries];
}
