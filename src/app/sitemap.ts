import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://innotots.com/', lastModified: new Date() },
    { url: 'https://innotots.com/about', lastModified: new Date() },
    { url: 'https://innotots.com/programs', lastModified: new Date() },
    { url: 'https://innotots.com/gallery', lastModified: new Date() },
    { url: 'https://innotots.com/admissions-contact', lastModified: new Date() },
  ];
}
