import React from 'react';
import CustomHeading from '../common/CustomHeading';
import CustomCards from './CustomCards';
import Container from '../common/Container';

function CustomTailored() {
	return (
		<Container isBorder={false}>
			<CustomHeading
				heading="Custom Tailored To Your Needs"
				styles="py-4 md:py-10 lg:py-10"
			/>
			<div className="grid grid-cols-2  lg:grid-cols-3 gap-4 md:gap-8  lg:gap-16 pb-6 ">
				<CustomCards
					src="/assets/custom-tailored/students.svg"
					alt="Laptops for Students"
					subHeading="Laptops for Students"
				/>
				<CustomCards
					src="/assets/custom-tailored/laptop.svg"
					alt="Premium Laptops"
					subHeading="Premium Laptops"
				/>
				<CustomCards
					src="/assets/custom-tailored/professionals.svg"
					alt="Laptops for Professionals"
					subHeading="Laptops for Professionals"
				/>
			</div>
		</Container>
	);
}

export default CustomTailored;
