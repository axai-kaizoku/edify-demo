import Image from 'next/image';
import LaptopCard from './LaptopCard';
import DetailedLaptopCard from './DetailedLaptopCard';
import CustomHeading from '../common/CustomHeading';
import Link from 'next/link';

export default function SecondSection() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[87%] sm:w-4/5 flex flex-col">
				<CustomHeading
					heading="Most Popular"
					styles="pt-8 pb-16"
				/>
				<div className="flex justify-between gap-12 flex-col sm:flex-row">
					{/* Static Image start*/}
					<div className="flex flex-row sm:flex-col gap-4 sm:gap-14">
						<div className="flex flex-col gap-5">
							<h3 className="sm:text-2xl text-lg font-manuale font-semibold leading-6">
								Dell Latitude 5490
							</h3>
							<p className="text-slate-500 whitespace-nowrap font-graphik font-normal sm:text-base text-xs leading-5">
								Intel Core i7 8th Gen,
								<br /> 8 GB RAM, 256 GB SSD
							</p>
							<Link
								href={
									'https://shop.edify.club/products/refurbished-dell-latitude-5490-core-i7-8th-gen-8gb-256gb-ssd-windows-10-pro'
								}
								target="_blank"
							>
								<p className="font-bold sm:text-base text-sm font-graphik border-b-2 border-b-navlink w-fit">
									SHOP NOW
								</p>
							</Link>
						</div>
						<Image
							className="w-40 h-auto sm:w-auto sm:h-auto"
							src="/assets/laptop-1.png"
							alt="laptop-1"
							width={577}
							height={433}
						/>
					</div>

					{/* Static Image end */}

					<div className="flex flex-col-reverse sm:flex-col gap-20">
						<DetailedLaptopCard
							href="https://shop.edify.club/products/copy-of-refurbished-lenovo-l450-5th-gen-intel-core-i5-thin-light-hd-laptop-8-gb-ram-256-gb-ssd-12-5?_pos=11&_fid=3d667371b&_ss=c"
							src="/assets/laptop-2.png"
							title="Lenovo ThinkPad L460"
							description="Intel Core i5 6th Gen, 8 GB RAM, 256 GB SSD"
						/>
						<div className="flex lg:gap-28 md:gap-6 gap-4">
							<LaptopCard
								href="https://shop.edify.club/products/dell-latitude-7470-core-i5-6th-gen-8gb-256gb-ssd-windows-10-pro-refurbished-laptop"
								src="/assets/laptop-3.png"
								title="Dell Latitude 7470"
								description="Intel Core i5 6th Gen, 8 GB RAM, 256 GB SSD"
							/>
							<LaptopCard
								href="https://shop.edify.club/products/dell-latitude-7480-core-i5-6th-gen-8gb-256gb-ssd-windows-10-pro"
								src="/assets/laptop-4.png"
								title="Dell Latitude 7480"
								description="Intel Core i5 6th Gen, 8 GB RAM, 256 GB SSD"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
