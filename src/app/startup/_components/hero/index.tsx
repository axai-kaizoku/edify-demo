/* eslint-disable @next/next/no-img-element */
'use client';
/* eslint-disable @next/next/no-img-element */
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
				<div className="w-full py-4 bg-green-500 fixed top-[68px] lg:top-[5rem] flex justify-center items-center">
					<div className="flex justify-center items-center gap-2.5">
						<div>
							<span className="text-white text-sm sm:text-lg font-normal font-graphik leading-10">
								Thank you for your interest.{' '}
								<span className="hidden lg:inline-block">
									You will shortly receive the brochure on your registered
									number.
									<span className="underline hidden lg:inline-block">
										For more details.
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

			<div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center md:pt-0 md:pb-0 lg:pt-12 lg:pb-12 xl:pt-16">
				<div className="flex flex-col justify-start items-start gap-4 w-full">
					<div className="w-full flex flex-col justify-start items-start gap-5 md:gap-8 xl:gap-11">
						<div className="pt-12 hidden lg:block">
							<div className="w-[200px] h-0.5 bg-black" />
						</div>
						<div className="text-center lg:text-start block justify-center items-center w-full lg:justify-start lg:items-start text-black md:text-3xl xl:text-[3.8rem] text-[1.2rem] font-semibold font-manuale leading-loose sm:leading-[72px] xl:leading-[80px]">
							Give your team what <br className="hidden lg:block" />
							they <span className="inline-block px-1 line-through">
								need
							</span>{' '}
							DESERVE
						</div>
						<div className="flex justify-center items-center w-full lg:justify-start lg:items-start text-gray-600 text-[1rem] md:text-[1.5rem] xl:text-[1.7rem] font-normal font-graphik leading-snug md:leading-10">
							Now get best in class laptops for your team
						</div>
						{/* <div className="w-full flex justify-start items-center">
							<div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start pb-12">
								<button
									className="px-4 sm:px-7 py-2 sm:py-3.5 leading-5 bg-black rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg"
									onClick={handleModalOpen}>
									DOWNLOAD CATALOGUE
								</button>
							</div>
						</div> */}
					</div>
				</div>
				<img
					alt="Hero"
					className="lg:w-[650px] lg:h-[350px] xl:h-[500px] object-contain xl:w-[700px] pb-6 md:pb-12 lg:pb-0"
					src="/assets/startup/hero.webp"
					loading="eager"
				/>
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
