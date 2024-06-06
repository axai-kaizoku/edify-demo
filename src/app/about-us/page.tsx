import { Metadata } from 'next';
import Image from 'next/image';
import CustomButtom from '@/components/common/CustomButton';
import AboutSection from './_components/AboutSection';
import { AboutSectionInfo } from '@/constants';
import { siteConfigAbout } from '@/config/site';

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
		images: '/logo.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfigAbout.name,
		description: siteConfigAbout.description,
		images: '/logo.png',
	},
	icons: {
		icon: '/logo.png',
	},
};

export default function AboutUs() {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="flex flex-col w-[87%] pb-20 gap-10 sm:w-4/5">
					<div className="flex flex-col lg:flex-row py-10 lg:py-20 justify-between items-center">
						<div className="flex flex-col gap-4">
							<p className="font-graphik text-lg sm:text-xl font-normal">
								One Refurbished Laptop at a Time
							</p>
							<h3 className="font-manuale font-semibold text-2xl sm:text-5xl">
								PROMOTING CIRCULAR <br className="lg:block hidden" /> ECONOMY
							</h3>
						</div>
						<Image
							src="/assets/about-us.png"
							alt="About Us"
							width={480}
							height={350}
							className="w-52 h-auto sm:w-auto sm:h-auto"
						/>
					</div>
					<Image
						src="/assets/about-impact.svg"
						alt="impact-about"
						width={1200}
						height={613}
						className="w-full h-auto sm:w-auto sm:h-auto"
					/>

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
				</div>
				<div className="bg-center w-full h-[700px] flex flex-col-reverse justify-center sm:flex-row items-center bg-cover bg-[url('/assets/about-4.png')]">
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
							title="EXPLORE"
							styles="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
