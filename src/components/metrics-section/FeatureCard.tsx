import { FeatureCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ logo, title, description }: FeatureCardProps) => {
	return (
		<div className="">
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
			<div className="flex justify-center items-center  pt-4 pb-10 pl-9 w-[320px] md:w-[500px] text-wrap">
				<h3 className="text-slate-600 font-normal leading-5 text-sm sm:text-base ">
					{description}
				</h3>
			</div>
		</div>
	);
};

export default FeatureCard;
