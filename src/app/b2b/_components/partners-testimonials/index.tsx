import CustomHeading from '@/components/common/CustomHeading';
import CustomCarousel from '@/components/testimonials-section/CustomCarousel';

export default function PartnersTestimonials() {
	return (
		<div className="py-3 sm:py-8">
			<CustomHeading
				heading="What do our partners say?"
				styles="py-6 sm:pt-12 sm:pb-8"
			/>
			<CustomCarousel />
		</div>
	);
}
