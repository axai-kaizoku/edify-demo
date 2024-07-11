import Container from '@/components/common/HeroContainer';
import HeroSection from './_components/hero';
import PartnersTestimonials from './_components/partners-testimonials';
import FAQ from './_components/faq';
import MoreLinksSection from './_components/more-links';
import ImpactSection from './_components/impact';
import Investors from './_components/investors';
import Partners from './_components/partners';
import StartUps from './_components/startups';

export default function StartUp() {
	return (
		<Container>
			<HeroSection />
			<StartUps />
			<Partners />
			<ImpactSection />
			<Investors />
			<PartnersTestimonials />
			<FAQ />
			<MoreLinksSection />
		</Container>
	);
}
