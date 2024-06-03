import { SocialIconsProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SocialElementsMobile({ src, href, alt }: SocialIconsProps) {
	return (
		<Link href={href}>
			<Image
				src={src}
				alt={alt}
				width={24}
				height={24}
				className="black-and-white"
			/>
		</Link>
	);
}

export default SocialElementsMobile;
