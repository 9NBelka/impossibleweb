import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const BASE_URL = 'https://impossibleweb.pro';
const langs = ['en', 'ru'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/services', '/projects', '/about-us', '/blog', '/privacy-policy'];

  const staticRoutes = langs.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
  );

  const projectRoutes = langs.flatMap((lang) =>
    projects.map((project) => ({
      url: `${BASE_URL}/${lang}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
