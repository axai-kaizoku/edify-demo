'use client';
import CustomButton from '@/components/common/CustomButton';
import Image from 'next/image';
import React, { useState } from 'react';
import StartupForm from './StartupForm';

function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isThankYouVisible, setIsThankYouVisible] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleBrochureDownload = () => {
		setIsModalOpen(false);
		setIsThankYouVisible(true);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full">
			{isThankYouVisible && (
				<div className="w-full py-4 bg-green-500 fixed top-[68px] lg:top-[76px] flex justify-center items-center">
					<div className="flex justify-center items-center gap-2.5">
						<div>
							<span className="text-white text-sm sm:text-lg font-normal font-graphik leading-10 ">
								Thank you for your interest .{' '}
								<span className="hidden lg:inline-block">
									You will shortly receive the brochure on your registered
									number.
									<span className="underline hidden lg:inline-block ">
										For more details .{' '}
									</span>
								</span>
							</span>
							<a
								href="tel:+919513245671"
								className="text-white cursor-pointer text-sm sm:text-lg font-medium font-graphik underline leading-10">
								Call +91 95132 45671
							</a>
						</div>
					</div>
				</div>
			)}
			<div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center pt-12 pb-10">
				<div className="flex flex-col justify-start items-start gap-4 w-full">
					<div className="w-full flex flex-col justify-start items-start gap-5 lg:gap-[60px]">
						<div className="w-full flex flex-col lg:justify-start justify-center items-center lg:items-start gap-5">
							<div className="text-black md:text-4xl lg:text-6xl text-xl font-semibold font-manuale leading-loose sm:leading-[72px]">
								Give your team what <br className="hidden lg:block" />
								they <span className="inline-block line-through">
									need
								</span>{' '}
								deserve
							</div>
							<div className="text-gray-600  text-base md:text-2xl lg:text-3xl font-normal font-graphik leading-snug md:leading-10">
								Now get best in class laptops for your team
							</div>
						</div>
						<div className="w-full flex justify-start items-center">
							<div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start pb-12">
								<button
									className="px-4 sm:px-7 py-2 sm:py-3.5 leading-5 bg-black rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg"
									onClick={handleModalOpen}>
									TALK TO HUMAN
								</button>
							</div>
						</div>
					</div>
				</div>
				<Image alt="" width={650} height={650} src="/assets/startup/hero.png" />
			</div>
			{isModalOpen && (
				<StartupForm
					onClose={handleModalClose}
					onDownload={handleBrochureDownload}
				/>
			)}
		</div>
	);
}

export default HeroSection;
