'use server';
import { FooterCategory, Product, SEOPageData } from '@/types';
import axios from 'axios';

export async function fetchPageWithSlug(slug: string): Promise<SEOPageData> {
	const url = `https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=${slug}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error: any) {
		throw new Error(`❌ Error fetching page with slug ${slug}.`, error);
	}
}

export async function fetchFooterLinks(
	slug: string = 'refurbished-laptops-delhi',
): Promise<FooterCategory[]> {
	const url = `https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=${slug}`;
	try {
		const response = await axios.get(url);
		return response.data.footerByCategory;
	} catch (error: any) {
		throw new Error(
			`❌ Error fetching links for footer with slug ${slug}.`,
			error,
		);
	}
}

export async function fetchBestSellers(): Promise<Product[]> {
	const url =
		'https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=refurbished-laptops-delhi';
	try {
		const response = await axios.get(url);
		return response.data.products;
	} catch (error: any) {
		throw new Error(`❌ Error fetching products `, error);
	}
}
