import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.animalcare360.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/solutions',
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
