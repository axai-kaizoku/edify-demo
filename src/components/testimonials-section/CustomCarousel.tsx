'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import ReviewCard from './ReviewCard';
import { reviewCardContent } from '@/constants';

export default function CustomCarousel() {
	const plugin = React.useRef(
		Autoplay({
			delay: 3500,
			stopOnInteraction: true,
			stopOnFocusIn: false,
			stopOnMouseEnter: false,
			stopOnLastSnap: false,
		}),
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="max-sm:p-8 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{reviewCardContent.map((item, i) => (
					<CarouselItem
						key={i}
						className="flex justify-center"
					>
						<ReviewCard
							src={item.src}
							name={item.name}
							review={item.review}
							date={item.date}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
