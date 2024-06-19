import Image from 'next/image';
import CustomButton from './common/CustomButton';

const HeroComponent = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row items-center w-full py-10 px-4 sm:px-40 sm:py-10 sm:pb-8 sm:border-b gap-12">
			<div className="flex flex-col justify-center items-center sm:items-start gap-4">
				<div className="flex flex-col gap-4 text-center sm:text-left">
					<h1 className="text-3xl sm:text-6xl font-semibold leading-tight sm:leading-[72px] text-slate-900 font-manuale">
						Edify Refurbished Laptops
					</h1>
					<p className="font-normal text-lg sm:text-2xl text-slate-600 font-graphik">
						Unbeatable Value. Unmatched Performance.
					</p>
				</div>
				<div className="pt-4">
					<CustomButton
						title="EXPLORE"
						href="https://shop.edify.club/collections/all"
					/>
				</div>
			</div>
			<div className="w-full lg:w-auto flex justify-center lg:justify-end">
				<Image
					src="/assets/hero.webp"
					alt="Hero-profile"
					width={500}
					height={500}
					sizes="(min-width: 640px) 100vw, (min-width: 768px) 50vw,33vw"
					className="max-w-full h-auto"
					priority={true}
				/>
			</div>
		</div>
	);
};

export default HeroComponent;
