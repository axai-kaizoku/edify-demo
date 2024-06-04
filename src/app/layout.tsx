import type { Metadata } from 'next';
import { Inter, Manuale, Tinos } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar-section';
import FooterSection from '@/components/footer-section';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

const manuale = Manuale({
	subsets: ['latin'],
	display: 'swap',
	style: 'normal',
	preload: true,
	variable: '--font-manuale',
	weight: ['400', '600', '700'],
});

const tinos = Tinos({
	subsets: ['latin'],
	display: 'swap',
	style: 'normal',
	preload: true,
	variable: '--font-tinos',
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: siteConfig.name,
	description: siteConfig.description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: '/logo.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: '/logo.png',
	},
	icons: {
		icon: '/logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${manuale.variable} ${tinos.variable}`}>
				<Navbar />
				<main className="pt-10 sm:pt-20">{children}</main>
				<FooterSection />
			</body>
		</html>
	);
}
