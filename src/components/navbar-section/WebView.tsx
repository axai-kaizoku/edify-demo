import Image from 'next/image';
import Link from 'next/link';

export default function WebView() {
	return (
		<div className="lg:flex justify-between w-full items-center hidden">
			{/* Web LOGO */}
			<Link href="/">
				<Image
					src="/assets/logo.webp"
					alt="logo"
					width={140}
					height={60}
					className="lg:block hidden"
				/>
			</Link>

			{/* Web NavLinks */}
			<ul className="hidden gap-12 font-semibold font-graphik lg:flex text-navlink">
				<li className="text-black">HOME</li>
				<li>SHOP</li>
				<li>BUSINESS</li>
				<li>BLOG</li>
				<li>ABOUT US</li>
			</ul>
			{/* Web NavLinks */}
			<div className="lg:flex gap-6 hidden">
				<Image
					src="/assets/cart.svg"
					alt="check-square"
					width={25}
					height={25}
				/>
				<Image
					src="/assets/wishlist.svg"
					alt="wishlist-icon"
					width={25}
					height={25}
				/>
			</div>
		</div>
	);
}
