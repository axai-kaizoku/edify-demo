import Image from 'next/image';
import { BestSellerCardProps } from '@/types';
import RatingStarComp from '@/components/best-sellers-section/RatingStarComp';

export default function BestSellerCard({
	src,
	title,
	price,
	rating,
	reviews,
}: BestSellerCardProps) {
	return (
		<div className="w-[250px] flex flex-col gap-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden bg-white">
			<div className="flex justify-center items-center bg-gray-100 p-2">
				<Image
					src={src}
					alt={title}
					className="h-[100px] md:h-[150px] w-36 md:w-52 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
					width={668}
					height={350}
				/>
			</div>
			<div className="flex flex-col p-4">
				<h3 className="text-sm sm:text-lg font-semibold text-gray-800">
					{title}
				</h3>
				<div className="flex flex-row justify-between items-center mt-2">
					<p className="text-sm sm:text-md text-gray-700 font-bold">₹{price}</p>
					<div className="flex items-center mt-1 lg:mt-0 gap-1">
						<RatingStarComp rating={rating} />
						<p className="text-xs text-gray-600">({reviews})</p>
					</div>
				</div>
			</div>
		</div>
	);
}
