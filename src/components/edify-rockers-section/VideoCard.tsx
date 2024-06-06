import { EdifyRockeraCardProp } from '@/types';
import React from 'react';

const VideoCard = ({
	videoLink,
	heading,
	subHeading,
}: EdifyRockeraCardProp) => {
	return (
		<div className="flex items-center justify-center flex-col w-full">
			<div>
				<video
					width="100%"
					height="240"
					controls
					autoPlay
					muted
					loop
					preload="none"
					className="rounded-lg"
				>
					<source
						src={videoLink}
						type="video/mp4"
					/>
					<track
						src="captions_en.vtt"
						kind="captions"
						srcLang="en"
						label="english_captions"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="p-8 flex-col gap-4 hidden">
				<h1 className="text-slate-900 text-3xl font-semibold">{heading}</h1>
				<p className="text-slate-900 text-xl font-normal">{subHeading}</p>
			</div>
		</div>
	);
};

export default VideoCard;
