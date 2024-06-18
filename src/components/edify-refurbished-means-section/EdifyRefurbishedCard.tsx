import { EdifyRefurbishedCardProps } from '@/types';
import Image from 'next/image';

interface EdifyRefurbishedCard {
	cardData: EdifyRefurbishedCardProps;
}

export default function EdifyRefurbishedCard({
	cardData,
}: EdifyRefurbishedCard) {
	const { description, isImageFirst, src, title } = cardData;
	return (
		<div
			className={`w-full lg:w-[30.8%] flex flex-col ${
				isImageFirst ? 'md:flex-row-reverse' : 'md:flex-row'
			} lg:flex-col items-center gap-0 lg:gap-9 justify-between`}>
			<Image
				src={src}
				alt="edify-refurbished"
				width={305}
				height={250}
				className="md:w-[305px] md:h-[250px] w-[55%] h-[55%]"
			/>
			<div className="flex flex-col w-full  h-fit items-center md:items-start gap-1.5 md:gap-12 lg:gap-4">
				<h3 className="font-manuale font-bold text-lg md:text-3xl">{title}</h3>
				<div className="font-graphik text-sm md:text-base leading-6 md:leading-normal text-slate-500">
					{description}
				</div>
			</div>
		</div>
	);
}
