'use client';

import Container from '../common/HeroContainer';
import MobileView from './MobileView';
import WebView from './WebView';

export default function Navbar() {
	return (
		<Container>
			<div className="w-full bg-white lg:fixed z-10 flex justify-start lg:justify-between items-center py-1.5">
				<WebView />
				<MobileView />
			</div>
		</Container>
	);
}
