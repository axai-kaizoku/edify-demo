/* eslint-disable @next/next/no-img-element */
import CustomButton from './common/CustomButton';
import Container from './common/Container';

const HeroComponent = () => {
	return (
		<Container isBorder={false} className="py-16 sm:pt-5 lg:pt-2 xl:pt-12">
			<div className="w-full flex flex-col-reverse lg:flex-row sm:gap-6 lg:gap-0 justify-center items-center lg:pt-16 lg:pb-14 xl:py-1">
				<div className="flex flex-col justify-start items-start gap-4  w-full lg:pt-[3.1rem] xl:pt-[3.3rem]">
					<div className="w-full flex flex-col justify-start items-start gap-5 lg:gap-8 xl:gap-[60px]">
						<div className="w-full flex flex-col lg:justify-start justify-center items-center lg:items-start gap-5">
							<div className="text-black text-2xl sm:text-5xl lg:text-[2.5rem] xl:text-6xl whitespace-nowrap  font-semibold font-manuale leading-loose lg:leading-[46px] xl:leading-[72px]">
								Edify Refurbished <br className="hidden lg:block" />
								Laptops
							</div>
							<div className="text-grey-600 md:text-grey-800 text-lg lg:text-lg xl:text-3xl whitespace-nowrap font-normal font-graphik leading-snug md:leading-10">
								Unbeatable Value. Unmatched Performance.
							</div>
						</div>
						<div className="w-full flex justify-start items-center">
							<div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start pb-12">
								<CustomButton href="" title="EXPLORE" />
							</div>
						</div>
					</div>
				</div>
				<img
					alt="hero-image"
					src="/assets/hero.png"
					className="w-[240px] h-[180px] sm:w-[440px] sm:h-[350px] lg:w-[490px] p-1 lg:h-[420px] xl:w-[550px] xl:h-[520px] object-contain"
				/>
			</div>
		</Container>
	);
};

export default HeroComponent;
