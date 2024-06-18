import { EdifyRefurbishedCardInfo } from '@/constants';
import CustomButtom from '../common/CustomButton';
import EdifyRefurbishedCard from './EdifyRefurbishedCard';

export default function EdifyRefurbishedMeansSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5 flex flex-col gap-10 md:gap-14 lg:gap-20">
				<div className="flex justify-between w-full">
					<h2 className="text-xl sm:text-4xl text-black font-manuale font-bold">
						What it means to be Edify
						<br className="hidden lg:block" /> Refurbished?
					</h2>
					<CustomButtom title="DISCOVER MORE" styles="sm:block hidden" />
				</div>
				<div className="flex justify-between w-full flex-col gap-6 lg:gap-0 lg:flex-row">
					{EdifyRefurbishedCardInfo.map((card, i) => (
						<EdifyRefurbishedCard cardData={card} key={i} />
					))}
				</div>
			</div>
		</div>
	);
}
