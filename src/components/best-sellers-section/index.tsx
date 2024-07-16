import { fetchBestSellers } from '@/server/actions';
import BestSellersMain from './BestSellersMain';

export default async function BestSellersSection() {
	const products = await fetchBestSellers();
	return <BestSellersMain products={products} />;
}
