/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import AboutSection from './_components/AboutSection';
import { AboutSectionInfo } from '@/constants';
import { siteConfigAbout } from '@/config/site';
import Container from '@/components/common/Container';
import CustomButtom from '@/components/common/CustomButton';

export const metadata: Metadata = {
	title: siteConfigAbout.name,
	description: siteConfigAbout.description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfigAbout.url,
		title: siteConfigAbout.name,
		description: siteConfigAbout.description,
		siteName: siteConfigAbout.name,
		images: ['/og_about.jpg'],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigAbout.name,
		description: siteConfigAbout.description,
		images: ['/og_about.jpg'],
	},
	icons: {
		icon: '/logo.png',
	},
};

export default function AboutUs() {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="flex flex-col pb-20 gap-10 ">
					<Container
						isBorder={false}
						className="py-16 sm:pt-5 lg:pt-2 xl:pt-12">
						<div className="w-full flex flex-col-reverse lg:flex-row gap-3 sm:gap-6 lg:gap-0 justify-center items-center lg:pt-24 lg:pb-20 xl:py-12">
							<div className="flex flex-col justify-start items-start gap-4  w-full lg:pt-[3.1rem] xl:pt-[3.3rem]">
								<div className="w-full flex flex-col justify-start items-start gap-5 lg:gap-8 xl:gap-[60px]">
									<div className="w-full flex flex-col-reverse lg:flex-col lg:justify-start justify-center items-center lg:items-start sm:gap-8">
										<div className="text-slate-600 md:text-grey-800 text-lg lg:text-[1.3rem] xl:text-3xl whitespace-nowrap font-normal font-graphik">
											ONE REFURBISHED LAPTOP AT A TIME
										</div>
										<div className="text-black text-2xl sm:text-5xl lg:text-[2.9rem] xl:text-6xl whitespace-nowrap font-semibold font-manuale leading-[3.5rem] lg:leading-[46px] xl:leading-[72px]">
											PROMOTING CIRCULAR <br className="hidden lg:block" />
											ECONOMY
										</div>
									</div>
									<div className="py-8" />
								</div>
							</div>
							<img
								alt="hero-image"
								src="/assets/about/about-us.png"
								className="w-[240px] h-[180px] sm:w-[440px] sm:h-[350px] lg:w-[420px] p-1 lg:h-[360px] xl:w-[550px] xl:h-[500px] object-contain"
							/>
						</div>
					</Container>
					<div className="w-full h-full relative">
						<div className="absolute w-full flex flex-col gap-0 sm:gap-1 lg:gap-1.5 xl:gap-8 pl-[4%] pt-[1%] sm:pl-[6.13%] sm:pt-7 lg:pt-[8%] xl:pt-[9%]">
							<h3 className="sm:text-xl text-sm lg:text-[2rem] xl:text-[2.5rem] sm:py-2 font-manuale font-semibold flex flex-col lg:gap-2.5 xl:gap-6">
								<div>
									<span className="text-[#267C46]">Impact</span> Of Edify
								</div>
								<div>in last 1 year</div>
							</h3>
							<div className="font-graphik text-[0.5rem] sm:text-base lg:text-[1.1rem] xl:text-[1.5rem] w-full flex flex-col lg:gap-1 xl:gap-2 2xl:gap-3 py-2 text-slate-600">
								<div>We are proud of what we’ve achieved</div>{' '}
								<div>and excited about our next Big Goals</div>
							</div>
						</div>
						<img
							alt="bg"
							src="/assets/impact-bg.svg"
							className="xl:w-screen xl:h-screen"
						/>
					</div>
					<Container isBorder={false}>
						<div className="flex flex-col gap-8">
							{AboutSectionInfo.map((item, i) => (
								<AboutSection
									key={i}
									src={item.src}
									title={item.title}
									description={item.description}
									isImageFirst={item.isImageFirst}
								/>
							))}
						</div>
					</Container>
				</div>
				{/* Aboutus last section */}
				{/* <div className="bg-center w-full h-[700px] flex flex-col-reverse justify-center sm:flex-row items-center bg-cover bg-[url('/assets/about/about-4.webp')]">
					<div className="w-2/4 lg:block hidden"></div>
					<div className="w-full sm:w-[40%] flex flex-col gap-4 bg-white  p-8">
						<h3 className="font-manuale font-semibold text-2xl sm:text-4xl">
							Join the Edify Movement
						</h3>
						<p className="text-slate-500 sm:text-base text-sm ">
							Together, we can make a difference. Whether you’re a student, a
							professional, or someone looking for a reliable device, Edify has
							the right laptop for you.
						</p>
						<p className="text-slate-500 sm:text-base text-sm ">
							Let’s work together to create a more sustainable future, one
							refurbished laptop at a time.
						</p>
						<CustomButtom
							href="https://shop.edify.club/collections/all"
							title="EXPLORE"
							styles="w-full"
						/>
					</div>
				</div> */}
			</div>
		</div>
	);
}
