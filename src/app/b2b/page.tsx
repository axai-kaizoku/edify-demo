import React from 'react';
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

function B2B() {
	return (
		<>
			<Container isBorder={false}>
				<HeroSection />
				<Brands />
			</Container>
			{/* <img
				src="/assets/b2b/wave-1.svg"
				alt="wave"
				className="w-[50px] h-[200px] object-contain relative"
			/> */}
			<Container isBorder={false}>
				<EdifyRefurbished />
				<BestSellers />
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
