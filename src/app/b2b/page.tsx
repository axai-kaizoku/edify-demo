import React from 'react';
import HeroSection from './_components/hero';
import Brands from './_components/brands';
import EdifyRefurbished from './_components/edify-refurbished';
import BestSellers from './_components/best-sellers';
import Partners from './_components/partners';
import PartnersTestimonials from './_components/partners-testimonials';
import FAQ from './_components/faq';
import BulkOrder from './_components/bulk-order';
import Container from '@/components/common/HeroContainer';
import MoreLinksSection from './_components/more-links';

function B2B() {
	return (
		<Container>
			<HeroSection />
			<Container className="bg-red-300 w-full h-80">
				<div className="bg-green-400 w-40 h-40" />
			</Container>

			<Brands />
			<EdifyRefurbished />
			<BestSellers />
			<Partners />
			<PartnersTestimonials />
			<FAQ />
			<BulkOrder />
			<MoreLinksSection />
		</Container>
	);
}

export default B2B;
