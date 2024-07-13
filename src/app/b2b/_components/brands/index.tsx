/* eslint-disable @next/next/no-img-element */
import CustomHeading from '@/components/common/CustomHeading';

function Brands() {
	return (
		<>
			<div className="flex flex-col gap-6  sm:gap-16 xl:pt-10">
				<CustomHeading heading="Get Laptops from Top Brands" />
				<div className="hidden sm:flex items-center justify-between pb-10">
					<img src="/assets/hp_icon.webp" alt="HP" width={60} height={60} />
					<img src="/assets/apple.svg" alt="Apple" width={50} height={60} />
					<img src="/assets/lenovo.webp" alt="Lenovo" width={150} height={50} />
					<img src="/assets/dell.webp" alt="Dell" width={130} height={40} />
				</div>
				<div className="py-4  items-center justify-between sm:hidden flex pb-8">
					<img src="/assets/hp_icon.webp" alt="HP" width={30} height={30} />
					<img src="/assets/apple.svg" alt="Apple" width={25} height={30} />
					<img src="/assets/lenovo.webp" alt="Lenovo" width={80} height={25} />
					<img src="/assets/dell.webp" alt="Dell" width={30} height={30} />
				</div>
			</div>
		</>
	);
}

export default Brands;
