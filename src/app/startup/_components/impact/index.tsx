import Image from 'next/image';

export default function ImpactSection() {
	return (
		<div className="py-4 sm:py-16">
			<Image
				src="/assets/about/about-impact.svg"
				alt="impact-about"
				width={1200}
				height={613}
				className="w-full h-auto sm:w-auto sm:h-auto"
			/>
		</div>
	);
}
