import CustomHeading from '../common/CustomHeading';
import VideoModal from './VideoModal';

export default function EdifyRockersSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5  flex flex-col">
				<CustomHeading
					heading="Edify Rockers"
					styles="py-16"
				/>
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<VideoModal src="/assets/videos/video-1.mp4" />
					<VideoModal src="/assets/videos/video-2.mp4" />
					<VideoModal src="/assets/videos/video-3.mp4" />
					<VideoModal src="/assets/videos/video-4.mp4" />
				</div>
			</div>
		</div>
	);
}
