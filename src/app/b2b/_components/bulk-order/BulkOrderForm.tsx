'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function BulkOrderForm({ onButtonClick }: any) {
	const params = useSearchParams();
	const [selectedOption, setSelectedOption] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
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
		const store = e.target[1].value;
		const phone = e.target[2].value;
		const city = e.target[3].value;
		const laptops = selectedOption;
		const errors: string[] = [];

		if (!name.trim()) {
			errors.push('Name is required.');
		}
		if (!store.trim()) {
			errors.push('Store is required.');
		}
		if (!phone.trim() || phone.length !== 10) {
			errors.push('Phone number is invalid.');
		}
		if (!city.trim()) {
			errors.push('City is required.');
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
				project: 'Edify B2B',
				// store,
				city,
				laptop_need: laptops,
				utm_source: params.get('utm_source') || '',
				utm_medium: params.get('utm_medium') || '',
				utm_campaign: params.get('utm_campaign') || '',
				utm_content: params.get('utm_content') || '',
				pageTitle: window.location.href,
			};
			await axios.post(
				'https://api.edify.club/v2/mkt/requests/bulkOrder',
				resellerObject,
			);

			onButtonClick();

			setPhone('');
			e.target[0].value = '';
			e.target[1].value = '';
			e.target[2].value = '';
			e.target[3].value = '';
			setSelectedOption('');
		}
	};

	return (
		<div className=" bg-white w-full min-h-[450px] py-6 mt-6">
			{/* Success message */}
			<form
				className="flex font-graphik flex-col justify-between h-[450px] text-sm"
				onSubmit={handleSubmit}
				aria-describedby="form-errors">
				<div>
					<input
						type="text"
						id="fullName"
						placeholder="Enter your Full Name"
						className="border p-3 outline-none focus:ring-2 focus:ring-gray-500 w-full"
						maxLength={30}
						required
						aria-required="true"
					/>
				</div>
				<div>
					<input
						type="text"
						id="store"
						placeholder="Enter your Store"
						className="border p-3 outline-none focus:ring-2 focus:ring-gray-500 w-full"
						maxLength={35}
						required
						aria-required="true"
					/>
				</div>
				<div>
					<input
						type="tel"
						id="phoneNumber"
						placeholder="+91 - Enter your phone number"
						className="border p-3 outline-none focus:ring-2 focus:ring-gray-500 w-full"
						value={phone}
						onChange={handlePhoneChange}
						required
						maxLength={10}
						pattern="\d{10}"
						aria-required="true"
					/>
				</div>
				<div>
					<input
						type="text"
						id="city"
						placeholder="Enter your City"
						className="border p-3 outline-none focus:ring-2 focus:ring-gray-500 w-full"
						maxLength={35}
						required
						aria-required="true"
					/>
				</div>
				<fieldset
					className="flex flex-col gap-2.5"
					role="radiogroup"
					aria-labelledby="noOfLaptops">
					<legend id="noOfLaptops" className="font-graphik text-slate-500 pb-6">
						Number Of Laptops
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
					className="border text-base sm:text-lg mt-5 font-graphik font-bold bg-black text-white focus:ring-2 focus:ring-gray-500 w-fit py-2.5 px-6"
					aria-live="assertive">
					DOWNLOAD BROCHURE
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
