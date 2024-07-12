/* eslint-disable @next/next/no-img-element */
import CustomHeading from '@/components/common/CustomHeading';
import FeatureCard from './FeatureCard';
import Container from '@/components/common/Container';

const MetricsSection = () => {
	return (
		<>
			<Container isBorder={false}>
				<div className="pt-8 pb-10 flex flex-col lg:flex-row justify-normal gap-8 sm:gap-16 xl:gap-12">
					<div className="flex flex-col  items-center lg:items-start gap-8">
						<div className="text-slate-900 font-semibold text-2xl sm:text-4xl flex justify-start">
							<CustomHeading heading="What it means to be Edify Refurbished?" />
						</div>
						<img
							className="lg:h-[400px] lg:w-[600px] md:h-72 md:w-64 h-48 w-48 object-contain"
							src="/assets/seo/metrics.webp"
							alt="laptop-1"
						/>
					</div>
					<div className="flex flex-col md:gap-8 lg:last:pt-[70px]">
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
