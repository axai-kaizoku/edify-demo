'use client';
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
		<div className="hidden bg-white z-50 lg:flex py-3 w-full top-0 left-0 fixed border-b justify-center items-center ">
			<div className="flex  w-[87%]  justify-center items-center ">
				<div className="flex justify-between items-center w-full">
					{/* Web LOGO */}
					<div className="lg:block hidden">
						<Link href="/" aria-label="Link">
							<img
								src="/assets/logo.webp"
								alt="logo"
								className="lg:block hidden object-contain w-[140px] h-[55px]"
							/>
						</Link>
					</div>

					{/* Web NavLinks */}
					<ul className="hidden gap-10 text-sm  font-semibold font-graphik lg:flex ">
						<li
							className={
								currentRoute === '/' ? 'text-black' : 'text-[#656B70]'
							}>
							<Link href="/" aria-label="Read more">
								HOME
							</Link>
						</li>

						<li
							className={
								currentRoute === 'https://edify.club/blog/'
									? 'text-black'
									: 'text-[#656B70]'
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
								currentRoute === '/startup' ? 'text-black' : 'text-[#656B70]'
							}>
							<Link href="/startup" aria-label="Read more">
								BUSINESS
							</Link>
						</li>

						<li
							className={
								currentRoute === '/b2b' ? 'text-black' : 'text-[#656B70]'
							}>
							<Link href="/b2b" aria-label="Read more">
								B2B
							</Link>
						</li>
						<li
							className={
								currentRoute === '/about-us' ? 'text-black' : 'text-[#656B70]'
							}>
							<Link href="/about-us" aria-label="Read more">
								ABOUT US
							</Link>
						</li>
					</ul>
					{/* Web NavLinks */}
					<div className="lg:flex gap-7 hidden">
						{/* <img
							src="/assets/whatsapp.svg"
							alt="whatsapp-icon"
							className="w-6 h-6"
						/> */}
						<a style={{color: 'cornflowerblue'}} href="tel:+91 9513245671"><img src="/assets/phone.svg" alt="phone-icon" className="w-6 h-6" /></a>
					</div>
				</div>
			</div>
		</div>
	);
}
