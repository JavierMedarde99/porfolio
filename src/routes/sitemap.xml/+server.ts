import { projects } from '$lib/data/projects';
import { SITE } from '$lib/utils/seo';

interface Entry {
	path: string;
	changefreq: 'weekly' | 'monthly';
	priority: string;
}

const STATIC_PAGES: Entry[] = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/about', changefreq: 'monthly', priority: '0.8' },
	{ path: '/projects', changefreq: 'weekly', priority: '0.9' },
	{ path: '/experience', changefreq: 'monthly', priority: '0.8' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.7' },
];

export async function GET(): Promise<Response> {
	const lastmod = new Date().toISOString().split('T')[0];
	const entries: Entry[] = [
		...STATIC_PAGES,
		...projects.map((project) => ({
			path: `/projects/${project.slug}`,
			changefreq: 'monthly' as const,
			priority: '0.6',
		})),
	];

	const urls = entries
		.map(
			(entry) => `  <url>
    <loc>${SITE.url}${entry.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600',
		},
	});
}
