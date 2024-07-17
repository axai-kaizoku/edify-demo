/* eslint-disable @next/next/no-img-element */
import { EdifyRefurbishedCardProps } from '@/types';

interface EdifyRefurbishedCard {
	cardData: EdifyRefurbishedCardProps;
}

export default function EdifyRefurbishedCard({
	cardData,
}: EdifyRefurbishedCard) {
	const { description, isImageFirst, src, title } = cardData;
	return (
		<div
			className={`w-full lg:w-[30%] h-full flex ${
				isImageFirst ? 'flex-row' : 'flex-row-reverse'
			} lg:flex-col items-center gap-4 lg:gap-9 justify-between`}>
			<img
				src={src}
				alt="edify-refurbished"
				className="lg:w-[305px] lg:h-[250px] sm:w-[36%] sm:h-[36%] w-[43%] h-[43%] object-contain"
				loading="lazy"
			/>
			<div className="flex flex-col   md:w-[92%] p-2 gap-1 sm:gap-6 lg:gap-4">
				<h3 className="font-manuale font-semibold text-[0.9rem] md:text-[1.6rem] w-full">
					{title}
				</h3>
				<div className="font-graphik text-[0.7rem] sm:text-base lg:text-[0.95rem] leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-normal text-slate-600">
					{description}
				</div>
			</div>
		</div>
	);
}
