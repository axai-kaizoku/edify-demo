/* eslint-disable @next/next/no-img-element */
import CustomHeading from '../common/CustomHeading';
import Container from '../common/Container';

const LogoComponent = () => {
	return (
		<>
			<Container
				isBorder={false}
				className="gap-4 lg:gap-10 xl:gap-[60px] py-6">
				<CustomHeading heading="Get Laptops from Top Brands" />
				<div className="items-center  justify-between hidden sm:flex lg:px-6">
					<img
						src="/assets/hp_icon.webp"
						alt="HP"
						className="xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] sm:w-[40px] sm:h-[40px] w-[38px] h-[38px]"
						loading="lazy"
					/>
					<img
						src="/assets/apple.svg"
						alt="Apple"
						className="xl:w-[50px] xl:h-[60px] lg:w-[45px] lg:h-[55px] sm:w-[40px] sm:h-[50px] w-[35px] h-[45px]"
						loading="lazy"
					/>
					<img
						src="/assets/lenovo.webp"
						alt="Lenovo"
						className="xl:w-[150px] xl:h-[50px] lg:w-[130px] lg:h-[40px] sm:w-[110px] sm:h-[40px] w-[90px] h-[30px]"
						loading="lazy"
					/>
					<img
						src="/assets/dell.webp"
						alt="Dell"
						className="xl:w-[130px] xl:h-[40px] lg:w-[110px] lg:h-[35px] sm:w-[90px] sm:h-[30px] w-[80px] h-[28px]"
						loading="lazy"
					/>
				</div>
				<div className="py-4  items-center justify-around sm:hidden flex">
					<img
						src="/assets/dell.svg"
						alt="Dell"
						width={30}
						height={30}
						loading="lazy"
					/>
					<img
						src="/assets/apple.svg"
						alt="Apple"
						width={25}
						height={30}
						loading="lazy"
					/>
					<img
						src="/assets/lenovo.webp"
						alt="Lenovo"
						width={80}
						height={25}
						loading="lazy"
					/>
					<img
						src="/assets/hp_icon.webp"
						alt="HP"
						width={30}
						height={30}
						loading="lazy"
					/>
				</div>
			</Container>
		</>
	);
};

export default LogoComponent;
