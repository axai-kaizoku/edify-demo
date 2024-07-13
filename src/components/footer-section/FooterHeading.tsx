import { FooterProps } from '@/types';
import React from 'react';

function FooterHeading({ title }: FooterProps) {
	return (
		<h1 className="font-graphik text-[1.2rem] font-semibold text-black leading-5">
			{title}
		</h1>
	);
}

export default FooterHeading;
