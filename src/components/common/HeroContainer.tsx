import React from 'react';

interface HeroContainerProps {
	children: React.ReactNode;
}

function Container({ children }: HeroContainerProps) {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex flex-col w-[87%] sm:w-4/5">{children}</div>
		</div>
	);
}

export default Container;
