'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WebView() {
	const pathname = usePathname();
	const [currentRoute, setCurrentRoute] = useState('');

	useEffect(() => {
		setCurrentRoute(pathname);
	}, [pathname]);

	return (
		<div className="lg:flex justify-between w-full items-center hidden">
			{/* Web LOGO */}
			<div className="lg:block hidden">
				<Link
					href="/"
					aria-label="Link"
				>
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
				<li className={currentRoute === '/' ? 'text-black' : 'text-slate-500'}>
					<Link
						href="/"
						aria-label="Read more"
					>
						HOME
					</Link>
				</li>

				<li
					className={
						currentRoute === 'https://shop.edify.club/'
							? 'text-black'
							: 'text-slate-500'
					}
				>
					<Link
						href="https://shop.edify.club/"
						aria-label="Read more"
						target="_blank"
					>
						SHOP
					</Link>
				</li>

				<li
					className={
						currentRoute === 'https://edify.club/blog/'
							? 'text-black'
							: 'text-slate-500'
					}
				>
					<Link
						href="https://edify.club/blog/"
						aria-label="Read more"
						target="_blank"
					>
						BLOG
					</Link>
				</li>

				<li
					className={
						currentRoute === '/about-us' ? 'text-black' : 'text-slate-500'
					}
				>
					<Link
						href="/about-us"
						aria-label="Read more"
					>
						ABOUT US
					</Link>
				</li>
			</ul>
			{/* Web NavLinks */}
			<div className="lg:flex gap-6 hidden opacity-0">
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
