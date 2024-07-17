'use client';
import { useEffect, useState, useRef } from 'react';
import CustomButton from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';
import BestSellerCard from './BestSellerCard';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Product } from '@/types';
import { Skeleton } from '../ui/skeleton';
import useIsMobile from '@/hooks/useIsMobile';

export default function BestSellersMain({ products }: { products: Product[] }) {
	const splideRef = useRef<any>(null);
	const [loading, setLoading] = useState(true);
	const isMobile = useIsMobile();

	useEffect(() => {
		if (products.length > 0) {
			setLoading(false);
		}
	}, [products]);

	const handlePrev = () => {
		if (splideRef.current) {
			splideRef.current.go('<');
		}
	};

	const handleNext = () => {
		if (splideRef.current) {
			splideRef.current.go('>');
		}
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<CustomHeading heading="Best Sellers" styles="pl-2 py-0.5 sm:py-6" />
				<div className="hidden lg:block">
					<CustomButton
						title="VIEW MORE"
						href="https://shop.edify.club/collections/all"
					/>
				</div>
			</div>

			<div className="relative py-10">
				{loading ? (
					<div className="flex w-full justify-between">
						<div className="w-[45%] sm:w-[28%] lg:w-[23%] h-full lg:block block">
							<Skeleton className="w-full h-[392px] bg-slate-200" />
						</div>
						<div className="w-[45%] sm:w-[28%]  lg:w-[23%] h-full lg:block block">
							<Skeleton className="w-full h-[392px] bg-slate-200" />
						</div>
						<div className="w-[50%] sm:w-[28%] lg:w-[23%] h-full md:block hidden">
							<Skeleton className="w-full h-[392px] bg-slate-200" />
						</div>
						<div className="w-[50%] sm:w-[28%] lg:w-[23%] h-full lg:block hidden">
							<Skeleton className="w-full h-[392px] bg-slate-200" />
						</div>
					</div>
				) : (
					<Splide
						ref={splideRef}
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
							perMove: 2, // Move one slide at a time
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
								<div className="border shadow-md hover:shadow-lg duration-300 rounded-sm flex sm:w-fit">
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
				)}

				{/* Custom Arrow Buttons */}
				{!isMobile && (
					<>
						<button
							className="absolute top-1/2 -left-12 -translate-y-1/2 hover:text-white text-black p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
							onClick={handlePrev}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-4 h-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							className="absolute top-1/2 -right-12 -translate-y-1/2 hover:text-white text-black p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
							onClick={handleNext}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-4 h-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</>
				)}
			</div>
		</>
	);
}
