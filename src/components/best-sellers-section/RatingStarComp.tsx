import { RatingStarCompProps } from '@/types';
// import Image from 'next/image';

export default function RatingStarComp({ rating }: RatingStarCompProps) {
	const filledStars = Math.round(rating);
	const unfilledStars = 5 - filledStars;
	return (
		<div className="flex gap-0.5">
			{Array.from({ length: filledStars }).map((_, i) => (
				<img
					key={i}
					src="/assets/filled-star.svg"
					alt="filled-star"
					width={12}
					height={12}
				/>
			))}
			{Array.from({ length: unfilledStars }).map((_, i) => (
				<img
					key={i}
					src="/assets/unfilled-star.svg"
					alt="unfilled-star"
					width={12}
					height={12}
				/>
			))}
		</div>
	);
}
