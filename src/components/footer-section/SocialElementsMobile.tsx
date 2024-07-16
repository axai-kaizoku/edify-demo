/* eslint-disable @next/next/no-img-element */
import { SocialIconsProps } from '@/types';
import Link from 'next/link';

function SocialElementsMobile({ src, href, alt }: SocialIconsProps) {
	return (
		<Link href={href} aria-label="Read more " target="_blank">
			<img
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
