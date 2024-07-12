import HeroComponent from '@/components/HeroSection';
import LogoComponent from '@/components/logo-section';
import EdifyRockersSection from '@/components/edify-rockers-section';
import TestiMonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import CustomTailored from '@/components/custom-tailored';
import EdifyRefurbishedMeansSection from '@/components/edify-refurbished-means-section';
import BestSellersSection from '@/components/best-sellers-section';
import EdifiedEffectSection from '@/components/edified-effect-section';
import MoreLinksSection from '@/components/more-links/MoreLinks';

export default function Home() {
	return (
		<div className="flex flex-col w-full gap-4 md:gap-6 lg:gap-10">
			<HeroComponent />
			<CustomTailored />
			<LogoComponent />
			<BestSellersSection />
			<EdifyRefurbishedMeansSection />
			<EdifiedEffectSection />
			<EdifyRockersSection />
			<TestiMonialsSection />
			<FAQSection />
			<MoreLinksSection />
		</div>
	);
}
