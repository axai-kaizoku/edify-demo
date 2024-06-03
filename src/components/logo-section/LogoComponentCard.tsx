import { LogoComponentCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const LogoComponentCard = ({
	src,
	alt,
	width,
	height,
}: LogoComponentCardProps) => {
	return (
		<>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</>
	);
};

export default LogoComponentCard;
