/* eslint-disable @next/next/no-img-element */
import HeroSection from './_components/hero';
import Brands from './_components/brands';
import EdifyRefurbished from './_components/edify-refurbished';
import BestSellers from './_components/best-sellers';
import Partners from './_components/partners';
import PartnersTestimonials from './_components/partners-testimonials';
import FAQ from './_components/faq';
import BulkOrder from './_components/bulk-order';
import MoreLinksSection from './_components/more-links';
import Container from '@/components/common/Container';
import { Metadata } from 'next';
import { siteConfigB2B } from '@/config/site';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfigB2B.url),
	title: siteConfigB2B.name,
	description: siteConfigB2B.description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfigB2B.url,
		title: siteConfigB2B.name,
		description: siteConfigB2B.description,
		siteName: siteConfigB2B.name,
		images: `${siteConfigB2B.url}/og_b2b.png`,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigB2B.name,
		description: siteConfigB2B.description,
		images: `${siteConfigB2B.url}/og_b2b.png`,
	},
	icons: {
		icon: '/logo.png',
	},
};

function B2B() {
	return (
		<>
			<Container isBorder={false} className="pb-9">
				<HeroSection />
				<Brands />
			</Container>
			<div className="w-full h-full relative flex justify-start">
				<img
					src="/assets/b2b/wave-1.svg"
					alt="wave"
					className="w-fit sm:h-[90px] lg:h-[110px] hidden lg:block absolute -mt-16 left-0 "
				/>
			</div>
			<Container isBorder={false} className="pt-5 lg:pt-10">
				<EdifyRefurbished />
				<BestSellers />
			</Container>
			<div className="w-full h-full relative flex justify-end">
				<img
					src="/assets/b2b/wave-2.svg"
					alt="wave"
					className="w-fit sm:h-[80px] lg:h-[100px] absolute right-0 hidden lg:block"
				/>
			</div>
			<Container isBorder={false} className=" sm:pt-9 lg:pt-20">
				<Partners />
				<PartnersTestimonials />
				<FAQ />
				<BulkOrder />
				<MoreLinksSection />
			</Container>
		</>
	);
}

export default B2B;
