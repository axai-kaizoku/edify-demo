import Image from 'next/image';
import AboutSection from './_components/AboutSection';
import { AboutSectionInfo } from '@/constants';
import CustomButtom from '@/components/common/CustomButton';

export default function AboutUs() {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="flex flex-col w-[87%] gap-10 sm:w-4/5">
					<div className="flex flex-col lg:flex-row py-10 sm:py-20 justify-between items-center">
						<div className="flex flex-col gap-4">
							<p className="font-graphik text-lg sm:text-xl font-normal">
								One Refurbished Laptop At a Time
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
						/>
					</div>
					<div className="flex flex-col py-3 sm:py-5 gap-10">
						<p className="font-graphik font-normal text-lg sm:text-xl">
							OUR PASSION
						</p>
						<h3 className="text-4xl font-manuale font-semibold">
							Making the world a better place!
						</h3>
					</div>
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
				<div className="bg-center w-full h-[700px]  flex items-center bg-cover bg-[url('/assets/about-4.png')]">
					<div className="w-2/4  "></div>
					<div className="w-[40%] flex flex-col gap-4 bg-white  p-8">
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
