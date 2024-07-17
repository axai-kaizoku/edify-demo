import { CustomHeadingProps } from '@/types';
import React from 'react';

const CustomHeading = ({ heading, styles }: CustomHeadingProps) => {
	return (
		<h2
			className={`text-[1.2rem] lg:text-[1.9rem] xl:text-4xl text-black font-manuale font-semibold ${styles}`}>
			{heading}
		</h2>
	);
};

export default CustomHeading;
