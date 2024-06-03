import { CustomHeadingProps } from '@/types';
import React from 'react';

const CustomHeading = ({ heading, styles }: CustomHeadingProps) => {
	return (
		<h2 className={`text-xl sm:text-4xl  font-manuale font-semibold ${styles}`}>
			{heading}
		</h2>
	);
};

export default CustomHeading;
