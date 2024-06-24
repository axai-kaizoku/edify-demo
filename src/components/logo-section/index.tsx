import React from 'react';
import LogoComponentCard from './LogoComponentCard';
import CustomHeading from '../common/CustomHeading';

const LogoComponent = () => {
	return (
		<>
			<div className="w-full flex justify-center items-center ">
				<div className="w-[87%] sm:w-4/5 flex flex-col gap-10 py-8">
					<div className="flex justify-between w-full">
						<CustomHeading heading="Get Laptops from Top Brands" />
					</div>
					<div className="items-center justify-between hidden sm:flex">
						<LogoComponentCard
							src="/assets/hp_icon.webp"
							alt="HP"
							width={60}
							height={60}
						/>
						<LogoComponentCard
							src="/assets/apple.svg"
							alt="Apple"
							width={50}
							height={60}
						/>
						<LogoComponentCard
							src="/assets/lenovo.webp"
							alt="Lenovo"
							width={150}
							height={50}
						/>
						<LogoComponentCard
							src="/assets/dell.webp"
							alt="Dell"
							width={130}
							height={40}
						/>
					</div>
				</div>
			</div>

			<div className="py-4  items-center justify-around sm:hidden flex">
				<LogoComponentCard
					src="/assets/hp_icon.webp"
					alt="HP"
					width={30}
					height={30}
				/>
				<LogoComponentCard
					src="/assets/apple.svg"
					alt="Apple"
					width={25}
					height={30}
				/>
				<LogoComponentCard
					src="/assets/lenovo.webp"
					alt="Lenovo"
					width={80}
					height={25}
				/>
				<LogoComponentCard
					src="/assets/dell.webp"
					alt="Dell"
					width={30}
					height={30}
				/>
			</div>
		</>
	);
};

export default LogoComponent;
