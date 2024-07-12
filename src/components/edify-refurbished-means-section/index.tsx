import { EdifyRefurbishedCardInfo } from '@/constants';
import CustomButtom from '../common/CustomButton';
import EdifyRefurbishedCard from './EdifyRefurbishedCard';
import Container from '../common/Container';

export default function EdifyRefurbishedMeansSection() {
	return (
		<Container isBorder={false} className="gap-16 py-1 sm:py-6">
			<div className="flex justify-between w-full">
				<h2 className="text-2xl sm:text-4xl text-black font-manuale font-bold">
					What it means to be Edify Refurbished?
				</h2>
				<CustomButtom
					title="DISCOVER MORE"
					styles="lg:block hidden"
					href="https://shop.edify.club/collections/all"
				/>
			</div>
			<div className="flex justify-between w-full flex-col gap-6 lg:gap-0 lg:flex-row">
				{EdifyRefurbishedCardInfo.map((card, i) => (
					<EdifyRefurbishedCard cardData={card} key={i} />
				))}
			</div>
		</Container>
	);
}
