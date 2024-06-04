'use client';

import MobileView from './MobileView';
import WebView from './WebView';

export default function Navbar() {
	return (
		<div className="w-full relative bg-white px-3 lg:px-40 lg:fixed z-10 flex justify-start lg:justify-between items-center py-1.5 border-b">
			<WebView />
			<MobileView />
		</div>
	);
}
