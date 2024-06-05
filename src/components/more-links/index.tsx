'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FooterDataType {}

export default function MoreLinks() {
	const [data, setData] = useState<Array<any>>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [showLinks, setShowLinks] = useState(false);
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					'https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=refurbished-laptops-nashik',
				);
				setData(response.data.footerByCategory);
			} catch (error: any) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
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
			{isLoading && <p>Loading data...</p>}
			{error && <p>Error fetching data: {error.message}</p>}
			{isMobileOrTablet && (
				<button
					onClick={toggleLinks}
					className="px-7 sm:px-24 hover:underline flex "
				>
					More Links
				</button>
			)}
			<div
				className={`links-container w-full flex justify-center items-center transition-all  duration-500 ${
					!isMobileOrTablet || showLinks
						? 'h-fit  opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}
			>
				{data && (
					<div className="sm:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
						{data?.map((res: any, index: number) => (
							<div
								key={index}
								className=""
							>
								<h1 className="text-lg font-semibold font-graphik mb-2 leading-7">
									{res.categoryTitle}
								</h1>
								<ul>
									{res.pages.map((page: any, pageIndex: number) => (
										<li
											key={pageIndex}
											className="text-xs text-gray-400 font-graphik font-medium leading-5"
										>
											<a href={page.url}>
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
