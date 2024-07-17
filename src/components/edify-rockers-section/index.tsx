'use client';
import { useEffect, useRef } from 'react';
import Container from '../common/Container';
import CustomHeading from '../common/CustomHeading';
import VideoModal from './VideoModal';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default function EdifyRockersSection() {
	const splideRef = useRef<any>(null);

	useEffect(() => {
		if (splideRef.current) {
			const { root } = splideRef.current.splide.Components.Elements;

			root.classList.add('edify-rockers-root');
		}
	});
	return (
		<Container isBorder={false}>
			<CustomHeading heading="Edify Rockers" styles="py-4 sm:py-8" />
			<div className="pt-6 pb-2" id="edify-rockers">
				<Splide
					ref={splideRef}
					options={{
						type: 'slide',
						rewind: true,
						width: '100%',
						gap: '1.25rem',
						pagination: true,
						cover: false,
						start: 0,
						focus: 'center',
						autoplay: false,
						isNavigation: false,
						arrows: false,
						updateOnMove: true,
						perPage: 4,
						breakpoints: {
							640: {
								perPage: 1,
							},
							1024: {
								perPage: 2,
							},
							1280: {
								perPage: 4,
							},
						},
					}}>
					{[
						'/assets/videos/video-1.mp4',
						'/assets/videos/video-2.mp4',
						'/assets/videos/video-3.mp4',
						'/assets/videos/video-4.mp4',
					].map((src, i) => (
						<SplideSlide key={i}>
							<div className="w-full">
								<VideoModal src={src} />
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</Container>
	);
}
