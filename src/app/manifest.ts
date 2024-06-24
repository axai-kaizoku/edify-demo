import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Buy Top-Quality Refurbished Laptops in India | Edify.club',
		short_name: 'Edify',
		description:
			'Discover premium refurbished laptops at Edify.club. Shop top brands like HP, Apple, Dell, and Lenovo with a 6-month warranty. Quality checked and affordable.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/logo.png',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
