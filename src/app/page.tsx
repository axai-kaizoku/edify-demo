import HeroComponent from '@/components/HeroSection';
import SecondSection from '@/components/second-section';
import LogoComponent from '@/components/logo-section';
import MetricsSection from '@/components/metrics-section';
import EdifyRockersSection from '@/components/edify-rockers-section';
import TestiMonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import ImageSlider from '@/components/ui-design';
import MoreLinks from '@/components/more-links';

export default function Home() {
	return (
		<div className="flex flex-col w-full gap-4 md:gap-6 lg:gap-10">
			<HeroComponent />
			<SecondSection />
			<LogoComponent />
			<MetricsSection />
			<EdifyRockersSection />
			<TestiMonialsSection />
			<FAQSection />
			<ImageSlider />
			<MoreLinks />
		</div>
	);
}
