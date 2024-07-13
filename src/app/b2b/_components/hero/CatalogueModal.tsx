/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import BulkOrderForm from '../bulk-order/BulkOrderForm';

function CatalogueModal({ onClose, onDownload }: any) {
	const [isClosing, setIsClosing] = useState(false);
	const [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		quantity: '',
	});
	const [errors, setErrors] = useState({
		name: '',
		phone: '',
		email: '',
		quantity: '',
	});
	const [messageOpen, setMessageOpen] = useState(false);

	const handleMessage = () => {
		setIsClosing(true);
		setMessageOpen(true);
	};

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
		const { id, value } = e.target;
		setForm({ ...form, [id]: value });
		setErrors({ ...errors, [id]: '' });
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = { name: '', phone: '', email: '', quantity: '' };

		if (!form.name) {
			newErrors.name = 'Name is required';
			isValid = false;
		}
		if (!form.phone) {
			newErrors.phone = 'Phone number is required';
			isValid = false;
		}
		if (!form.email) {
			newErrors.email = 'Email is required';
			isValid = false;
		}
		if (!form.quantity) {
			newErrors.quantity = 'Quantity is required';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleDownloadClick = () => {
		if (validateForm()) {
			setIsClosing(true);
			setTimeout(() => {
				onDownload();
			}, 300);
		}
	};

	return (
		<>
			{messageOpen && (
				<div className="absolute lg:fixed z-50 top-[4rem] lg:top-[4.7rem] left-0 w-full h-20">
					<div className="w-full py-4 bg-green-500 flex justify-center items-center">
						<div className="flex justify-center items-center gap-2.5">
							<div>
								<span className="text-white text-sm sm:text-lg font-normal font-graphik leading-10 ">
									Thank you for your interest .{' '}
									<span className="hidden lg:inline-block">
										You will shortly receive the brochure on your registered
										number.
										<span className="underline hidden lg:inline-block ">
											For more details .{' '}
										</span>
									</span>
								</span>
								<a
									href="tel:+919513245671"
									className="text-white text-sm sm:text-lg font-medium font-graphik underline leading-10">
									Call +91 95132 45671
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="fixed inset-0 z-40 bg-black opacity-50"></div>
			<div
				className={`flex justify-center items-center w-full h-screen fixed inset-0 z-50 ${
					isClosing ? 'modal-exit' : 'modal-enter'
				}`}>
				<div className="w-[60%] max-w-[1210px] h-auto p-10 relative bg-white rounded-lg shadow backdrop-blur-[17px]">
					<BulkOrderForm
						onButtonClick={() => {
							handleMessage();
						}}
					/>
					<button
						className="absolute top-10 right-[19px] lg:top-[48.50px] lg:right-[66px] w-5 sm:w-8 lg:h-[33px] h-5"
						style={{ top: 20, right: 36 }}
						onClick={handleClose}>
						<img src="/assets/b2b/cross.svg" alt="close" />
					</button>
				</div>
			</div>
		</>
	);
}

export default CatalogueModal;
