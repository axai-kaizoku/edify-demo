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
		<div className="w-72 flex flex-col gap-1 rounded">
			<div className="relative">
				<div>
					<img
						src={src}
						alt="product-img"
						className="w-full h-full object-cover  rounded"
					/>
				</div>
				<div className="absolute top-0 right-0 flex flex-col gap-2 pr-6 pt-2 z-1">
					<img
						className="w-5 h-5 sm:w-8 sm:h-8"
						src={'/assets/heart.svg'}
						alt="heart-icon"
					/>
					<img
						className="w-5 h-5 sm:w-8 sm:h-8"
						src={'/assets/fill-eye.svg'}
						alt="eye-icon"
					/>
				</div>
			</div>
			<div className="pt-4 flex flex-col ">
				<h3 className="text-xs sm:text-lg flex  items-center font-graphik font-bold">
					{title}
				</h3>
				<div className="flex gap-2.5 justify-between items-center">
					<div>
						<p className="text-xs sm:text-sm text-slate-500 font-graphik font-bold">
							₹{price}
						</p>
					</div>
					<div className="flex items-center justify-center gap-2">
						<RatingStarComp rating={rating} />
						<p className="text-xs text-slate-600 font-graphik font-normal">
							({reviews})
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
