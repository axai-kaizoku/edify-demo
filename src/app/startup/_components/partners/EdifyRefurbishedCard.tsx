import { EdifyRefurbishedCardProps } from '@/types';
import Image from 'next/image';

interface EdifyRefurbishedCard {
	cardData: EdifyRefurbishedCardProps;
}

export default function EdifyRefurbishedCard({
	cardData,
}: EdifyRefurbishedCard) {
	const { description, src, title } = cardData;
	return (
		<div className="flex flex-row lg:flex-col w-full h-full lg:w-[340px] lg:h-[350px] lg:shadow-sm gap-5 lg:gap-8 lg:border lg:p-10">
			<Image
				src={src}
				alt="reburfished"
				width={60}
				height={60}
				className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
			/>
			<div className="w-full flex flex-col gap-0 lg:gap-5 -mt-2 lg:-mt-0">
				<h3 className="font-manuale font-bold text-xl leading-snug lg:leading-normal md:text-[1.6rem]">
					{title}
				</h3>
				<div className="font-graphik text-sm md:text-base leading-6 md:leading-relaxed text-slate-500 w-[90%]">
					{description}
				</div>
			</div>
		</div>
	);
}
