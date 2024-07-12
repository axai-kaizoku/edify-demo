import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	isBorder: boolean;
}

function Container({ children, className, isBorder }: ContainerProps) {
	return (
		<div
			className={`flex  justify-center items-center w-full ${
				isBorder ? 'border-b' : ''
			} `}>
			<div className={cn('flex flex-col w-[95%] sm:w-[87%]', className)}>
				{children}
			</div>
		</div>
	);
}

export default Container;
