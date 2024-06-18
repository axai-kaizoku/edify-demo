import { CustomCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

function CustomCards({ src, alt, subHeading }: CustomCardProps) {
	return (
		<div className="flex justify-center items-center gap-2 flex-col p-2">
			<Image
				width={64}
				height={60}
				src={src}
				alt={alt}
				className="w-7 h-7 sm:w-16 sm:h-16"
			/>

			<p className="leading-4 sm:leading-6 font-normal font-graphik text-xs sm:text-xl text-wrap w-full sm:w-28 text-center">
				{subHeading}
			</p>
		</div>
	);
}

export default CustomCards;
