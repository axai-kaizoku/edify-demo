import { Metadata } from 'next';
import { TermsOfServicesProps } from '@/types';
import { termsOfServicesInfo } from '@/constants';

export const metadata: Metadata = {
	title: 'Terms of Service | Edify.club',
	description:
		'Review the terms of service for using Edify.club. Understand the conditions and user agreement that govern your access to our refurbished laptop platform.',
};

export default function TermsOfServices() {
	const termsOfServices: TermsOfServicesProps = termsOfServicesInfo;
	return (
		<div className="flex justify-center items-center w-full">
			<div className="flex flex-col w-[87%] sm:w-4/5  ">
				<div className="flex flex-col text-center gap-8 py-4 sm:py-14 border-b">
					<h3 className="text-3xl sm:text-5xl font-manuale font-semibold">
						Terms Of Service
					</h3>
					<p className="text-slate-600 font-graphik font-normal text-lg sm:text-xl">
						By accessing our website, you are agreeing to be bound by these
						terms
						<br className="hidden lg:block" /> of service, and agree that you
						are responsible for compliance with any applicable{' '}
						<br className="hidden lg:block" />
						local laws.
					</p>
				</div>
				<div className="flex flex-col">
					<div className="flex flex-col pt-6 gap-8">
						<p className="font-tinos font-normal  text-base sm:text-lg text-slate-600">
							{`
							THESE TERMS OF SERVICES IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER APPLICABLE LAWS THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES. THESE TERMS OF SERVICES DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.
							`}
						</p>

						<p className="font-tinos font-normal  text-base sm:text-lg text-slate-600">
							{`			
							PLEASE READ THESE TERMS OF SERVICES CAREFULLY. BY USING THE WEBSITE, YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THESE TERMS OF SERVICES. IF YOU DO NOT AGREE WITH THE TERMS OF THESE TERMS OF SERVICES, PLEASE DO NOT USE THE PLATFORM OR SERVICES.
							`}
						</p>
						<p className="font-tinos font-semibold text-base sm:text-lg text-slate-600">
							{`These Terms of Service ("Terms”)of the website located at the URL https://edify.club on mobile sites or mobile application and the other associated/ancillary applications, products, websites and services and all other variations of the same and as mobile applications available on the Google Play store, App Store and WebApp and [https://edify.club]respectively (collectively referred to as “Platform”)  is between Kuzagan Services Private Limited (referred as “Company” or “we” or “us” or “our"), a company incorporated under the Companies Act, 2013 with its registered office situated at 4th Floor, FlexiHq, #7, 19th Main, Sector 4, HSR Layout, Bangalore - 560102, and the registered Users, defined to include any person who registers himself/herself/itself on the Platform and holds an Account on the Platform (referred as "you" or "your" or  or “User”) describe the terms on which Company offers Services. `}
						</p>

						<p className="font-tinos font-semibold text-base sm:text-lg text-slate-600">
							{`
These Terms are a contract between you and Company. These Terms of Services shall be read together with the Privacy Policy available on https://edify.club/privacy-policy or other terms and condition with all other notices, disclaimers, guidelines appearing on the Platform from time to time (collectively referred to as "Terms and Conditions") constitute the entire agreement upon which you are allowed to access and use the Platform and avail the Services. By accessing this Platform, you are agreeing to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. Your continued use of the Platform shall constitute your acceptance to the Terms and Conditions, as revised from time to time.`}
						</p>
						<p className="font-tinos font-semibold text-base sm:text-lg text-slate-600">
							{`
You and Company shall hereinafter be individually referred to as a “Party” and collectively as the “Parties”`}
						</p>
					</div>
				</div>
				<ul className="flex flex-col font-tinos leading-5 sm:leading-7 text-base sm:text-lg gap-0.5 sm:gap-4 py-3 sm:py-10">
					{termsOfServices.map((v, i) => (
						<li key={i}>
							<h4 className="font-tinos font-bold text-xl sm:text-3xl pb-2 sm:pb-7">
								{v.title}
							</h4>
							{v.headingPlusPoints && (
								<div className="flex flex-col pb-6 ">
									{v.headingPlusPoints?.map((item, i) => (
										<div key={i}>
											<h4 className="font-tinos font-bold text-xl sm:text-2xl pb-2 sm:pb-7">
												{item.title}
											</h4>
											<div className="flex flex-col gap-2.5 pb-6 text-slate-500">
												{item.desc.map((v, i) => (
													<div key={i}>{v}</div>
												))}
											</div>
										</div>
									))}
								</div>
							)}
							{v.headingPlusPoints2 && (
								<div className="flex flex-col pb-6 ">
									{v.headingPlusPoints2?.map((item, i) => (
										<div key={i}>
											{item.title && (
												<div className="flex flex-col gap-2.5 pb-6 text-slate-500">
													{item.title}
												</div>
											)}
											{item.desc && (
												<div className="flex flex-col gap-2.5 pb-6 text-slate-500">
													{item.desc?.map((v, i) => (
														<div key={i}>{v}</div>
													))}
												</div>
											)}
										</div>
									))}
								</div>
							)}
							{v.desc && (
								<div className="flex flex-col gap-8 pb-6 text-slate-500">
									{v.desc?.map((v, i) => (
										<p key={i}>{v}</p>
									))}
								</div>
							)}
							{v.points && (
								<div className="flex flex-col gap-2.5 pb-6 text-slate-500">
									{v.points?.map((v, i) => (
										<p key={i}>{v}</p>
									))}
								</div>
							)}
							{v.extraDesc && (
								<div className="flex flex-col gap-8 pb-6 text-slate-500">
									{v.extraDesc?.map((v, i) => (
										<p key={i}>{v}</p>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
