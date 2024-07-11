'use client';
import BestSellerCard from '@/components/best-sellers-section/BestSellerCard';
import CustomHeading from '@/components/common/CustomHeading';
import { Product } from '@/types';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import CustomButtom from '@/components/common/CustomButton';

export default function BestSellers() {
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
				throw new Error('Error fetching data:', error);
			});
	}, []);

	return (
		<>
			<div className="flex justify-between items-center pt-10">
				<CustomHeading heading="Best Seller" />
				<div className="hidden lg:block">
					<CustomButtom
						title="VIEW MORE"
						href="https://shop.edify.club/collections/all"
					/>
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
					}}>
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
		</>
	);
}
