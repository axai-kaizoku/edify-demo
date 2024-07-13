import React from 'react';
import FooterHeading from './FooterHeading';
import FooterLinks from './FooterLinks';

// import Image from 'next/image';
import Link from 'next/link';
import SocialElements from './SocialElemets';
import Container from '../common/Container';

function WebFooter() {
	return (
		<>
			<Container isBorder={false} className="pt-16 pb-12 hidden sm:flex gap-8">
				<div>
					<Link href="/" aria-label="Read more">
						<img
							src={'/assets/logo.webp'}
							alt="edify"
							width={132}
							height={60}
						/>
					</Link>
				</div>
				<div className="flex  gap-16">
					<div className="flex w-48  text-wrap ">
						{' '}
						<h1 className="font-medium font-graphik leading-6 text-sm text-gray-600">
							Edify by Winuall 2nd Floor, SRS Arcade, 15/2, Hosa Rd,
							Kasavanahalli, Bengaluru, Karnataka 560035, <br />
							Ph:{' '}
							<a style={{ color: 'cornflowerblue' }} href="tel:+91 9513245671">
								+91 9513245671
							</a>
							, Email:contact@edify.club
						</h1>
					</div>
					<div className="flex justify-around w-full">
						<div className="flex flex-col gap-4">
							<FooterHeading title="Company" />
							<Link href="/about-us" aria-label="Read more about us">
								<FooterLinks title="About us" />
							</Link>
							<Link href="/startup" aria-label="Read more ">
								<FooterLinks title="Business" />
							</Link>
							<Link
								href="https://edify.club/blog/"
								aria-label="Read more"
								target="_blank">
								<FooterLinks title="Blog" />
							</Link>
							<Link href="/b2b" aria-label="Read more about b2b order">
								<FooterLinks title="B2B Order" />
							</Link>
						</div>
						<div className="flex flex-col gap-4">
							<FooterHeading title="Legal" />
							<Link href="/terms-of-services" aria-label="Read more about TOS">
								<FooterLinks title="Terms and Conditions" />
							</Link>
							<Link href="/privacy-policy" aria-label="Read more about Policy">
								<FooterLinks title="Privacy Policy" />
							</Link>
							<Link
								href="https://warranty.edify.club"
								target="_blank"
								aria-label="Read more ">
								<FooterLinks title="Service and Warranty" />
							</Link>
						</div>
					</div>
				</div>
			</Container>

			<div className="w-full sm:flex hidden items-center justify-center bg-[#F7F7F6]">
				<div className=" flex items-center  justify-between py-6 w-[95%] sm:w-[87%] ">
					<h2 className="text-gray-600 font-normal text-sm leading-6">
						© 2024 Edify by Winuall. All rights reserved.
					</h2>
					<div className="flex items-center justify-center gap-6">
						<SocialElements
							src="/assets/socials-icons/twitter.svg"
							href="https://twitter.com/edify_club"
							alt="twitter"
						/>
						<SocialElements
							src="/assets/socials-icons/linkedin.svg"
							href="https://www.linkedin.com/company/edifybywinuall/mycompany/"
							alt="LinkedIn"
						/>
						<SocialElements
							src="/assets/socials-icons/fb.svg"
							href="https://facebook.com/edifyclub"
							alt="Facebook"
						/>
						<SocialElements
							src="/assets/socials-icons/insta.svg"
							href="https://instagram.com/edify_club"
							alt="Instagram"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default WebFooter;
