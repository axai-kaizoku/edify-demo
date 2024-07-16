'use client';

//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ReviewCard from './ReviewCard';
import { reviewCardContent } from '@/constants';
import { useEffect, useRef, useState } from 'react';

export default function CustomCarousel() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const splideRef = useRef<any>(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 0);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
			<div className="relative">
				<Splide
					ref={splideRef}
					options={{
						type: 'loop',
						rewind: true,
						width: '100%',
						gap: '1.25rem',
						pagination: true,
						cover: false,
						start: 0,
						focus: 'center',
						omitEnd: true,
						autoplay: true,
						isNavigation: false,
						arrows: false,
						updateOnMove: true,
						perPage: 1,
					}}>
					{reviewCardContent.map((item, index) => (
						<SplideSlide key={`list ${index}`}>
							<div className="duration-300 rounded-sm flex  px-10 sm:px-16">
								<ReviewCard
									src={item.src}
									name={item.name}
									subText={item.subText}
									review={item.review}
									date={item.date}
								/>
							</div>
						</SplideSlide>
					))}
				</Splide>

				{/* Custom Arrow Buttons */}
				{!isMobile && (
					<>
						<button
							className="absolute top-1/2 -left-1 sm:-left-12 -translate-y-1/2 hover:text-white  text-black p-1 sm:p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
							onClick={handlePrev}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-3 h-3 sm:w-4 sm:h-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							className="absolute top-1/2 -right-1 sm:-right-12 -translate-y-1/2 hover:text-white  text-black p-1 sm:p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
							onClick={handleNext}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-3 h-3 sm:w-4 sm:h-4">
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
