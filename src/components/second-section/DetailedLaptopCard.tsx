import { LaptopCardProps } from '@/types';
import Link from 'next/link';

export default function DetailedLaptopCard({
	src,
	title,
	description,
	href,
}: LaptopCardProps) {
	return (
		<div className="flex flex-row md:flex-row  md:gap-8 justify-between">
			<div className="flex flex-col w-[60%] gap-2 sm:gap-3 justify-start sm:justify-end">
				<h3 className="text-base sm:text-2xl font-manuale font-semibold">
					{title}
				</h3>
				<p className="text-slate-400 text-xs sm:text-base w-full sm:w-60 text-wrap font-graphik font-normal">
					{description}
				</p>
				<Link
					href={href}
					target="_blank"
				>
					<p className="text-xs sm:text-base font-bold font-graphik border-b-2 border-b-navlink w-fit">
						SHOP NOW
					</p>
				</Link>
			</div>
			<div className="flex justify-center md:justify-end">
				<img
					src={src}
					alt="laptop-2"
					className="w-48 h-24 lg:w-[300px] lg:h-[160px]"
				/>
			</div>
		</div>
	);
}
