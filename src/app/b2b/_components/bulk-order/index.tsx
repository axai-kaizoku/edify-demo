'use client';
import Image from 'next/image';
import BulkOrderForm from './BulkOrderForm';
import CustomHeading from '@/components/common/CustomHeading';
import { useState } from 'react';

function BulkOrder() {
	const [messageOpen, setMessageOpen] = useState(false);

	const handleMessage = () => {
		setMessageOpen(true);
	};

	return (
		<>
			{messageOpen && (
				<div className="absolute lg:fixed z-50 top-[4rem] lg:top-[4.7rem] left-0 w-full h-20">
					<div className="w-full py-4 bg-green-500 flex justify-center items-center">
						<div className="flex justify-center items-center gap-2.5">
							<div>
								<span className="text-white text-sm sm:text-lg font-normal font-graphik leading-10 ">
									Thank you for your interest .{' '}
									<span className="hidden lg:inline-block">
										You will shortly receive the brochure on your registered
										number.
										<span className="underline hidden lg:inline-block ">
											For more details .{' '}
										</span>
									</span>
								</span>
								<a
									href="tel:+919513245671"
									className="text-white text-sm sm:text-lg font-medium font-graphik underline leading-10">
									Call +91 95132 45671
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="hidden flex-col py-14 sm:flex">
				<div className="text-center">
					<CustomHeading heading="Looking to Buy Laptops in Bulk?" />
					<div className="font-graphik py-6 text-slate-500 text-lg">
						Fill the form and we will get back to you!
					</div>
				</div>
				<div className="flex w-full flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between">
					<div className="lg:w-[45%] w-full">
						<BulkOrderForm onButtonClick={handleMessage} />
					</div>
					<div className="lg:w-2/4 w-full mt-24 flex justify-center">
						<img
							src="/assets/b2b/bulk-order.webp"
							alt="Bulk Order Image"
							width={650}
							height={436}
							className="scale-x-[-1]"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default BulkOrder;
