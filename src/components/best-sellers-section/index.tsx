'use client';
import CustomButton from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';
import BestSellerCard from './BestSellerCard';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default function BestSellersSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5 flex flex-col">
				<div className="flex justify-between items-center">
					<CustomHeading
						heading="Best Seller"
						styles="py-6"
					/>
					<CustomButton title="EXPLORE" />
				</div>

				<div className="py-10">
					<Splide
						options={{
							type: 'slide',
							rewind: true,
							width: '100%',
							gap: '1.25rem',
							pagination: false,
							cover: false,
							start: 0,
							focus: 'center',
							autoplay: false,
							isNavigation: false,
							arrows: false,
							updateOnMove: true,
							perPage: 4,
							breakpoints: {
								640: {
									perPage: 1,
								},
								1024: {
									perPage: 2,
								},
								1280: {
									perPage: 4,
								},
							},
						}}
						hasSliderWrapper>
						{Array.from({ length: 4 }).map((_, i) => (
							<SplideSlide key={i}>
								<div className="w-72">
									<BestSellerCard
										title="Lorem Ipsum"
										src="/assets/laptop-2.png"
										price={100}
										rating={4.2}
										reviews={34}
									/>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</div>
	);
}
