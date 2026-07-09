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
    '/cattle-management',
    '/feed-retail',
    '/animal-trading',
    '/pet-hospital',
    '/cattlepro',
    '/cattlepro/features',
    '/solutions/dairy-farm-software',
    '/solutions/veterinary-clinic-software',
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
