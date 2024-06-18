import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';

export default function BestSellerCard({
	selling_price,
	image,
	alt_tag,
	title,
	mrp,
	brief,
	product_url,
}: Product) {
	return (
		<div className="w-[250px] flex flex-col rounded-lg duration-300 ease-in-out overflow-hidden bg-white">
			<div className="flex justify-center items-center p-2 h-1/2 w-full pb-4">
				<Image
					src={image}
					alt={alt_tag}
					className="h-[100px] md:h-[150px] w-36 md:w-52 object-cover "
					width={668}
					height={350}
				/>
			</div>
			<hr className=" mx-4  border-t border-gray-200" />

			<div className="flex flex-col p-4">
				<h3 className="text-sm  lg:text-lg text-gray-900 font-graphik font-semibold leading-6">
					{title}
				</h3>
				<div className="flex flex-row justify-between items-center mt-2 text-wrap">
					<p className="text-sm sm:text-md text-gray-500 font-normal">
						{brief}
					</p>
				</div>
				<div className="flex items-center justify-start py-4 gap-3">
					<p className="text-gray-900 font-graphik font-semibold text-sm md:text-lg lg:text-xl">
						₹{selling_price}
					</p>
					<p className="font-graphik  text-sm sm:text-lg lg:text-xl font-normal leading-6 line-through text-gray-500">
						₹{mrp}
					</p>
				</div>
				<div className="flex justify-center items-center bg-black rounded-sm w-fit sm:px-4 px-2 sm:py-1 py-0.5">
					<Link
						href={product_url}
						target="_blank">
						<button className="text-white font-graphik leading-8 text-xs sm:text-sm font-medium">
							BUY NOW
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
