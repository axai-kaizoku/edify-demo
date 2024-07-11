import CustomButtom from '@/components/common/CustomButton';

function Partners() {
	return (
		<div className="flex flex-col gap-10 md:gap-14 lg:gap-20 pt-10">
			<div className="flex justify-between w-full">
				<h2 className="text-2xl sm:text-4xl text-black font-manuale font-bold">
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
				<div className="w-full lg:w-[52%] flex justify-between">
					<NumCard num={1} content="Fill the form to get started" />
					<NumCard num={2} content="Our Expert team will contact you" />
				</div>
				<div className="w-full lg:w-[52%] flex justify-between">
					<NumCard
						num={3}
						content="Select and customise models, and place order"
					/>
					<NumCard
						num={4}
						content="Laptops will be shipped  in  1-2 business days"
					/>
				</div>
			</div>
		</div>
	);
}

function NumCard({ num, content }: { num: number; content: string }) {
	return (
		<div className="flex flex-col gap-4 w-[210px]">
			<div className="text-2xl sm:text-4xl text-black font-manuale font-bold">
				{num}.
			</div>
			<div className="font-graphik w-5/6 lg:w-[280px] text-sm md:text-xl leading-6 md:leading-relaxed text-[#333333]">
				{content}
			</div>
		</div>
	);
}

export default Partners;
