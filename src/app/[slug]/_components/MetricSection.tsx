/* eslint-disable @next/next/no-img-element */
import CustomHeading from '@/components/common/CustomHeading';
import FeatureCard from './FeatureCard';
import Container from '@/components/common/Container';

const MetricsSection = () => {
	return (
		<>
			<Container isBorder={false}>
				<div className="pt-8 lg:pb-10 flex flex-col lg:flex-row justify-between gap-8 sm:gap-16 lg:gap-[5%]">
					<div className="flex flex-col w-full h-full items-center lg:items-start gap-8">
						<div className="text-slate-900 font-semibold text-2xl sm:text-4xl flex justify-start">
							<CustomHeading heading="What it means to be Edify Refurbished?" />
						</div>
						<img
							className="lg:h-[500px] lg:w-[700px] md:h-72 md:w-64 h-48 w-48 object-contain"
							src="/assets/seo/metrics.webp"
							alt="laptop-1"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col md:gap-8 h-fit lg:last:pt-[4rem] xl:last:pt-[5rem]">
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
			</Container>
		</>
	);
};

export default MetricsSection;
