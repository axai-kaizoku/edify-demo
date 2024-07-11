import SeoMain from './_components/SeoMain';
import { fetchPageWithSlug } from '@/server/actions';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { cache } from 'react';

interface SeoPageProps {
	params: { slug: string };
}

const fetchPage = cache(async (slug: string) => {
	const data = await fetchPageWithSlug(slug);
	return data;
});

export async function generateMetadata({
	params,
}: SeoPageProps): Promise<Metadata> {
	const data = await fetchPage(params.slug);
	return {
		title: data.meta_title,
		description: data.meta_description,
	};
}

export default async function SeoPage({ params }: SeoPageProps) {
	const head = headers();
	const data = await fetchPage(params.slug);
	return <SeoMain data={data} />;
}
