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
		<div className="rounded flex flex-row lg:flex-col w-full h-full lg:w-[300px] xl:w-[340px] xl:h-[350px] lg:hover:shadow-xl duration-300 lg:shadow-none gap-5 lg:gap-8 lg:border lg:p-5 xl:p-5">
			<img
				src={src}
				alt="reburfished"
				className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
			/>
			<div className="w-full flex flex-col gap-0 lg:gap-5 -mt-2 lg:-mt-0">
				<h3 className="font-graphik font-semibold text-[0.9rem] sm:text-xl  leading-snug lg:leading-[33px] md:text-[1.6rem] xl:text-[1.3rem]">
					{title}
				</h3>
				<div className="font-graphik text-[0.7rem] md:text-base xl:text-[1.1rem] leading-5 md:leading-relaxed text-slate-500 w-[90%]">
					{description}
				</div>
			</div>
		</div>
	);
}
