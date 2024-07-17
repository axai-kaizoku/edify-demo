import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@/components/common/Container'));
import HeroSection from './_components/hero';
import PartnersTestimonials from './_components/partners-testimonials';
import ImpactSection from './_components/impact';
const Investors = dynamic(() => import('./_components/investors'));
const Partners = dynamic(() => import('./_components/partners'));
const StartUps = dynamic(() => import('./_components/startups'));
const FAQ = dynamic(() => import('./_components/faq'));
const MoreLinksSection = dynamic(() => import('./_components/more-links'));
import { Metadata } from 'next';
import { siteConfigStartUp } from '@/config/site';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfigStartUp.url),
	title: siteConfigStartUp.name,
	description: siteConfigStartUp.description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfigStartUp.url,
		title: siteConfigStartUp.name,
		description: siteConfigStartUp.description,
		siteName: siteConfigStartUp.name,
		images: `${siteConfigStartUp.url}/og_startup.png`,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigStartUp.name,
		description: siteConfigStartUp.description,
		images: `${siteConfigStartUp.url}/og_startup.png`,
	},
	icons: {
		icon: '/logo.png',
	},
};

export default function StartUp() {
	return (
		<>
			<Container isBorder={false} className="pb-8 mb-6 lg:pb-0 lg:-mb-20">
				<HeroSection />
				<StartUps />
				<Partners />
			</Container>
			<ImpactSection />
			<Container isBorder={false} className="lg:-mt-24">
				<Investors />
				<PartnersTestimonials />
				<FAQ />
				<MoreLinksSection />
			</Container>
		</>
	);
}
