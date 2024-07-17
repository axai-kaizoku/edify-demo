/* eslint-disable @next/next/no-img-element */
import CustomButtom from '@/components/common/CustomButton';

function Partners() {
	return (
		<div className="flex flex-col gap-10 md:gap-14 lg:gap-20 pt-10">
			<div className="flex justify-between w-full">
				<h2 className="text-[1.2rem] sm:text-4xl text-black font-manuale font-semibold">
					How smooth it is to Partner
					<br className="hidden lg:block" /> with Edify?
				</h2>
				<CustomButtom
					title="ENQUIRE NOW"
					styles="lg:block hidden"
					href="https://shop.edify.club/collections/all"
				/>
			</div>
			<div className="flex flex-col w-full gap-16">
				<div className="w-full flex justify-between">
					<NumCard
						num={1}
						src="/assets/b2b/partners/partner-1.png"
						style="sm:w-[180px] w-[50px] h-[50px] sm:h-[180px]"
						content="Fill the form to get started"
					/>
					<NumCard
						src="/assets/b2b/partners/partners-2.png"
						style="sm:w-[150px] w-[50px] h-[60px] sm:h-[180px]"
						num={2}
						content="Our Expert team will contact you"
					/>
				</div>
				<div className="w-full flex justify-between ">
					<NumCard
						src="/assets/b2b/partners/partners-3.png"
						style="sm:w-[180px]  w-[50px] h-[50px] sm:h-[180px]"
						num={3}
						content="Select and customise models, and place order"
					/>
					<NumCard
						src="/assets/b2b/partners/partners-4.png"
						style="sm:w-[150px] w-[60px] h-[45px] sm:h-[114px]"
						num={4}
						content="Laptops will be shipped  in  1-2 business days"
					/>
				</div>
			</div>
		</div>
	);
}

function NumCard({
	num,
	content,
	style,
	src,
}: {
	src: string;
	num: number;
	content: string;
	style: string;
}) {
	return (
		<div className="flex flex-row items-center justify-start gap-4 w-full">
			<img
				alt="partners"
				src={src}
				className={` object-contain ${style}`}
			/>
			<div className="flex flex-col  gap-2 sm:gap-4">
				<div className="text-[0.9rem] sm:text-4xl text-black font-manuale font-semibold">
					{num}.
				</div>

				<div className="text-[0.7rem] font-graphik w-5/6 lg:w-[280px]  md:text-xl  md:leading-relaxed text-[#333333]">
					{content}
				</div>
			</div>
		</div>
	);
}

export default Partners;
