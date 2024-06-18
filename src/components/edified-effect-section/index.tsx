import CustomHeading from '../common/CustomHeading';
import ImageSliderComponent from './ImageSliderComponent';

export default function EdifiedEffectSection() {
	return (
		<>
			<div className="w-full flex justify-center items-center py-4 sm:py-8 lg:py-10">
				<div className="w-[87%] sm:w-4/5 flex flex-col gap-2 sm:gap-4 md:gap-14">
					<CustomHeading heading="The Edified Effect" />
					<ImageSliderComponent />
					<div className="flex justify-around">
						<div className="w-40 h-36 bg-slate-400"></div>
						<div className="w-40 h-36 bg-slate-400"></div>
						<div className="w-40 h-36 bg-slate-400"></div>
					</div>
				</div>
			</div>
		</>
	);
}
