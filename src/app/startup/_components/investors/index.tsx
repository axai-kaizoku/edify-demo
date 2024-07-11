import CustomHeading from '@/components/common/CustomHeading';
import LogoComponentCard from '@/components/logo-section/LogoComponentCard';

export default function Investors() {
	return (
		<>
			<div className="flex flex-col gap-6  sm:gap-16">
				<CustomHeading heading="Investors" />
				<div className="hidden sm:flex items-center justify-between pb-10">
					<LogoComponentCard
						src="/assets/hp_icon.webp"
						alt="HP"
						width={60}
						height={60}
					/>
					<LogoComponentCard
						src="/assets/apple.svg"
						alt="Apple"
						width={50}
						height={60}
					/>
					<LogoComponentCard
						src="/assets/lenovo.webp"
						alt="Lenovo"
						width={150}
						height={50}
					/>
					<LogoComponentCard
						src="/assets/dell.webp"
						alt="Dell"
						width={130}
						height={40}
					/>
				</div>
				<div className="py-4  items-center justify-between sm:hidden flex pb-8">
					<LogoComponentCard
						src="/assets/hp_icon.webp"
						alt="HP"
						width={30}
						height={30}
					/>
					<LogoComponentCard
						src="/assets/apple.svg"
						alt="Apple"
						width={25}
						height={30}
					/>
					<LogoComponentCard
						src="/assets/lenovo.webp"
						alt="Lenovo"
						width={80}
						height={25}
					/>
					<LogoComponentCard
						src="/assets/dell.webp"
						alt="Dell"
						width={30}
						height={30}
					/>
				</div>
			</div>
		</>
	);
}
