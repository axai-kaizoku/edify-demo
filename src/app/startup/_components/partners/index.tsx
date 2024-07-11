import { EdifyRefurbishedInfo, EdifyTrustContent } from '@/constants';
import EdifyRefurbishedCard from './EdifyRefurbishedCard';

export default function Partners() {
	return (
		<div className="flex flex-col md:gap-14 lg:gap-20 pt-10 gap-10">
			<h2 className="text-2xl sm:text-4xl text-center text-black font-manuale font-bold ">
				Edify : Your Trusted Partner in Refurbished Technology
			</h2>
			<div className="flex justify-between w-full flex-col gap-8 md:gap-14 lg:gap-20 lg:flex-wrap lg:flex-row">
				{EdifyTrustContent.map((card, i) => (
					<EdifyRefurbishedCard cardData={card} key={i} />
				))}
			</div>
		</div>
	);
}
