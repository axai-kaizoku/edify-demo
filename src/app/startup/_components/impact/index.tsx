/* eslint-disable @next/next/no-img-element */
export default function ImpactSection() {
	return (
		<div className="w-full h-full relative pt-4 pb-4">
			<div className="absolute w-full flex flex-col gap-0 sm:gap-1 lg:gap-1.5 xl:gap-8 pl-[4%] pt-[1%] sm:pl-[6.13%] sm:pt-7 lg:pt-[8%] xl:pt-[9%]">
				<h3 className="sm:text-xl text-sm lg:text-[2rem] xl:text-[2.5rem] sm:py-2 font-manuale font-semibold flex flex-col lg:gap-2.5 xl:gap-6">
					<div>
						<span className="text-[#267C46]">Impact</span> Of Edify
					</div>
					<div>in last 1 year</div>
				</h3>
				<div className="font-graphik text-[0.5rem] sm:text-base lg:text-[1.1rem] xl:text-[1.5rem] w-full flex flex-col lg:gap-1 xl:gap-2 2xl:gap-3 py-2 text-slate-600">
					<div>We are proud of what we’ve achieved</div>{' '}
					<div>
						and excited about our next{' '}
						<span className="text-[#267C46] font-bold">big goals.</span>
					</div>
				</div>
			</div>
			<img
				alt="bg"
				src="/assets/impact-bg.svg"
				className="xl:w-screen xl:h-screen"
			/>
		</div>
	);
}
