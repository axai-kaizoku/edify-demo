/* eslint-disable @next/next/no-img-element */
import SocialElementsMobile from './SocialElementsMobile';
import Link from 'next/link';

function MobileFooter() {
	return (
		<footer className="py-4 px-2.5 block sm:hidden">
			<div className="">
				<Link className="flex w-fit" href="/" aria-label="Read more ">
					<img
						src="/assets/logo.webp"
						alt="edify"
						className="-ml-4 w-[150px] h-[50px] object-contain"
						loading="lazy"
					/>
				</Link>

				<div className="flex py-8 gap-6 items-center">
					<Link href="https://twitter.com/edify_club">
						<img
							className="h-[1.4rem] w-[1.4rem] rounded-sm"
							alt="twitter"
							src="/assets/socials-icons/twitter.svg"
							loading="lazy"
						/>
					</Link>
					<Link href="https://twitter.com/edify_club">
						<img
							className="black-and-white h-[1.8rem] w-[1.8rem] rounded-sm"
							alt="Instagram"
							loading="lazy"
							src="/assets/socials-icons/insta.svg"
						/>
					</Link>
					{/* <SocialElementsMobile
						src="/assets/socials-icons/insta.svg"
						href="https://instagram.com/edify_club"
						alt="Instagram"
					/> */}
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
						<h1 className="font-graphik text-sm font-semibold leading-5 text-black">
							CONTACT US
						</h1>
						<div className="">
							<h1 className="text-slate-600 text-xs font-medium leading-5 font-gaphik">
								+91 9513245671
							</h1>

							<h1 className="text-slate-600 text-xs font-normal leading-5 font-gaphik">
								edify@winuall.com
							</h1>
						</div>
					</div>

					<h1 className="text-slate-600 font-graphik text-xs font-normal leading-5 text-wrap w-40">
						Edify by Winuall 2nd Floor, SRS Arcade, 15/2, Hosa Rd,
						Kasavanahalli, Bengaluru, Karnataka 560035,
					</h1>
					<div className="flex flex-col gap-2">
						<h1 className="text-black text-xs font-semibold leading-5">
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
						<h1 className="text-black text-xs font-semibold leading-5">
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
