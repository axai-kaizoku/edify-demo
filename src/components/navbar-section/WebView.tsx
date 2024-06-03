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
				<Link href={'/'}>
					<li className="text-black">HOME</li>
				</Link>
				<Link href={'https://shop.edify.club/'}>
					<li>SHOP</li>
				</Link>
				<Link href={'https://edify.club/blog/'}>
					<li>BLOG</li>
				</Link>
				<Link href="/about-us">
					<li>ABOUT US</li>
				</Link>
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
