import React from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

function Container({ children, className }: ContainerProps) {
	return (
		<div className="flex justify-center items-center w-full border-b-8 border-black">
			<div className={cn('flex flex-col w-[95%] sm:w-[90%] ', className)}>
				{children}
			</div>
		</div>
	);
}

export default Container;
