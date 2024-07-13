import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import VideoCard from './VideoCard';

export default function VideoModal({ src }: { src: string }) {
	return (
		<Dialog>
			<DialogTrigger title="video-button">
				<VideoCard
					videoLink={src}
					heading={'Layers'}
					subHeading={
						'“Winuall has saved us thousands of hours of work. We’re able to spin up projects faster.”'
					}
				/>
			</DialogTrigger>
			<DialogContent>
				<VideoCard
					videoLink={src}
					heading={'Layers'}
					subHeading={
						'“Winuall has saved us thousands of hours of work. We’re able to spin up projects faster.”'
					}
				/>
			</DialogContent>
		</Dialog>
	);
}
