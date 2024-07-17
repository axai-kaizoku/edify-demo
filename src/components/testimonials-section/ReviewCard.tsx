/* eslint-disable @next/next/no-img-element */
import { ReviewCardProps } from '@/types';

export default function ReviewCard({
	src,
	name,
	review,
	date,
	subText,
}: ReviewCardProps) {
	return (
		<div className="w-full object-contain   py-4 sm:py-10 flex justify-center  gap-4 lg:gap-12">
			<img
				src={src}
				alt="user-1"
				className="rounded-[50%] md:w-36 md:h-36 sm:w-24 sm:h-24 h-12 w-12 object-contain object-center "
				loading="lazy"
			/>
			<div className="flex flex-col justify-start gap-1 md:gap-2 lg:gap-4 sm:justify-start w-3/4 sm:w-full">
				<h3 className="font-manuale font-semibold text-[0.9rem] sm:text-2xl">
					{name}
				</h3>
				{subText && (
					<p className="font-graphik font-light text-gray-600 max-sm:tracking-tighter max-sm:leading-tight text-xs sm:text-sm">
						{`${subText}`}
					</p>
				)}
				<p className="font-graphik font-light text-gray-600 leading-4 text-[0.7rem] sm:text-sm">
					{`${review}`}
				</p>
				<p className="font-normal text-[0.6rem] sm:text-xs text-slate-800">
					{date}
				</p>
			</div>
		</div>
	);
}
