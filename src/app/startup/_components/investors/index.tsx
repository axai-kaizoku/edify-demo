import CustomHeading from '@/components/common/CustomHeading';
import LogoComponentCard from '@/components/logo-section/LogoComponentCard';

export default function StartUps() {
	return (
		<>
			<div className="flex flex-col gap-4  sm:gap-16 py-4 sm:py-8">
				<div className="text-center">
					<CustomHeading heading="Backed by the best Investors" />
					<div className="font-graphik py-3 sm:py-6 text-slate-500 text-lg sm:text-xl">
						We’re a cross-disciplinary team that loves to create great
						experiences for our customers.
					</div>
				</div>
				{/* Desktop */}
				<div className="hidden lg:flex items-center flex-wrap justify-between pb-10 gap-4">
					<LogoComponentCard
						src="/assets/startup/investors/prime-venture-partners.png"
						alt="prime-venture-partners"
						width={156}
						height={50}
					/>
					<LogoComponentCard
						src="/assets/startup/investors/inflection-point-ventures.png"
						alt="inflection-point-ventures"
						width={75}
						height={60}
					/>
					<LogoComponentCard
						src="/assets/startup/investors/beenext-logo.png"
						alt="electric pe"
						width={365}
						height={40}
					/>
					<LogoComponentCard
						src="/assets/startup/investors/DI-logo.png"
						alt="apnamart"
						width={60}
						height={60}
					/>
				</div>
				{/* Tablet */}
				<div className="hidden sm:flex md:flex lg:hidden items-center flex-wrap justify-start pb-10 gap-4">
					<div className="flex flex-row justify-around w-full">
						<LogoComponentCard
							src="/assets/startup/investors/prime-venture-partners.png"
							alt="prime-venture-partners"
							width={156}
							height={50}
						/>
						<LogoComponentCard
							src="/assets/startup/investors/inflection-point-ventures.png"
							alt="inflection-point-ventures"
							width={75}
							height={60}
						/>
					</div>
					<div className="flex flex-row justify-around w-full">
						<LogoComponentCard
							src="/assets/startup/investors/beenext-logo.png"
							alt="electric pe"
							width={365}
							height={40}
						/>
						<LogoComponentCard
							src="/assets/startup/investors/DI-logo.png"
							alt="apnamart"
							width={60}
							height={60}
						/>
					</div>
				</div>
				{/* Mobile */}
				<div className="py-4 w-full items-center justify-between sm:hidden flex pb-8 px-7">
					<LogoComponentCard
						src="/assets/startup/investors/inflection-point-ventures.png"
						alt="inflection-point-ventures"
						width={37}
						height={30}
					/>
					<LogoComponentCard
						src="/assets/startup/investors/prime-venture-partners.png"
						alt="prime-venture-partners"
						width={80}
						height={25}
					/>

					<LogoComponentCard
						src="/assets/startup/investors/DI-logo.png"
						alt="apnamart"
						width={30}
						height={30}
					/>
					<LogoComponentCard
						src="/assets/startup/investors/beenext.png"
						alt="electric pe"
						width={30}
						height={30}
					/>
				</div>
			</div>
		</>
	);
}
