'use client';
import { useEffect, useState } from 'react';
import CustomButton from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';
import BestSellerCard from './BestSellerCard';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Product } from '@/types';
import axios from 'axios';

export default function BestSellersSection() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios
			.get(
				'https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=refurbished-laptops-nashik',
			)
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5 flex flex-col">
				<div className="flex justify-between items-center">
					<CustomHeading
						heading="Best Seller"
						styles="py-6"
					/>
					<div className="hidden lg:block">
						<CustomButton title="VIEW MORE" />
					</div>
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
									perPage: 2,
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
						{products.map((product, index) => (
							<SplideSlide key={`list ${index}`}>
								<div className="border shadow-md hover:shadow-lg duration-300 rounded-sm flex sm:w-fit sm:px-4">
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
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</div>
	);
}
