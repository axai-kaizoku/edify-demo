'use client';
import React, { useState, useEffect } from 'react';
import { fetchFooterLinks } from '@/server/actions';
import { FooterCategory, FooterPage } from '@/types';

export default function MoreLinks({ slug }: { slug?: string }) {
	const [data, setData] = useState<FooterCategory[]>([]);
	const [showLinks, setShowLinks] = useState<boolean>(false);
	const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

	useEffect(() => {
		async function fetchData() {
			const footerData = await fetchFooterLinks(slug);
			setData(footerData);
		}

		fetchData();
		// eslint-disable-next-line
	}, []);

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
					className="px-3 sm:px-24 text-sm hover:underline flex ">
					More Links
				</button>
			)}
			<div
				className={`links-container w-full flex justify-between items-center transition-all duration-500 ${
					!isMobileOrTablet || showLinks
						? 'h-fit  opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}>
				{data && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full  xl:gap-5">
						{data?.map((res: FooterCategory, index: number) => (
							<div key={index} className="">
								<h1 className="text-sm xl:text-[1rem] font-semibold text-slate-600 font-graphik mb-2 leading-7">
									{res.categoryValue}
								</h1>
								<ul>
									{res.pages.map((page: FooterPage, pageIndex: number) => (
										<li
											key={pageIndex}
											className="text-xs xl:text-[0.7rem] text-gray-700 font-graphik font-medium leading-5 xl:py-1.5 py-0.5">
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
