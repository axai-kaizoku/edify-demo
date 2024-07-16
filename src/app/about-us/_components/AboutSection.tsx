/* eslint-disable @next/next/no-img-element */
import { AboutSectionProps } from '@/types';

export default function AboutSection({
	src,
	title,
	description,
	isImageFirst = false,
}: AboutSectionProps) {
	return (
		<div
			className={`w-full flex justify-center items-center lg:justify-between  ${
				isImageFirst
					? 'lg:flex-row-reverse flex-col-reverse'
					: 'lg:flex-row flex-col-reverse'
			}`}>
			<div className="flex flex-col w-full lg:w-[50%] justify-center ">
				<h3 className="font-manuale font-semibold text-lg  sm:text-4xl pt-3 pb-1.5 sm:py-5">
					{title}
				</h3>
				{description.map((desc, i) => (
					<div
						key={i}
						className="text-slate-500 text-xs py-2 sm:py-4 sm:text-lg ">
						{desc}
					</div>
				))}
			</div>
			<img
				src={src}
				alt={title}
				className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px] object-contain"
			/>
		</div>
	);
}
