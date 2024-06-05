'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function WebView() {
	return (
		<div className="lg:flex justify-between w-full items-center hidden">
			{/* Web LOGO */}
			<div className="lg:block hidden">
				<Link
					href="/"
					aria-label="Link">
					<Image
						src="/assets/logo.webp"
						alt="logo"
						width={140}
						height={60}
						className="lg:block hidden"
					/>
				</Link>
			</div>

			{/* Web NavLinks */}
			<ul className="hidden gap-12 font-semibold font-graphik lg:flex text-slate-500">
				<li className="text-black">
					<Link
						href={'/'}
						aria-label="Read more ">
						HOME
					</Link>
				</li>

				<li>
					<Link
						href={'https://shop.edify.club/'}
						aria-label="Read more">
						SHOP
					</Link>
				</li>

				<li>
					<Link
						href={'https://edify.club/blog/'}
						aria-label="Read more ">
						BLOG
					</Link>
				</li>

				<li>
					<Link
						href="/about-us"
						aria-label="Read more ">
						ABOUT US
					</Link>
				</li>
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
