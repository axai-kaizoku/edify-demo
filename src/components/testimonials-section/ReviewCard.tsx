/* eslint-disable @next/next/no-img-element */
import { ReviewCardProps } from '@/types';

export default function ReviewCard({
	src,
	name,
	review,
	date,
}: ReviewCardProps) {
	return (
		<div className="w-full  py-4 sm:py-10 flex justify-center gap-4 lg:gap-12">
			<img
				src={src}
				alt="user-1"
				className="rounded-[50%] md:w-36 md:h-36 sm:w-24 sm:h-24 h-12 w-12 object-cover object-center "
			/>
			<div className="flex flex-col justify-start gap-1 md:gap-2 lg:gap-4 sm:justify-start w-3/4 sm:w-full">
				<h3 className="font-manuale font-semibold text-sm sm:text-2xl">
					{name}
				</h3>
				<p className="font-graphik font-light text-slate-500 max-sm:tracking-tighter max-sm:leading-tight text-xs sm:text-sm">
					{`"${review}"`}
				</p>
				<p className="font-light text-[0.5rem] sm:text-xs text-slate-800">
					{date}
				</p>
			</div>
		</div>
	);
}
