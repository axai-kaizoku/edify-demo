import { EdifyRockeraCardProp } from '@/types';

import React from 'react';

const VideoCard = ({
	videoLink,
	heading,
	subHeading,
}: EdifyRockeraCardProp) => {
	return (
		<div className="w-[300px] h-[600px] flex items-center justify-center flex-col ">
			<div className="">
				<video
					width="320"
					height="240"
					controls
					autoPlay
					muted
					loop
					preload="none"
					className="rounded-lg  ">
					<source
						src={videoLink}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="p-8  flex-col gap-4 hidden">
				<h1 className="text-slate-900 text-3xl font-semibold">{heading}</h1>
				<p className="text-slate-900 text-xl font-normal">{subHeading}</p>
			</div>
		</div>
	);
};

export default VideoCard;
