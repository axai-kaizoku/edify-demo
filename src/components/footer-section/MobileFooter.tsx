import Image from 'next/image';
import React from 'react';
import SocialElemets from './SocialElemets';
import SocialElementsMobile from './SocialElementsMobile';
import Link from 'next/link';

function MobileFooter() {
	return (
		<footer className="p-4 block sm:hidden">
			<div>
				<Link href="/" aria-label="Read more ">
					<Image src="/assets/logo.webp" alt="edify" width={65} height={30} />
				</Link>

				<div className="flex py-8 gap-6">
					<SocialElementsMobile
						src="/assets/socials-icons/twitter.svg"
						href="https://twitter.com/edify_club"
						alt="twitter"
					/>
					<SocialElementsMobile
						src="/assets/socials-icons/insta.svg"
						href="https://instagram.com/edify_club"
						alt="Instagram"
					/>
					<SocialElementsMobile
						src="/assets/socials-icons/fb.svg"
						href="https://facebook.com/edifyclub"
						alt="Facebook"
					/>
					<SocialElementsMobile
						src="/assets/socials-icons/linkedin.svg"
						href="https://www.linkedin.com/company/edifybywinuall/mycompany/"
						alt="LinkedIn"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="font-graphik text-xs font-medium leading-5 text-slate-600">
							CONTACT US
						</h1>
						<div className="py-2">
							<h1 className="text-slate-900 text-sm font-medium leading-5 font-gaphik">
								+91 95312 45671
							</h1>

							<h1 className="text-slate-600 text-sm font-norml leading-5 font-gaphik">
								edify@winuall.com
							</h1>
						</div>
					</div>

					<h1 className="text-slate-600 font-graphik text-xs font-normal leading-5 text-wrap w-40">
						Winuall, 4th floor, Flexi HQ, 7, 19th Main Rd, Sector 4, HSR Layout,
						Bengaluru, Karnataka - 560102
					</h1>
					<div className="flex flex-col gap-2">
						<h1 className="text-slate-600 text-xs font-medium leading-5">
							COMPANY
						</h1>
						<div className="gap-1 font-graphik font-normal leading-5 text-xs text-slate-600">
							<Link href="/about-us" aria-label="Read more ">
								<h2>About US</h2>
							</Link>
							<Link href="/b2b" aria-label="Read more ">
								<h2>B2B Order</h2>
							</Link>
							<h2>Blog</h2>
							<Link href="/startup" aria-label="Read more ">
								<h2>Business</h2>
							</Link>
							<Link
								href="https://warranty.edify.club"
								target="_blank"
								aria-label="Read more ">
								<h2>Service and Warranty</h2>
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-slate-600 text-xs font-medium leading-5">
							LEGAL
						</h1>
						<div className="gap-1 font-graphik font-normal leading-5 text-xs text-slate-600">
							<Link href="privacy-policy" aria-label="Read more ">
								<h2>Privacy Policy</h2>
							</Link>
							<h2>Customer Service</h2>
							<Link href="/terms-of-services" aria-label="Read more ">
								<h2>Terms and Conditions</h2>
							</Link>
						</div>
					</div>
					<div className="flex flex-col text-slate-700 text-xs font-medium leading-5">
						<h1>* Terms and Conditions Apply</h1>
						<h1>© Edify by Winuall</h1>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default MobileFooter;
