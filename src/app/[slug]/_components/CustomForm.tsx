'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function CustomForm() {
	const params = useSearchParams();
	const [selectedOption, setSelectedOption] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [isTyping, setIsTyping] = useState<boolean>(false);
	const [formErrors, setFormErrors] = useState<string[]>([]);

	const handleRadioChange = (e: any) => {
		setSelectedOption(e.target.value);
	};

	const handlePhoneChange = (e: any) => {
		const value = e.target.value;
		if (/^\d{0,10}$/.test(value)) {
			setPhone(value);
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const name = e.target[0].value;
		const city = e.target[1].value;
		const phone = e.target[2].value;
		const laptops = selectedOption;
		const errors: string[] = [];

		if (!name.trim()) {
			errors.push('Name is required.');
		}
		if (!city.trim()) {
			errors.push('City is required.');
		}
		if (!phone.trim() || phone.length !== 10) {
			errors.push('Phone number is invalid.');
		}
		if (!laptops) {
			errors.push('Please select the number of laptops.');
		}

		setFormErrors(errors);

		if (errors.length === 0) {
			// API integration
			const resellerObject = {
				name,
				phone: `+91${phone}`,
				project: 'Edify Reseller',
				city,
				utm_source: params.get('utm_source') || '',
				utm_medium: params.get('utm_medium') || '',
				utm_campaign: params.get('utm_campaign') || '',
				utm_content: params.get('utm_content') || '',
				pageTitle: window.location.href,
			};

			await axios.post(
				'https://api.edify.club/v2/mkt/requests/interested/reseller',
				resellerObject,
			);

			setPhone('');
			e.target[0].value = '';
			e.target[1].value = '';
			setSelectedOption('');
			setIsTyping(false);
		}
	};

	const handleTyping = () => {
		setIsTyping(true);
	};

	return (
		<div className="border bg-white w-full min-h-[450px] px-6 sm:px-8 py-6 mt-6">
			<form
				className="flex font-graphik flex-col justify-between h-[450px] text-sm"
				onSubmit={handleSubmit}
				onChange={handleTyping}
				aria-describedby="form-errors">
				<div className="flex flex-col gap-2.5">
					<label htmlFor="fullName" className="font-bold">
						FULL NAME
					</label>
					<input
						type="text"
						id="fullName"
						placeholder="Enter your Full Name"
						className="border-b p-3 outline-none focus:ring-2 focus:ring-gray-500"
						maxLength={30}
						required
						aria-required="true"
					/>
				</div>
				<div className="flex flex-col gap-2.5">
					<label htmlFor="city" className="font-bold">
						CITY
					</label>
					<input
						type="text"
						id="city"
						placeholder="Enter your City"
						className="border-b p-3 outline-none focus:ring-2 focus:ring-gray-500"
						maxLength={35}
						required
						aria-required="true"
					/>
				</div>
				<div className="flex flex-col gap-2.5">
					<label htmlFor="phoneNumber" className="font-bold">
						PHONE NUMBER
					</label>
					<input
						type="tel"
						id="phoneNumber"
						placeholder="+91 - Phone Number"
						className="border-b p-3 outline-none focus:ring-2 focus:ring-gray-500"
						value={phone}
						onChange={handlePhoneChange}
						required
						maxLength={10}
						pattern="\d{10}"
						aria-required="true"
					/>
				</div>
				<fieldset
					className="flex flex-col gap-2.5"
					role="radiogroup"
					aria-labelledby="noOfLaptops">
					<legend id="noOfLaptops" className="font-bold pb-6">
						NO OF LAPTOPS
					</legend>
					<div className="flex justify-between">
						<div>
							<input
								type="radio"
								value="5-25"
								name="noOfLaptops"
								id="5-25"
								checked={selectedOption === '5-25'}
								onChange={handleRadioChange}
								className="sr-only"
							/>
							<label
								htmlFor="5-25"
								className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
									selectedOption === '5-25'
										? 'bg-black text-white'
										: 'text-slate-600'
								}`}>
								5-25
							</label>
						</div>
						<div>
							<input
								type="radio"
								value="26-50"
								name="noOfLaptops"
								id="26-50"
								checked={selectedOption === '26-50'}
								onChange={handleRadioChange}
								className="sr-only"
							/>
							<label
								htmlFor="26-50"
								className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
									selectedOption === '26-50'
										? 'bg-black text-white'
										: 'text-slate-600'
								}`}>
								26-50
							</label>
						</div>
						<div>
							<input
								type="radio"
								value="51-100"
								name="noOfLaptops"
								id="51-100"
								checked={selectedOption === '51-100'}
								onChange={handleRadioChange}
								className="sr-only"
							/>
							<label
								htmlFor="51-100"
								className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
									selectedOption === '51-100'
										? 'bg-black text-white'
										: 'text-slate-600'
								}`}>
								51-100
							</label>
						</div>
						<div>
							<input
								type="radio"
								value="moreThan100"
								name="noOfLaptops"
								id="moreThan100"
								checked={selectedOption === 'moreThan100'}
								onChange={handleRadioChange}
								className="sr-only"
							/>
							<label
								htmlFor="moreThan100"
								className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
									selectedOption === 'moreThan100'
										? 'bg-black text-white'
										: 'text-slate-600'
								}`}>
								More than 100
							</label>
						</div>
					</div>
				</fieldset>
				<button
					type="submit"
					className={`border py-2 text-base sm:text-lg font-graphik font-bold ${
						isTyping ? 'bg-black text-white' : 'bg-slate-200 text-white'
					} focus:ring-2 focus:ring-gray-500`}
					aria-live="assertive">
					ENQUIRE NOW
				</button>
				{formErrors.length > 0 && (
					<div id="form-errors" className="text-red-500 mt-2" role="alert">
						{formErrors.map((error, index) => (
							<p key={`form-error-${index}`}>{error}</p>
						))}
					</div>
				)}
			</form>
		</div>
	);
}
