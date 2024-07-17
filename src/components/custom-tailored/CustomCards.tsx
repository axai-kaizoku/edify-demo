import { CustomCardProps } from '@/types';

function CustomCards({ src, alt, subHeading }: CustomCardProps) {
	return (
		<div className="flex flex-col justify-center items-center gap-2 bg-[#F7F7F6] py-5 lg:py-6 xl:py-8 rounded">
			<img
				src={src}
				alt={alt}
				className="w-7 h-7  lg:w-12 lg:h-12  xl:w-16 xl:h-16 object-contain"
				loading="lazy"
			/>
			<div className="flex justify-center items-center ">
				<div className="w-[70%] text-center text-sm lg:text-[0.9rem] xl:text-base">
					{subHeading}
				</div>
			</div>
		</div>
	);
}

export default CustomCards;
