/* eslint-disable @next/next/no-img-element */
import { ReviewCardProps } from '@/types';

export default function ReviewCard({
	src,
	name,
	review,
	date,
}: ReviewCardProps) {
	return (
		<div className=" w-full sm:w-[1024px] h-40 sm:h-72 py-4 sm:py-10 flex justify-center gap-4 lg:gap-16">
			<img
				src={src}
				alt="user-1"
				className="rounded-[50%] lg:w-48 lg:h-48 w-10 h-10 md:w-[70px] md:h-[70px] object-cover object-center "
			/>
			<div className="flex flex-col justify-start max-sm:gap-4 sm:justify-between w-3/4">
				<h3 className="font-manuale font-semibold text-base sm:text-2xl">
					{name}
				</h3>
				<p className="font-graphik font-light max-sm:tracking-tighter max-sm:leading-tight sm:text-base text-xs">
					{review}
				</p>
				<p className="font-light sm:text-base text-xs text-slate-800">{date}</p>
			</div>
		</div>
	);
}
