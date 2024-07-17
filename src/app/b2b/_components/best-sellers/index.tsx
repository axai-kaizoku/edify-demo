import BestSellersMain from '@/components/best-sellers-section/BestSellersMain';
import { fetchBestSellers } from '@/server/actions';

export default async function BestSellersSection() {
	const products = await fetchBestSellers();
	return <BestSellersMain products={products} />;
}
