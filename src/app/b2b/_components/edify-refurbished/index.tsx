import { EdifyRefurbishedInfo } from '@/constants';
import EdifyRefurbishedCard from './EdifyRefurbishedCard';

function EdifyRefurbished() {
	return (
		<>
			<div className="flex flex-col md:gap-14 lg:gap-20 sm:pt-10 max-sm:pb-10 gap-8">
				<div className="flex justify-between w-full">
					<h2 className="text-[1.1rem] sm:text-4xl text-black font-manuale font-semibold">
						What it means to be Edify Refurbished?
					</h2>
				</div>
				<div className="flex justify-between w-full flex-col gap-6 md:gap-14 lg:gap-40 lg:flex-row">
					{EdifyRefurbishedInfo.map((card, i) => (
						<EdifyRefurbishedCard cardData={card} key={i} />
					))}
				</div>
			</div>
		</>
	);
}

export default EdifyRefurbished;
