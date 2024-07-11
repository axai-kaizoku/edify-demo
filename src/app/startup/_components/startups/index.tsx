import CustomHeading from '@/components/common/CustomHeading';
import LogoComponentCard from '@/components/logo-section/LogoComponentCard';

export default function StartUps() {
	return (
		<>
			<div className="flex flex-col gap-2  sm:gap-16 py-4 sm:py-8">
				<div className="text-center">
					<CustomHeading heading="Trusted by 50+ Startups" />
					<div className="font-graphik py-6 text-slate-500 text-lg">
						Empowering the best teams
					</div>
				</div>
				{/* Desktop */}
				<div className="hidden lg:flex items-center flex-wrap justify-between pb-10 gap-4">
					<LogoComponentCard
						src="/assets/startup/startups/livspace-logo.png"
						alt="Livespace"
						width={230}
						height={50}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/apna-logo.png"
						alt="Apna"
						width={80}
						height={80}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/electricpe-logo.png"
						alt="electric pe"
						width={150}
						height={70}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/apnamart-logo.png"
						alt="apnamart"
						width={140}
						height={70}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/urban-vault-icon.png"
						alt="urbanvault"
						width={80}
						height={80}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/finagg-logo.png"
						alt="finagg"
						width={65}
						height={70}
					/>
					<LogoComponentCard
						src="/assets/startup/startups/stars-logo.png"
						alt="stars"
						width={120}
						height={70}
					/>
				</div>
				{/* Tablets */}
				<div className="hidden sm:flex md:flex lg:hidden items-center flex-wrap justify-start pb-10 gap-4">
					<div className="flex flex-row justify-around w-full">
						<LogoComponentCard
							src="/assets/startup/startups/livspace-logo.png"
							alt="Livespace"
							width={230}
							height={50}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/apna-logo.png"
							alt="Apna"
							width={80}
							height={80}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/electricpe-logo.png"
							alt="electric pe"
							width={150}
							height={70}
						/>
					</div>
					<div className="flex flex-row justify-between w-full">
						<LogoComponentCard
							src="/assets/startup/startups/apnamart-logo.png"
							alt="apnamart"
							width={140}
							height={70}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/urban-vault-icon.png"
							alt="urbanvault"
							width={80}
							height={80}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/finagg-logo.png"
							alt="finagg"
							width={65}
							height={70}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/stars-logo.png"
							alt="stars"
							width={120}
							height={70}
						/>
					</div>
				</div>
				{/* Mobile */}
				<div className="py-4 w-full items-center justify-between sm:hidden flex flex-col pb-8 gap-6">
					<div className="w-full flex flex-row justify-between px-2">
						<LogoComponentCard
							src="/assets/startup/startups/livspace-logo.png"
							alt="Livespace"
							width={75}
							height={20}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/joyspoon.png"
							alt="joyspoon"
							width={80}
							height={25}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/streak.png"
							alt="streak"
							width={90}
							height={15}
						/>
					</div>
					<div className="w-full flex flex-row justify-between">
						<LogoComponentCard
							src="/assets/startup/startups/urban-vault-icon.png"
							alt="urbanvault"
							width={40}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/electricpe-logo.png"
							alt="electric pe"
							width={58}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/apnamart-logo.png"
							alt="apnamart"
							width={60}
							height={60}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/longroad.png"
							alt="longroad"
							width={90}
							height={20}
						/>
					</div>

					<div className="w-full flex flex-row justify-between">
						<LogoComponentCard
							src="/assets/startup/startups/stars-logo.png"
							alt="stars"
							width={65}
							height={50}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/brown-unknown.png"
							alt="brown-unknown"
							width={40}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/jetplast.png"
							alt="jetplast"
							width={34}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/finagg-logo.png"
							alt="finagg"
							width={37}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/startups/apna-logo.png"
							alt="Apna"
							width={40}
							height={40}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
