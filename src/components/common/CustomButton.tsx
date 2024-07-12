import { CustomButtonProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const CustomButtom = ({ title, styles, href = '#' }: CustomButtonProps) => {
	return (
		<Link href={href} target="_blank">
			<button
				className={` px-4 py-2 sm:px-5 sm:py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 leading-5 bg-black rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg ${styles} `}>
				{title}
			</button>
		</Link>
	);
};

export default CustomButtom;
