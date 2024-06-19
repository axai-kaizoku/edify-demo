import { CustomButtonProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const CustomButtom = ({ title, styles, href = '#' }: CustomButtonProps) => {
	return (
		<Link
			href={href}
			target="_blank">
			<button
				className={` px-4 sm:px-7 py-2 sm:py-3.5  bg-black rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg ${styles} `}>
				{title}
			</button>
		</Link>
	);
};

export default CustomButtom;
