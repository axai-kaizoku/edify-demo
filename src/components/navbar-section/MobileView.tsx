'use client';
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileView() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`;

	const menuItems = [
		{ name: 'HOME', path: '/' },
		{ name: 'BUSINESS', path: '/startup' },
		{ name: 'ABOUT', path: '/about-us' },
		{ name: 'B2B', path: '/b2b' },
		{ name: 'BLOG', path: 'https://edify.club/blog/' },
	];

	const renderHamburgerLine = (className: string) => (
		<div className={`${genericHamburgerLine} ${className}`} />
	);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<div className="border-b">
			{/* Mobile LOGO */}
			<Link href="/" aria-label="Edify Logo">
				<img
					src="/assets/logo.webp"
					alt="logo"
					className="block lg:hidden object-contain w-[120px] h-[60px] mx-4 my-3"
				/>
			</Link>

			{/* Mobile Hamburger icon (menu icon) */}
			<div
				className="lg:hidden flex flex-col absolute pr-2.5 top-8 right-0 h-6 w-6 rounded justify-center items-center "
				onClick={() => setIsOpen(!isOpen)}>
				{renderHamburgerLine(
					isOpen ? 'rotate-45 translate-y-2.5  ' : 'opacity-100 ',
				)}
				{renderHamburgerLine(isOpen ? 'opacity-0' : 'opacity-100 ')}
				{renderHamburgerLine(
					isOpen ? '-rotate-45 -translate-y-1.5  ' : 'opacity-100 ',
				)}
			</div>

			{/* Mobile Menu */}
			<div
				className={`w-full bg-white block lg:hidden absolute top-0 left-0 right-0 transition-all duration-700 ${
					isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
				}`}>
				<ul
					style={{ height: isOpen ? '100vh' : '0' }}
					className="w-full h-screen bg-white border-b duration-1000 absolute top-16 px-6 py-6 flex flex-col gap-8">
					{menuItems.map((item, index) => (
						<li
							key={index}
							className="font-graphik text-sm font-bold leading-5">
							<Link
								href={item.path}
								aria-label="nav-links"
								onClick={() => setIsOpen(!isOpen)}
								className={isOpen ? 'block' : 'hidden'}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
