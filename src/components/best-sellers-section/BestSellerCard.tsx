/* eslint-disable @next/next/no-img-element */
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
		<div
			className=" flex flex-col rounded-lg duration-300 ease-in-out overflow-hidden bg-white h-[350px] sm:h-[392px]"
			role="article"
			aria-labelledby={`product-title-${title}`}
			aria-describedby={`product-brief-${title}`}>
			<div className="flex justify-center items-center h-1/2  w-full ">
				<img
					src={image}
					alt={alt_tag}
					className="h-[100px] md:h-[150px] w-36 md:w-52 object-contain "
					width={668}
					height={350}
					aria-hidden="true"
					loading="eager"
				/>
			</div>
			<hr className=" mx-4  border-t border-gray-200" />

			<div className="flex  flex-col p-4 ">
				<div
					id={`product-title-${title}`}
					className="text-xs md:text-sm  lg:text-lg text-gray-900 font-graphik font-semibold ">
					{title}
				</div>
				<div className="flex flex-row justify-between items-center mt-2 text-wrap">
					<div
						id={`product-brief-${title}`}
						className="text-[10px] sm:text-base text-gray-600 font-normal">
						{brief}
					</div>
				</div>
				<div className="flex items-center justify-start py-2 gap-3">
					<p
						aria-label={`Selling price ₹${selling_price}`}
						className="text-gray-900 font-graphik font-semibold text-sm md:text-lg lg:text-xl">
						₹{selling_price}
					</p>
					<p
						aria-label={`Original price ₹${mrp}`}
						className="font-graphik  text-sm sm:text-lg lg:text-xl font-normal leading-6 line-through text-gray-600">
						₹{mrp}
					</p>
				</div>
				<Link
					href={product_url}
					target="_blank"
					className="flex  bg-black  hover:opacity-70 duration-300 rounded-sm w-fit ">
					<button
						className="text-white font-graphik p-1 sm:p-2 text-xs sm:text-sm font-medium"
						aria-label={`Buy ${title} now for ₹${selling_price}`}>
						BUY NOW
					</button>
				</Link>
			</div>
		</div>
	);
}
