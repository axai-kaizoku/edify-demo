import CustomButton from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';
import FeatureCard from './FeatureCard';

const MetricsSection = () => {
	return (
		<>
			<div className="w-full flex border-b justify-center items-center">
				<div className="w-[87%]  sm:w-4/5  flex flex-col">
					<div className="py-16 flex flex-col lg:flex-row justify-between gap-8 sm:gap-16">
						<div className="flex lg:flex-col flex-row items-center sm:items-start gap-8">
							<div className="text-slate-900 font-semibold text-2xl sm:text-4xl whitespace-nowrap sm:w-[422px] text-wrap flex justify-start">
								<CustomHeading heading="What it means to be Edify Refurbished?" />
							</div>
							<div className="flex justify-center sm:justify-start">
								<CustomButton title="EXPLORE" />
							</div>
						</div>
						<div className="flex flex-col  md:gap-8">
							<FeatureCard
								logo="/assets/check-square.svg"
								title="50+ Quality Checks"
								description="Each laptop undergoes a thorough examination, scrutinized against over 50 quality checkpoints. Only those meeting our stringent standards earn the Edify badge."
							/>
							<FeatureCard
								logo="/assets/ArrowsCounterClockwise.svg"
								title="Rigorous Refurbishment"
								description="For those needing a little extra care, our team conducts rigorous refurbishment, ensuring every device functions at its peak, just like new."
							/>
							<FeatureCard
								logo="/assets/vector.svg"
								title="6 Months Of Warranty"
								description="Rest easy with our comprehensive 6-month warranty, providing peace of mind with every purchase."
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MetricsSection;
