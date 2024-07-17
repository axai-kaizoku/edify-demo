/* eslint-disable @next/next/no-img-element */
import CustomHeading from '@/components/common/CustomHeading';

export default function StartUps() {
	return (
		<>
			<div className="flex flex-col pt-6 lg:pt-20">
				<div className="text-center">
					<CustomHeading
						heading="Trusted by 50+ Startups"
						styles="pb-0 sm:pb-1"
					/>
					<div className="font-graphik py-2.5 sm:py-6 text-slate-500 text-[0.8rem] sm:text-lg">
						Empowering the best teams
					</div>
				</div>
				{/* Desktop */}
				<div className="hidden lg:flex items-center flex-wrap justify-between pb-10">
					<img
						src="/livspace_logo.png"
						alt="Livespace"
						className=" object-contain h-[50px] w-[230px]"
					/>
					<img
						src="/assets/startup/startups/apna-logo.webp"
						alt="Apna"
						className="w-[100px] h-[100px] object-contain"
					/>
					<img
						src="/assets/startup/startups/electricpe-logo.png"
						alt="electric pe"
						width={150}
						height={70}
						className="w-[150px] h-[70px] object-contain"
					/>
					<img
						src="/assets/startup/startups/apnamart-logo.webp"
						alt="apnamart"
						width={140}
						height={70}
					/>
					<img
						src="/assets/startup/startups/urban-vault-icon.png"
						alt="urbanvault"
						width={80}
						height={80}
					/>
					<img
						src="/assets/startup/startups/finagg-logo.png"
						alt="finagg"
						width={65}
						height={70}
					/>
					<img
						src="/assets/startup/startups/stars-logo.png"
						alt="stars"
						width={120}
						height={70}
					/>
				</div>
				{/* Tablets */}
				<div className="hidden sm:flex md:flex lg:hidden items-center flex-wrap justify-start pb-10 gap-4">
					<div className="flex flex-row justify-around w-full">
						<img
							src="/assets/startup/startups/livspace-logo.png"
							alt="Livespace"
							width={230}
							height={50}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/apna-logo.webp"
							alt="Apna"
							width={80}
							height={80}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/electricpe-logo.png"
							alt="electric pe"
							width={150}
							height={70}
							className="object-contain"
						/>
					</div>
					<div className="flex flex-row justify-between w-full">
						<img
							src="/assets/startup/startups/apnamart-logo.webp"
							alt="apnamart"
							width={140}
							height={70}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/urban-vault-icon.png"
							alt="urbanvault"
							width={80}
							height={80}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/finagg-logo.png"
							alt="finagg"
							width={65}
							height={70}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/stars-logo.png"
							alt="stars"
							width={120}
							height={70}
							className="object-contain"
						/>
					</div>
				</div>
				{/* Mobile */}
				<div className="py-4 w-full items-center justify-between sm:hidden flex flex-col pb-8 gap-6">
					<div className="w-full flex flex-row justify-between px-2">
						<img
							src="/assets/startup/startups/livspace-logo.png"
							alt="Livespace"
							width={75}
							height={20}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/joyspoon.png"
							alt="joyspoon"
							width={80}
							height={25}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/streak.png"
							alt="streak"
							width={90}
							height={15}
							className="object-contain"
						/>
					</div>
					<div className="w-full flex flex-row justify-between">
						<img
							src="/assets/startup/startups/urban-vault-icon.png"
							alt="urbanvault"
							width={40}
							height={40}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/electricpe-logo.png"
							alt="electric pe"
							width={58}
							height={40}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/apnamart-logo.webp"
							alt="apnamart"
							width={60}
							height={60}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/longroad.png"
							alt="longroad"
							width={90}
							height={20}
							className="object-contain"
						/>
					</div>

					<div className="w-full flex flex-row justify-between">
						<img
							src="/assets/startup/startups/stars-logo.png"
							alt="stars"
							width={65}
							height={50}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/brown-unknown.webp"
							alt="brown-unknown"
							width={40}
							height={40}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/jetplast.png"
							alt="jetplast"
							width={34}
							height={40}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/finagg-logo.png"
							alt="finagg"
							width={37}
							height={40}
							className="object-contain"
						/>
						<img
							src="/assets/startup/startups/apna-logo.webp"
							alt="Apna"
							width={40}
							height={40}
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
