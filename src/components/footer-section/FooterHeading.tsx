import { FooterProps } from '@/types';
import React from 'react';

function FooterHeading({ title }: FooterProps) {
	return (
		<h1 className="font-graphik font-semibold text-gray-400 leading-5">
			{title}
		</h1>
	);
}

export default FooterHeading;
