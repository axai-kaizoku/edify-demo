'use client';

import MobileView from './MobileView';
import WebView from './WebView';

export default function Navbar() {
	return (
		<>
			<WebView />
			<MobileView />
		</>
	);
}
