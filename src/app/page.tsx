import dynamic from 'next/dynamic';
import HeroComponent from '@/components/HeroSection';
import CustomTailored from '@/components/custom-tailored';
import LogoComponent from '@/components/logo-section';
const BestSellersSectionDynamic = dynamic(
	() => import('@/components/best-sellers-section'),
);
const EdifyRefurbishedMeansSection = dynamic(
	() => import('@/components/edify-refurbished-means-section'),
);
const EdifiedEffectSectionDynamic = dynamic(
	() => import('@/components/edified-effect-section'),
	{ ssr: false },
);
const EdifyRockersSectionDynamic = dynamic(
	() => import('@/components/edify-rockers-section'),
);
const TestiMonialsSection = dynamic(
	() => import('@/components/testimonials-section'),
);
const FAQSection = dynamic(() => import('@/components/faq-section'));
const MoreLinksSectionDynamic = dynamic(
	() => import('@/components/more-links/MoreLinks'),
);

export default function Home() {
	return (
		<div className="flex flex-col w-full gap-4 md:gap-6 lg:gap-10">
			<HeroComponent />
			<CustomTailored />
			<LogoComponent />
			<BestSellersSectionDynamic />
			<EdifyRefurbishedMeansSection />
			<EdifiedEffectSectionDynamic />
			<EdifyRockersSectionDynamic />
			<TestiMonialsSection />
			<FAQSection />
			<MoreLinksSectionDynamic />
		</div>
	);
}
