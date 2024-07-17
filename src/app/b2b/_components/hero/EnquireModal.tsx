/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

interface EnquireModalProps {
	onClose: () => void;
	onDownload?: any;
}

interface FormState {
	name: string;
	phone: string;
	store: string;
	city: string;
	quantity: string;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ onClose, onDownload }) => {
	const params = useSearchParams();
	const [isClosing, setIsClosing] = useState(false);
	const [form, setForm] = useState<FormState>({
		name: '',
		phone: '',
		store: '',
		city: '',
		quantity: '',
	});
	const [errors, setErrors] = useState<Partial<FormState>>({});

	useEffect(() => {
		if (isClosing) {
			setTimeout(() => {
				onClose();
			}, 300);
		}
	}, [isClosing, onClose]);

	const handleClose = () => {
		setIsClosing(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value, type, name } = e.target;
		if (type === 'radio') {
			setForm((prevForm) => ({ ...prevForm, quantity: value }));
		} else {
			setForm((prevForm) => ({ ...prevForm, [id]: value }));
		}
		setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors: Partial<FormState> = {};

		if (!form.name) {
			newErrors.name = 'Name is required';
			isValid = false;
		}
		if (!form.phone) {
			newErrors.phone = 'Phone number is required';
			isValid = false;
		}
		if (!form.store) {
			newErrors.store = 'Email is required';
			isValid = false;
		}
		if (!form.city) {
			newErrors.city = 'City is required';
			isValid = false;
		}
		if (!form.quantity) {
			newErrors.quantity = 'Quantity is required';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleDownloadClick = async () => {
		if (validateForm()) {
			setIsClosing(true);
			onDownload();

			// API integration
			const resellerObject = {
				name: form.name,
				phone: `+91${form.phone}`,
				project: 'Edify B2B',
				// store:form.store,
				city: form.city,
				laptop_need: form.quantity,
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
		}
	};

	return (
		<>
			<div className="fixed inset-0 z-40 bg-black opacity-50"></div>
			<div
				className={`flex justify-center items-center w-full h-full fixed inset-0 z-50 ${
					isClosing ? 'modal-exit' : 'modal-enter'
				}`}>
				<div className="w-[90.5%] max-w-[1210px] h-auto p-10 relative bg-white rounded-lg shadow backdrop-blur-[17px]">
					<div className="flex flex-col justify-start items-center gap-5">
						<div className="flex flex-col justify-start items-center gap-[20px]">
							<div className="text-center text-black text-base lg:text-3xl font-medium leading-normal">
								Looking to buy Laptops in Bulk?{' '}
							</div>
							<div className="text-center text-zinc-700 text-sm lg:text-xl font-normal leading-none">
								Fill the form to receive the brochure.{' '}
							</div>
						</div>
						<div className="flex flex-col justify-start items-center gap-6 lg:gap-12">
							<div className="flex flex-col justify-start items-start gap-5">
								<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 lg:gap-10">
									<div className="flex flex-col  w-full sm:w-auto">
										<label className="sr-only" htmlFor="name">
											Name
										</label>
										<input
											id="name"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="Enter your name"
											value={form.name}
											onChange={handleInputChange}
										/>
										{errors.name && (
											<span className="text-red-500 text-xs">
												{errors.name}
											</span>
										)}
									</div>
									<div className="flex flex-col  w-full sm:w-auto">
										<label className="sr-only" htmlFor="phone">
											Phone Number
										</label>
										<input
											id="phone"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="+91 Enter your phone number"
											value={form.phone}
											onChange={handleInputChange}
										/>
										{errors.phone && (
											<span className="text-red-500 text-xs">
												{errors.phone}
											</span>
										)}
									</div>
								</div>
								<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 lg:gap-10">
									<div className="flex flex-col  w-full sm:w-auto">
										<label className="sr-only" htmlFor="store">
											Email
										</label>
										<input
											id="store"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="Enter your store id"
											value={form.store}
											onChange={handleInputChange}
										/>
										{errors.store && (
											<span className="text-red-500 text-xs">
												{errors.store}
											</span>
										)}
									</div>
									<div className="flex flex-col  w-full sm:w-auto">
										<label className="sr-only" htmlFor="city">
											Enter your City Name
										</label>
										<input
											id="city"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="Enter your City Name"
											value={form.city}
											onChange={handleInputChange}
										/>
										{errors.city && (
											<span className="text-red-500 text-xs">
												{errors.city}
											</span>
										)}
									</div>
								</div>
								<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 lg:gap-10">
									<div className="flex flex-col gap-2.5 w-full sm:w-auto">
										<label className="sr-only" htmlFor="quantity">
											Number Of Quantities
										</label>
										<div className="flex justify-between">
											<div>
												<input
													type="radio"
													value="5-25"
													name="quantity"
													id="5-25"
													onChange={handleInputChange}
													checked={form.quantity === '5-25'}
													className="sr-only"
												/>
												<label
													htmlFor="5-25"
													className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
														form.quantity === '5-25'
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
													name="quantity"
													id="26-50"
													onChange={handleInputChange}
													checked={form.quantity === '26-50'}
													className="sr-only"
												/>
												<label
													htmlFor="26-50"
													className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
														form.quantity === '26-50'
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
													name="quantity"
													id="51-100"
													onChange={handleInputChange}
													checked={form.quantity === '51-100'}
													className="sr-only"
												/>
												<label
													htmlFor="51-100"
													className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
														form.quantity === '51-100'
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
													name="quantity"
													id="moreThan100"
													onChange={handleInputChange}
													checked={form.quantity === 'moreThan100'}
													className="sr-only"
												/>
												<label
													htmlFor="moreThan100"
													className={`border text-xs whitespace-nowrap p-2.5 sm:p-4 lg:py-4 lg:px-6 ${
														form.quantity === 'moreThan100'
															? 'bg-black text-white'
															: 'text-slate-600'
													}`}>
													More than 100
												</label>
											</div>
										</div>
										{errors.quantity && (
											<span className="text-red-500 text-xs">
												{errors.quantity}
											</span>
										)}
									</div>
								</div>
							</div>
							<div className="h-12 flex flex-col justify-start items-center gap-4">
								<button
									className="w-[300px] sm:w-[260px] h-12 bg-black rounded shadow-inner flex justify-center items-center gap-2.5"
									onClick={handleDownloadClick}>
									<div className="text-center text-white text-lg font-medium leading-5">
										ENQUIRE NOW
									</div>
								</button>
							</div>
						</div>
					</div>
					<button
						className="absolute top-10 right-[19px] lg:top-[48.50px] lg:right-[66px] w-5 sm:w-8 lg:h-[33px] h-5"
						onClick={handleClose}>
						<img src="/assets/b2b/cross.svg" alt="close" />
					</button>
				</div>
			</div>
		</>
	);
};

export default EnquireModal;
