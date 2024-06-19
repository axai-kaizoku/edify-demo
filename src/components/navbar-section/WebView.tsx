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
				<li className={currentRoute === '/' ? 'text-black' : 'text-slate-500'}>
					<Link
						href="/"
						aria-label="Read more">
						HOME
					</Link>
				</li>

				<li
					className={
						currentRoute === 'https://edify.club/blog/'
							? 'text-black'
							: 'text-slate-500'
					}>
					<Link
						href="https://edify.club/blog/"
						aria-label="Read more"
						target="_blank">
						BLOG
					</Link>
				</li>

				<li
					className={
						currentRoute === '/about-us' ? 'text-black' : 'text-slate-500'
					}>
					<Link
						href="/about-us"
						aria-label="Read more">
						ABOUT US
					</Link>
				</li>
			</ul>
			{/* Web NavLinks */}
			<div className="lg:flex gap-6 hidden">
				<Image
					src="/assets/whatsapp.svg"
					alt="whatsapp-icon"
					width={25}
					height={25}
					className="w-auto h-auto"
				/>
				<Image
					src="/assets/phone.svg"
					alt="phone-icon"
					width={25}
					height={25}
					className="w-auto h-auto"
				/>
			</div>
		</div>
	);
}
