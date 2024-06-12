import axios from 'axios';

export async function fetchPageWithSlug(slug: string) {
	const url = `https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=${slug}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error: any) {
		throw Error(`Error fetching page with slug ${slug}.`);
	}
}

export async function fetchFooterLinks(
	slug: string = 'refurbished-laptops-nashik',
) {
	const url = `https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=${slug}`;
	try {
		const response = await axios.get(url);
		return response.data.footerByCategory;
	} catch (error: any) {
		throw Error(`Error fetching links for footer with slug ${slug}.`);
	}
}
