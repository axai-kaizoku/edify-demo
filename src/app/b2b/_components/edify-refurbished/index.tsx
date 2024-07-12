import { EdifyRefurbishedInfo } from '@/constants';
import EdifyRefurbishedCard from './EdifyRefurbishedCard';

function EdifyRefurbished() {
	return (
		<>
			<div className="flex flex-col md:gap-14 lg:gap-20 pt-10 gap-8">
				<div className="flex justify-between w-full">
					<h2 className="text-2xl sm:text-4xl text-black font-manuale font-bold ">
						What it means to be Edify Refurbished?
					</h2>
				</div>
				<div className="flex justify-between w-full flex-col gap-6 md:gap-14 lg:gap-40 lg:flex-row">
					{EdifyRefurbishedInfo.map((card, i) => (
						<EdifyRefurbishedCard
							cardData={card}
							key={i}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default EdifyRefurbished;
