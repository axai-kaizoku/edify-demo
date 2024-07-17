import { fetchBestSellers } from '@/server/actions';
import BestSellersMain from './BestSellersMain';
import Container from '../common/Container';

export default async function BestSellersSection() {
	const products = await fetchBestSellers();
	return (
		<Container isBorder={false} className="pt-3.5 pb-0 sm:pb-6">
			<BestSellersMain products={products} />
		</Container>
	);
}
