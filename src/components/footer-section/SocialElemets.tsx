import { SocialIconsProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SocialElements({ src, href, alt }: SocialIconsProps) {
	return (
		<Link
			href={href}
			aria-label="Read more "
		>
			<Image
				src={src}
				alt={alt}
				width={24}
				height={24}
			/>
		</Link>
	);
}

export default SocialElements;
