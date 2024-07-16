import MoreLinks from '@/components/more-links';
import CustomForm from './CustomForm';
import MetricsSection from './MetricComponent';
import { SEOPageData } from '@/types';
import SeoBestSellersSection from './SeoBestSellersSection';
import Link from 'next/link';
import Container from '@/components/common/Container';

interface SeoMainProps {
	data: SEOPageData;
}

const SeoMain: React.FC<SeoMainProps> = ({ data }) => {
	return data.subHeading === null ? (
		<>
			<div className="flex flex-col justify-center items-center h-[90vh] sm:h-screen -mt-10 sm:-mt-20 lg:-mt-1 w-full bg-gray-100">
				<h1 className="text-5xl font-bold font-manuale text-gray-800 mb-4">
					404
				</h1>
				<h2 className="text-3xl font-medium font-manuale text-gray-600 mb-4">
					Page Not Found
				</h2>
				<p className="text-sm sm:text-lg text-gray-500 mb-8 text-wrap">
					Sorry, the page you are looking for does not exist.
				</p>
				<Link href="/">
					<button className="px-6 py-2 bg-slate-600 text-white rounded-full hover:bg-slate-800 transition-all duration-300">
						Go Back Home
					</button>
				</Link>
			</div>
		</>
	) : (
		<div className="w-full flex flex-col justify-center gap-4  items-center">
			{/* First Section */}
			<SeoBestSellersSection
				firstTitle={data.first_title_name.text}
				lastTitle={data.last_title_name.text}
				products={data.products}
			/>

			{/* Second Section */}

			<div className="flex bg-[url('/assets/seo/seo-bg.webp')] bg-no-repeat sm:border-b object-center object-cover h-fit lg:min-h-[95vh] justify-center items-start  w-full lg:pt-10 xl:pt-14">
				<div className="flex w-[95%] sm:w-[87%] flex-col">
					<div className="flex w-full flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between">
						<div className="lg:w-2/4 w-full flex flex-col">
							{/* {!isLoading && <p>{JSON.stringify(data)}</p>} */}
							<h1 className="text-[1rem] sm:text-3xl lg:text-4xl xl:text-4xl  text-black font-manuale font-semibold py-3 sm:py-5 xl:py-8">
								{data.first_title_name.text} {data.last_title_name.text}
							</h1>
							<div className="font-graphik font-normal text-[0.75rem] sm:text-[1.2rem] leading-6 sm:leading-8 xl:leading-10 text-gray-700">
								{data?.subHeading.map((v, i) => (
									<div key={i} className="pt-3 xl:pt-4">
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
			<Container isBorder={false}>
				<MoreLinks slug={data.slug} />
			</Container>
		</div>
	);
};

export default SeoMain;
