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
					<h3 className="font-normal text-lg sm:text-2xl text-slate-600 font-graphik">
						Unbeatable Value. Unmatched Performance.
					</h3>
				</div>
				<div className="pt-4">
					<CustomButton title="EXPLORE" />
				</div>
			</div>
			<div className="w-full lg:w-auto flex justify-center lg:justify-end">
				<Image
					src="/assets/hero.png"
					alt="Hero-profile"
					width={500}
					height={500}
					className="max-w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default HeroComponent;
