import CustomHeading from '../common/CustomHeading';
import CustomCarousel from './CustomCarousel';

export default function TestiMonialsSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5  flex flex-col">
				<CustomHeading
					heading="What do our users say?"
					styles="py-6 sm:pt-12 sm:pb-8"
				/>

				<CustomCarousel />
			</div>
		</div>
	);
}
