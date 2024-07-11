import CustomHeading from '@/components/common/CustomHeading';
import CustomCarousel from '@/components/testimonials-section/CustomCarousel';

export default function PartnersTestimonials() {
	return (
		<>
			<CustomHeading
				heading="What do our partners say?"
				styles="py-6 sm:pt-12 sm:pb-8"
			/>
			<CustomCarousel />
		</>
	);
}
