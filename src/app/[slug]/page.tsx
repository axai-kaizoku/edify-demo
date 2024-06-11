import CustomHeading from '@/components/common/CustomHeading';
import CustomForm from './_components/CustomForm';
import MetricsSection from './_components/MetricComponent';
import CustomButtom from '@/components/common/CustomButton';
import BestSellerCard from './_components/BestSellerCard';

export default function SeoPage() {
	return (
		<>
			<div className="w-full flex flex-col justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-20 items-center">
				{/* First Section */}

				<div className="flex bg-[url('/assets/seo-bg.png')] bg-no-repeat border-b object-center object-cover h-fit lg:h-[95vh] justify-center items-start pt-10 lg:pt-32 w-full">
					<div className="flex w-[87%] sm:w-4/5 flex-col">
						<div className="flex w-full flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between">
							<div className="lg:w-2/4 w-full flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-20">
								<h1 className="text-3xl sm:text-6xl text-black font-manuale font-semibold">
									Refurbished Laptops for Data Analysts
								</h1>
								<p className="font-graphik font-normal text-lg sm:text-2xl leading-10">
									Explore affordable refurbished laptops tailored for data
									analysts.
								</p>
								<p className="font-graphik font-normal text-lg sm:text-2xl leading-10">
									Our curated selection offers powerful performance and
									reliability without breaking the bank.
								</p>
							</div>
							<div className="lg:w-2/5 w-full">
								<CustomForm />
							</div>
						</div>
					</div>
				</div>

				{/* First Section */}

				{/* Second Section */}

				<MetricsSection />

				{/* Second Section */}

				{/* Third Section */}
				<div className="w-[87%] sm:w-4/5 flex flex-col items-center">
					<div className="flex justify-between items-center w-full mb-6 px-4 sm:px-0">
						<CustomHeading heading="Best Laptops For Data Analysts" />
						<CustomButtom title="EXPLORE" />
					</div>

					<div className="flex flex-wrap justify-center gap-12 w-full px-4 sm:px-0">
						{Array.from({ length: 15 }).map((_, i) => (
							<div
								key={i}
								className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center items-center">
								<BestSellerCard
									title="Lorem Ipsum"
									src="/assets/laptop-2.png"
									price={100}
									rating={4.2}
									reviews={34}
								/>
							</div>
						))}
					</div>
				</div>
				{/* Third Section */}
			</div>
		</>
	);
}
