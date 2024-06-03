import Image from 'next/image';
import { BestSellerCardProps } from '@/types';
import RatingStarComp from './RatingStarComp';

export default function BestSellerCard({
	src,
	title,
	price,
	rating,
	reviews,
}: BestSellerCardProps) {
	return (
		<div className="w-72 h-80 p-2 flex flex-col gap-1 border rounded">
			<div className="relative">
				<Image
					width={240}
					height={240}
					src={src}
					alt="product-img"
				/>
				<div className="absolute top-0 right-0 flex flex-col gap-2 pr-6 pt-6 z-1">
					<Image
						width={32}
						height={32}
						src={'/assets/heart.svg'}
						alt="product-img"
					/>
					<Image
						width={32}
						height={32}
						src={'/assets/fill-eye.svg'}
						alt="product-img"
					/>
				</div>
			</div>
			<h3 className="text-xl font-graphik font-bold pt-4">{title}</h3>
			<div className="flex gap-2.5 items-center ">
				<p className="text-base font-graphik mt-1 font-bold flex items-center">
					₹{price}
				</p>
				<RatingStarComp rating={rating} />
				<p className="text-sm font-graphik font-normal">({reviews})</p>
			</div>
		</div>
	);
}
