import CustomHeading from '@/components/common/CustomHeading';
import Image from 'next/image';
import FeatureCard from './FeatureCard';

const MetricsSection = () => {
	return (
		<>
			<div className="w-full flex border-b justify-center items-center">
				<div className="w-[87%]  sm:w-4/5  flex flex-col">
					<div className="lg:py-16 flex flex-col lg:flex-row justify-between gap-8 sm:gap-16">
						<div className="flex flex-col  items-center lg:items-start gap-8">
							<div className="text-slate-900 font-semibold text-2xl sm:text-4xl    flex justify-start">
								<CustomHeading heading="What it means to be Edify Refurbished?" />
							</div>
							<div className="flex justify-center items-center lg:-ml-20">
								<Image
									className="lg:h-[500px] lg:w-[700px] md:h-72 md:w-64 h-48 w-48 object-cover lg:object-contain"
									src="/assets/metrics.png"
									alt="laptop-1"
									width={505}
									height={475}
								/>
							</div>
						</div>
						<div className="flex flex-col  md:gap-8 lg:last:pt-[70px]">
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
