import Container from '../common/Container';
import CustomHeading from '../common/CustomHeading';
import CustomCarousel from './CustomCarousel';

export default function TestiMonialsSection() {
	return (
		<Container isBorder={false}>
			<CustomHeading heading="What do our users say?" styles="py-4 sm:pb-6" />
			<CustomCarousel />
		</Container>
	);
}
