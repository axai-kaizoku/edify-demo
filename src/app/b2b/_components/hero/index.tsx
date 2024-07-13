/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import CatalogueModal from './CatalogueModal';
import EnquireModal from './EnquireModal';

function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEnquireOpen, setIsEnquireOpen] = useState(false);
	const [isThankYouVisible, setIsThankYouVisible] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleEnquireOpen = () => {
		setIsEnquireOpen(true);
	};

	const handleEnquireClose = () => {
		setIsEnquireOpen(false);
	};

	const handleBrochureDownload = () => {
		setIsModalOpen(false);
		setIsThankYouVisible(true);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="fixed lg:hidden bottom-0 z-50 w-full h-[45px] px-[21px] py-4 bg-black flex-col justify-center items-center gap-2.5 inline-flex">
				<div className="justify-start items-start gap-1 inline-flex">
					<div className="w-[164px] h-3.5 text-white text-sm font-normal font-graphik">
						Looking to buy a laptop?
					</div>
					<div
						onClick={handleEnquireOpen}
						className="w-[121px] h-3.5 text-white cursor-pointer text-sm font-medium font-graphik underline">
						ENQUIRE NOW
					</div>
				</div>
			</div>
			{isThankYouVisible && (
				<div className="w-full py-4 bg-green-500 absolute lg:fixed z-50 top-[68px] lg:top-[76px] flex justify-center items-center">
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
								className="text-white text-sm sm:text-lg font-medium font-graphik cursor-pointer underline leading-10">
								Call +91 95132 45671
							</a>
						</div>
					</div>
				</div>
			)}

			<div className="w-full flex flex-col-reverse lg:flex-row sm:gap-6 lg:gap-0 justify-center items-center lg:pt-16 lg:pb-14 xl:py-16">
				<div className="flex flex-col justify-start items-start gap-4  w-full lg:pt-[3.1rem] xl:pt-[3.3rem]">
					<div className="w-full flex flex-col justify-start items-start gap-5 lg:gap-8 xl:gap-[60px]">
						<div className="w-full flex flex-col lg:justify-start justify-center items-center lg:items-start gap-5">
							<div className="text-black text-2xl sm:text-5xl lg:text-[2.5rem] xl:text-6xl whitespace-nowrap  font-semibold font-manuale leading-loose lg:leading-[46px] xl:leading-[72px]">
								Edify Refurbished <br className="hidden lg:block" />
								Laptops
							</div>
							<div className="text-grey-600 md:text-grey-800 text-lg lg:text-lg xl:text-3xl whitespace-nowrap font-normal font-graphik leading-snug md:leading-10">
								Best Partner for your Business
							</div>
						</div>
						<div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start pb-12">
							<button
								className="px-4 sm:px-7 py-2 sm:py-3.5 leading-5 bg-black rounded text-white flex justify-center items-center font-medium text-xs sm:text-lg"
								onClick={handleModalOpen}>
								DOWNLOAD CATALOGUE
							</button>
						</div>
					</div>
				</div>
				<img
					alt="hero-image"
					src="/assets/b2b/hero.png"
					className="w-[240px] h-[180px] sm:w-[440px] sm:h-[350px] lg:w-[490px] p-1 lg:h-[420px] xl:w-[550px] xl:h-[520px] object-contain"
				/>
			</div>
			{isModalOpen && (
				<CatalogueModal
					onClose={handleModalClose}
					onDownload={handleBrochureDownload}
				/>
			)}
			{isEnquireOpen && (
				<EnquireModal
					onClose={handleEnquireClose}
					onDownload={handleBrochureDownload}
				/>
			)}
		</div>
	);
}

export default HeroSection;
