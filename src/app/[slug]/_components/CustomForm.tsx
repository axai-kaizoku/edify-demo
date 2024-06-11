'use client';
import { useState } from 'react';

export default function CustomForm() {
	const [selectedOption, setSelectedOption] = useState<string>('');

	const handleRadioChange = (e: any) => {
		setSelectedOption(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const name = e.target[0].value;
		const city = e.target[1].value;
		const phone = e.target[2].value;
		const laptops = selectedOption;

		console.log({
			name,
			city,
			phone,
			laptops,
		});
	};
	return (
		<div className="border bg-white w-full min-h-[450px] px-6 sm:px-8 py-6">
			<form
				className="flex font-graphik flex-col justify-between h-[450px] text-sm"
				onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2.5">
					<label htmlFor="fullName" className="font-bold">
						FULL NAME
					</label>
					<input
						type="text"
						id="fullName"
						placeholder="Enter your Full Name"
						className="border-b p-3 outline-none"
						maxLength={30}
						required
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
						className="border-b p-3 outline-none"
						maxLength={35}
						required
					/>
				</div>
				<div className="flex flex-col gap-2.5">
					<label htmlFor="phoneNumber" className="font-bold">
						PHONE NUMBER
					</label>
					<input
						type="number"
						id="phoneNumber"
						placeholder="+91 -  Phone Number"
						className="border-b p-3 outline-none"
						maxLength={10}
						required
					/>
				</div>
				<label htmlFor="noOfLaptops" className="font-bold">
					NO OF LAPTOPS
				</label>
				<div className="flex justify-between">
					<div>
						<input
							type="radio"
							value="5-25"
							name="5-25"
							id="5-25"
							checked={selectedOption === '5-25'}
							onChange={handleRadioChange}
							className="sr-only"
						/>
						<label
							htmlFor="5-25"
							className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6  ${
								selectedOption === '5-25'
									? 'bg-slate-200 text-white'
									: 'text-slate-400'
							}`}>
							5-25
						</label>
					</div>
					<div>
						<input
							type="radio"
							value="26-50"
							name="26-50"
							id="26-50"
							checked={selectedOption === '26-50'}
							onChange={handleRadioChange}
							className="sr-only"
						/>
						<label
							htmlFor="26-50"
							className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6  ${
								selectedOption === '26-50'
									? 'bg-slate-200 text-white'
									: 'text-slate-400'
							}`}>
							26-50
						</label>
					</div>
					<div>
						<input
							type="radio"
							value="51-100"
							name="51-100"
							id="51-100"
							checked={selectedOption === '51-100'}
							onChange={handleRadioChange}
							className="sr-only"
						/>
						<label
							htmlFor="51-100"
							className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6  ${
								selectedOption === '51-100'
									? 'bg-slate-200 text-white'
									: 'text-slate-400'
							}`}>
							51-100
						</label>
					</div>
					<div>
						<input
							type="radio"
							value="moreThan100"
							name="moreThan100"
							id="moreThan100"
							checked={selectedOption === 'moreThan100'}
							onChange={handleRadioChange}
							className="sr-only"
						/>
						<label
							htmlFor="moreThan100"
							className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6  ${
								selectedOption === 'moreThan100'
									? 'bg-slate-200 text-white'
									: 'text-slate-400'
							}`}>
							More than 100
						</label>
					</div>
				</div>
				<button
					type="submit"
					className="border py-2 text-base sm:text-lg text-white font-graphik font-bold bg-slate-200">
					ENQUIRE NOW
				</button>
			</form>
		</div>
	);
}
