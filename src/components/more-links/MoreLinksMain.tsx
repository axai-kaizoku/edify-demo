'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { FooterCategory, FooterPage } from '@/types';

export default function MoreLinksMain({ data }: { data: FooterCategory[] }) {
	const [loading, setLoading] = useState(true);
	const [showLinks, setShowLinks] = useState(false);
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

	useEffect(() => {
		if (data.length > 0) {
			setLoading(false);
		}
	}, [data]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileOrTablet(window.innerWidth <= 1024);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<>
			{isMobileOrTablet && (
				<button
					onClick={toggleLinks}
					className="w-fit sm:px-24 text-sm hover:underline flex max-sm:py-2">
					More Links
				</button>
			)}
			<div
				className={`links-container w-full flex justify-between items-center transition-all duration-500 ${
					!isMobileOrTablet || showLinks
						? 'h-fit  opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}>
				{loading ? (
					<div className="flex justify-center items-center w-full">
						<img
							src="/assets/loading.svg"
							className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
							alt="loading"
						/>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full  xl:gap-5">
						{data?.map((res: FooterCategory, index: number) => (
							<div
								key={index}
								className="">
								<h1 className="text-sm xl:text-[1rem] font-semibold text-slate-600 font-graphik mb-2 leading-7">
									{res.categoryValue}
								</h1>
								<ul>
									{res.pages.map((page: FooterPage, pageIndex: number) => (
										<li
											key={pageIndex}
											className="text-xs xl:text-[0.7rem] text-gray-700 font-graphik font-medium leading-5 xl:py-[0.3rem] py-0.5">
											<a href={`/${page.slug}`}>
												{page.first_title_name.text} {page.last_title_name.text}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
