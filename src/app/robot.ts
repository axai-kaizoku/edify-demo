import { type MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: 'Googlebot',
				allow: ['/'],
				disallow: '/private/',
			},
			{
				userAgent: ['Applebot', 'Bingbot'],
				disallow: ['/'],
			},
		],
		sitemap: `${siteConfig.url}/sitemap.xml`,
	};
}
