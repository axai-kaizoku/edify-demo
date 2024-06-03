import CustomButtom from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';
import BestSellerCard from './BestSellerCard';

export default function BestSellersSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5  flex flex-col">
				<div className="flex justify-between items-center">
					<CustomHeading
						heading="Best Seller"
						styles="py-6"
					/>
					<CustomButtom title="EXPLORE" />
				</div>

				<div className="flex gap-12 pt-10">
					{Array.from({ length: 4 }).map((_, i) => (
						<BestSellerCard
							key={i}
							title="Lorem Ipsum"
							src="/assets/laptop-2.png"
							price={100}
							rating={4.2}
							reviews={34}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
