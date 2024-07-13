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
		images: [
			'https://github-production-user-asset-6210df.s3.amazonaws.com/126662285/249216805-c67a524e-6535-44c0-b134-1dc10c8b8dc8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA/20240713/us-east-1/s3/aws4_request&X-Amz-Date=20240713T071355Z&X-Amz-Expires=300&X-Amz-Signature=2ffa21185840dc9e01b85604660f6279031091f49f48bd1ac8b0084c8fb771c3&X-Amz-SignedHeaders=host&actor_id=171006316&key_id=0&repo_id=75189195',
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigB2B.name,
		description: siteConfigB2B.description,
		images: [
			'https://github-production-user-asset-6210df.s3.amazonaws.com/126662285/249216805-c67a524e-6535-44c0-b134-1dc10c8b8dc8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA/20240713/us-east-1/s3/aws4_request&X-Amz-Date=20240713T071355Z&X-Amz-Expires=300&X-Amz-Signature=2ffa21185840dc9e01b85604660f6279031091f49f48bd1ac8b0084c8fb771c3&X-Amz-SignedHeaders=host&actor_id=171006316&key_id=0&repo_id=75189195',
		],
	},
	icons: {
		icon: '/logo.png',
	},
};

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
