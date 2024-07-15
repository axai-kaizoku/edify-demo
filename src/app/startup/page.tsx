import HeroSection from './_components/hero';
import PartnersTestimonials from './_components/partners-testimonials';
import FAQ from './_components/faq';
import MoreLinksSection from './_components/more-links';
import ImpactSection from './_components/impact';
import Investors from './_components/investors';
import Partners from './_components/partners';
import StartUps from './_components/startups';
import Container from '@/components/common/Container';
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
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigStartUp.name,
		description: siteConfigStartUp.description,
	},
	icons: {
		icon: '/logo.png',
	},
};

export default function StartUp() {
	return (
		<>
			<Container isBorder={false}>
				<HeroSection />
				<StartUps />
				<Partners />
			</Container>
			<ImpactSection />
			<Container isBorder={false}>
				<Investors />
				<PartnersTestimonials />
				<FAQ />
				<MoreLinksSection />
			</Container>
		</>
	);
}
