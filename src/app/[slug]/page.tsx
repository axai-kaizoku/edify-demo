import SeoMain from './_components/SeoMain';
import { fetchPageWithSlug } from '@/server/actions';
import { Metadata } from 'next';
import { headers } from 'next/headers';

interface SeoPageProps {
	params: { slug: string };
}

export async function generateMetadata({
	params,
}: SeoPageProps): Promise<Metadata> {
	const data = await fetchPageWithSlug(params.slug);
	return {
		title: data.meta_title,
		description: data.meta_description,
	};
}

export default async function SeoPage({ params }: SeoPageProps) {
	const head = headers();
	const data = await fetchPageWithSlug(params.slug);
	return (
		<>
			<SeoMain data={data} />
		</>
	);
}
