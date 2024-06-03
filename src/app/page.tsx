import HeroComponent from '@/components/HeroSection';
import SecondSection from '@/components/second-section';
import LogoComponent from '@/components/logo-section';
import MetricsSection from '@/components/metrics-section';
import BestSellersSection from '@/components/best-sellers-section';
import EdifyRockersSection from '@/components/edify-rockers-section';
import TestiMonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';

export default function Home() {
	return (
		<div className="flex flex-col gap-10">
			<HeroComponent />
			<SecondSection />
			<LogoComponent />
			<MetricsSection />
			<BestSellersSection />
			<EdifyRockersSection />
			<TestiMonialsSection />
			<FAQSection />
		</div>
	);
}
