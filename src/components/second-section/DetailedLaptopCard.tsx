import { LaptopCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailedLaptopCard({
	src,
	title,
	description,
	href,
}: LaptopCardProps) {
	return (
		<div className="flex flex-row md:flex-row md:gap-8 justify-between">
			<div className="flex flex-col w-[60%] gap-2 sm:gap-5 justify-start sm:justify-end">
				<h3 className="text-base sm:text-2xl font-manuale font-semibold">
					{title}
				</h3>
				<p className="text-slate-500 text-xs sm:text-base w-full sm:w-60 text-wrap font-graphik font-normal">
					{description}
				</p>
				<Link
					href={href}
					target="_blank"
				>
					<p className="text-xs sm:text-base font-bold font-graphik border-b-2 border-b-navlink  flex w-fit items-center">
						SHOP NOW
					</p>
				</Link>
			</div>
			<div className="">
				<Image
					src={src}
					alt={title}
					className="h-[145px] w-64 object-cover"
					width={668}
					height={350}
				/>
			</div>
		</div>
	);
}
