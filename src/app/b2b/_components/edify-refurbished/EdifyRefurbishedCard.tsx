/* eslint-disable @next/next/no-img-element */
import { EdifyRefurbishedCardProps } from '@/types';

interface EdifyRefurbishedCard {
	cardData: EdifyRefurbishedCardProps;
}

export default function EdifyRefurbishedCard({
	cardData,
}: EdifyRefurbishedCard) {
	const { description, src, title } = cardData;
	return (
		<div className="flex flex-row lg:flex-col w-full h-full gap-5 lg:gap-8">
			<img
				src={src}
				alt="reburfished"
				className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
				loading="lazy"
			/>
			<div className="w-full flex flex-col gap-1 lg:gap-5 -mt-2 lg:-mt-0">
				<h3 className="font-manuale font-semibold text-[0.9rem] sm:text-xl leading-snug lg:leading-normal md:text-[1.6rem]">
					{title}
				</h3>
				<div className="font-graphik text-[0.7rem] md:text-base leading-5 md:leading-relaxed text-slate-500 w-[90%]">
					{description}
				</div>
			</div>
		</div>
	);
}
