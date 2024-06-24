import { FeatureCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ logo, title, description }: FeatureCardProps) => {
	return (
		<div>
			<div className="flex  gap-4 items-center">
				<Image
					src={logo}
					alt="check-square"
					width={20}
					height={20}
					className="text-slate-600"
				/>
				<h1 className="text-base sm:text-2xl font-semibold font-manuale text-black">
					{title}
				</h1>
			</div>
			<div className="flex justify-center items-center  pt-4 pb-7 pl-9 w-fit lg:w-[500px]  text-wrap">
				<p className="text-slate-600 font-normal leading-5 text-sm sm:text-base font-graphik">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
