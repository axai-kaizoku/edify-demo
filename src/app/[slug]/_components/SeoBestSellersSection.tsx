import { Product } from '@/types';
import CustomButton from '@/components/common/CustomButton';
import BestSellerCard from './BestSellerCard';
import Container from '@/components/common/Container';

interface SeoBestSellersSectionProps {
	products: Product[];
	firstTitle: string;
	lastTitle: string;
}

const SeoBestSellersSection: React.FC<SeoBestSellersSectionProps> = ({
	products,
	firstTitle,
	lastTitle,
}) => {
	return (
		<Container isBorder={false} className="py-5 lg:pt-12 lg:pb-4">
			<div className="flex justify-between items-center w-full pb-6 px-4 sm:px-0">
				<h1 className="text-[1.29rem] w-full text-center sm:text-left sm:text-4xl text-black font-manuale font-semibold">
					{firstTitle} {lastTitle}
				</h1>
				<CustomButton
					title="EXPLORE"
					href="https://shop.edify.club/collections/all"
					styles="sm:block hidden"
				/>
			</div>

			<div className="w-full">
				{products.length > 0 ? (
					<>
						<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[78px] md:pt-12 w-full px-4 sm:px-0">
							{products.map((product, index) => (
								<div
									key={`liet ${index}`}
									className="border shadow-md hover:shadow-lg duration-300 rounded-sm flex justify-center items-center">
									<BestSellerCard
										selling_price={product.selling_price}
										image={product.image}
										alt_tag={product.alt_tag}
										title={product.title}
										mrp={product.mrp}
										brief={product.brief}
										product_url={product.product_url}
									/>
								</div>
							))}
						</div>
						<div className="w-full flex justify-end px-6 pt-4">
							<CustomButton
								title="EXPLORE"
								href="https://shop.edify.club/collections/all"
								styles="block sm:hidden"
							/>
						</div>
					</>
				) : (
					<div className="flex flex-col items-center justify-center w-full px-4 sm:px-0 h-[50vh]">
						<h1 className="font-manuale font-black text-xl sm:text-4xl mb-4 text-center">
							New products are on the way!
						</h1>
						<p className="text-gray-600 text-lg sm:text-xl mb-8 text-center">
							{`We're working hard to bring you the latest and greatest laptops. Stay tuned!`}
						</p>
						{/* <img src="/images/coming_soon.svg" alt="Coming Soon" className="h-60 sm:h-80" /> */}
					</div>
				)}
			</div>
		</Container>
	);
};

export default SeoBestSellersSection;
