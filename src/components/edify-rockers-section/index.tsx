'use client';
import CustomHeading from '../common/CustomHeading';
import VideoModal from './VideoModal';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default function EdifyRockersSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5 flex flex-col">
				<CustomHeading
					heading="Edify Rockers"
					styles="py-4 md:py-10 lg:py-16"
				/>
				<div className="py-10">
					<Splide
						options={{
							type: 'slide',
							rewind: true,
							width: '100%',
							gap: '1.25rem',
							pagination: false,
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
						}}
					>
						{[
							'/assets/videos/video-1.mp4',
							'/assets/videos/video-2.mp4',
							'/assets/videos/video-3.mp4',
							'/assets/videos/video-4.mp4',
							'/assets/videos/video-4.mp4',
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
			</div>
		</div>
	);
}
