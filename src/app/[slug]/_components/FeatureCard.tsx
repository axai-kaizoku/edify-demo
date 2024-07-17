/* eslint-disable @next/next/no-img-element */
import { FeatureCardProps } from '@/types';

const FeatureCard = ({ logo, title, description }: FeatureCardProps) => {
	return (
		<div>
			<div className="flex  gap-4 items-center">
				<img
					src={logo}
					alt="check-square"
					width={20}
					height={20}
					className="text-slate-600"
					loading="lazy"
				/>
				<h1 className="text-[1rem] sm:text-xl lg:text-[1.4rem] xl:text-2xl font-semibold font-manuale text-black">
					{title}
				</h1>
			</div>
			<div className="flex justify-center items-center  pt-4 pb-7 pl-9 w-fit lg:w-[95%]  text-wrap">
				<p className="text-slate-600 font-normal leading-5 text-[0.75rem] sm:text-[0.9rem] lg:text-base xl:text-xl font-graphik">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
