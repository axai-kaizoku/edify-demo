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
			/>
			<div className="flex flex-col gap-2 sm:gap-6 lg:gap-4">
				<h3 className="font-manuale whitespace-nowrap font-bold text-lg md:text-[1.6rem] w-full">
					{title}
				</h3>
				<div className="font-graphik text-xs sm:text-base lg:text-[0.95rem] leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-normal text-slate-500">
					{description}
				</div>
			</div>
		</div>
	);
}
