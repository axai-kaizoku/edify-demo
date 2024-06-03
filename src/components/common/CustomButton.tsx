import { CustomButtonProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const CustomButtom = ({ title, styles }: CustomButtonProps) => {
	return (
		<Link
			href={'https://edify.club/'}
			target="_blank">
			<button
				className={` px-4 sm:px-7 py-2 sm:py-3.5  bg-slate-900 rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg ${styles} `}>
				{title}
			</button>
		</Link>
	);
};

export default CustomButtom;
