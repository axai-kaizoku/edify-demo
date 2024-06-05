import { AboutSectionProps } from '@/types';
import Image from 'next/image';

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
			<div className="flex flex-col w-full lg:w-[53%] justify-center ">
				<h3 className="font-manuale font-semibold text-2xl sm:text-4xl py-3 sm:py-5">
					{title}
				</h3>
				{description.map((desc, i) => (
					<div
						key={i}
						className="text-slate-500 text-base py-2 sm:py-4 sm:text-xl ">
						{desc}
					</div>
				))}
			</div>
			<div className="relative w-[280px] h-[280px]  sm:w-[480px] sm:h-[480px]">
				<Image
					src={src}
					alt={title}
					fill
					className="object-contain"
				/>
			</div>
		</div>
	);
}
