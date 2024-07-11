// 'use client';

// //@ts-ignore
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import ReviewCard from './ReviewCard';
// import { reviewCardContent } from '@/constants';
// import { useEffect, useRef, useState } from 'react';

// export default function CustomCarousel() {
// 	const [isMobile, setIsMobile] = useState<boolean>(false);
// 	const splideRef = useRef<any>(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth <= 640);
// 		};
// 		handleResize();
// 		window.addEventListener('resize', handleResize);
// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	const handlePrev = () => {
// 		if (splideRef.current) {
// 			splideRef.current.go('<');
// 		}
// 	};

// 	const handleNext = () => {
// 		if (splideRef.current) {
// 			splideRef.current.go('>');
// 		}
// 	};
// 	return (
// 		<>
// 			<div className="relative">
// 				<Splide
// 					ref={splideRef}
// 					options={{
// 						type: 'loop',
// 						rewind: true,
// 						width: '100%',
// 						gap: '1.25rem',
// 						pagination: true,
// 						cover: false,
// 						start: 0,
// 						focus: 'center',
// 						omitEnd: true,
// 						autoplay: true,
// 						isNavigation: false,
// 						arrows: false,
// 						updateOnMove: true,
// 						perPage: 1,
// 					}}>
// 					{reviewCardContent.map((item, index) => (
// 						<SplideSlide key={`list ${index}`}>
// 							<div className="duration-300 rounded-sm flex sm:px-16">
// 								<ReviewCard
// 									src={item.src}
// 									name={item.name}
// 									review={item.review}
// 									date={item.date}
// 								/>
// 							</div>
// 						</SplideSlide>
// 					))}
// 				</Splide>

// 				{/* Custom Arrow Buttons */}
// 				{!isMobile && (
// 					<>
// 						<button
// 							className="absolute top-1/2 -left-12  -translate-y-1/2 hover:text-white  text-black p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
// 							onClick={handlePrev}>
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 								className="w-4 h-4">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth={2}
// 									d="M15 19l-7-7 7-7"
// 								/>
// 							</svg>
// 						</button>
// 						<button
// 							className="absolute top-1/2 -right-12  -translate-y-1/2 hover:text-white  text-black p-3 rounded-full hover:bg-black focus:outline-none transition-all duration-500 ease-in-out"
// 							onClick={handleNext}>
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 								className="w-4 h-4">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth={2}
// 									d="M9 5l7 7-7 7"
// 								/>
// 							</svg>
// 						</button>
// 					</>
// 				)}
// 			</div>
// 		</>
// 	);
// }

'use client';

import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ReviewCard from './ReviewCard';
import { reviewCardContent } from '@/constants';

export default function CustomCarousel() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const splideRef = useRef<any>(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
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
		<div className="relative">
			<Splide
				ref={splideRef}
				hasTrack={false}
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
				<SplideTrack>
					{reviewCardContent.map((item, index) => (
						<SplideSlide key={`list ${index}`}>
							<div className="duration-300 rounded-sm flex sm:px-16">
								<ReviewCard
									src={item.src}
									name={item.name}
									review={item.review}
									date={item.date}
								/>
							</div>
						</SplideSlide>
					))}
				</SplideTrack>

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
				{/* Dots Pagination */}
				<div className="splide__pagination splide__pagination--custom absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
					{reviewCardContent.map((_, index) => (
						<button
							key={index}
							className="splide__pagination__page w-2.5 h-2.5 bg-gray-300 rounded-full"></button>
					))}
				</div>
			</Splide>
		</div>
	);
}
