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
			className={`w-full flex justify-between ${
				isImageFirst ? 'flex-row-reverse' : 'flex-row'
			}`}>
			<div className="flex flex-col w-[53%] justify-center gap-10">
				<h3 className="font-manuale font-semibold text-2xl sm:text-4xl">
					{title}
				</h3>
				{description.map((desc, i) => (
					<div
						key={i}
						className="text-slate-500  text-lg sm:text-xl ">
						{desc}
					</div>
				))}
			</div>
			<div className="relative w-[480px] h-[480px]">
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
