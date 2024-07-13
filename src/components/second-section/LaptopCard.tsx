import { LaptopCardProps } from '@/types';
// import Image from 'next/image';
import Link from 'next/link';

export default function LaptopCard({
	src,
	title,
	href,
	description,
}: LaptopCardProps) {
	return (
		<div className="flex flex-col md:items-baseline items-center lg:items-center justify-start lg:justify-center w-full max-w-xs md:max-w-none">
			<img
				src={src}
				alt={title}
				className="lg:h-[145px] h-[100px] md:h-[150px]  md:w-52 w-36 lg:w-52 object-cover lg:object-cover md:object-contain"
				width={668}
				height={350}
			/>
			<div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
				<h3 className="text-base sm:text-2xl font-manuale font-semibold">
					{title}
				</h3>
				<p className="text-slate-500 text-xs sm:text-lg font-graphik font-normal sm:w-60 w-36">
					{description}
				</p>
				<Link href={href} target="_blank">
					<p className="font-bold font-graphik text-xs sm:text-lg border-b-2 border-b-navlink w-fit">
						SHOP NOW
					</p>
				</Link>
			</div>
		</div>
	);
}
