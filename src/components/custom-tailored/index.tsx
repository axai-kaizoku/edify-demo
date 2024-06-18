import React from 'react';
import CustomHeading from '../common/CustomHeading';
import CustomCards from './CustomCards';

function CustomTailored() {
	return (
		<div className="w-full flex justify-center items-center bg-[#F7F7F6] lg:bg-white">
			<div className="w-[87%] sm:w-4/5 sm:items-start items-center flex flex-col">
				<CustomHeading
					heading="Custom Tailored To Your Needs"
					styles="py-4 md:py-10 lg:py-16"
				/>
				<div className="grid grid-cols-2  lg:grid-cols-3 gap-4 md:gap-8  lg:gap-16 pb-6 ">
					<div className="lg:w-[360px] w-[130px] h-[70px] md:w-[300px] bg-white lg:bg-[#F7F7F6] sm:h-48 rounded flex justify-center p-4 items-center flex-col">
						<CustomCards
							src="../assets/custom-tailored/students.svg"
							alt="Laptops for Students"
							subHeading="Laptops for Students"
						/>
					</div>
					<div className="lg:w-[360px] w-[130px] h-[70px] md:w-[300px] bg-white lg:bg-[#F7F7F6] sm:h-48 rounded flex justify-center p-4 items-center flex-col">
						<CustomCards
							src="../assets/custom-tailored/laptop.svg"
							alt="Premium Laptops"
							subHeading="Premium Laptops"
						/>
					</div>
					<div className="lg:w-[360px] w-[130px] h-[70px] md:w-[300px] bg-white lg:bg-[#F7F7F6] sm:h-48 rounded flex justify-center p-4 items-center flex-col">
						<CustomCards
							src="../assets/custom-tailored/professionals.svg"
							alt="Laptops for Professionals"
							subHeading="Laptops for Professionals"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomTailored;
