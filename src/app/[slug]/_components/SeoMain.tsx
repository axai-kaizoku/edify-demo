import MoreLinks from '@/components/more-links';
import CustomForm from './CustomForm';
import MetricsSection from './MetricComponent';
import { SEOPageData } from '@/types';
import SeoBestSellersSection from './SeoBestSellersSection';

interface SeoMainProps {
	data: SEOPageData;
}

const SeoMain: React.FC<SeoMainProps> = ({ data }) => {
	return (
		<div className="w-full flex flex-col justify-center gap-4  items-center">
			{/* First Section */}
			<SeoBestSellersSection
				firstTitle={data.first_title_name.text}
				lastTitle={data.last_title_name.text}
				products={data.products}
			/>

			{/* Second Section */}

			<div className="flex bg-[url('/assets/seo-bg.png')] bg-no-repeat border-b object-center object-cover h-fit lg:min-h-[95vh] justify-center items-start  w-full">
				<div className="flex w-[87%] sm:w-4/5 flex-col">
					<h1 className="text-3xl sm:text-4xl text-black font-manuale font-semibold pb-8">
						{data.first_title_name.text} {data.last_title_name.text}
					</h1>
					<div className="flex w-full flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between">
						<div className="lg:w-2/4 w-full flex flex-col gap-8 sm:gap-10 lg:gap-12">
							{/* {!isLoading && <p>{JSON.stringify(data)}</p>} */}
							<div className="font-graphik font-normal text-lg sm:text-2xl leading-8 sm:leading-10">
								{data?.subHeading.map((v, i) => (
									<div
										key={i}
										className="pt-3.5 sm:pt-9">
										{v}
									</div>
								))}
							</div>
						</div>
						<div className="lg:w-2/5 w-full">
							<CustomForm />
						</div>
					</div>
				</div>
			</div>

			{/* Third Section */}
			<MetricsSection />
			{/* More Links Section */}
			<MoreLinks slug={data.slug} />
		</div>
	);
};

export default SeoMain;
