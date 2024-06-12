import SeoMain from './_components/SeoMain';
import { headers } from 'next/headers';
import { fetchPageWithSlug } from '@/server/actions';

export default async function SeoPage() {
	// For slug
	const heads = headers();
	const pathname = heads.get('x-url') || ''; // http://localhost:3001/refurbished-laptops-ghaziabad
	const [, path] = pathname.split(/\/\/[^/]+/);
	// Extract the name part without the slash
	const name = path.substring(1);

	const data = await fetchPageWithSlug(name);

	return (
		<>
			<SeoMain data={data} />
		</>
	);
}
