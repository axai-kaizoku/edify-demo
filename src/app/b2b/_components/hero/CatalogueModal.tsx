import React, { useEffect, useState } from 'react';

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
			<div className="fixed inset-0 z-40 bg-black opacity-50"></div>
			<div
				className={`flex justify-center items-center w-full h-screen fixed inset-0 z-50 ${
					isClosing ? 'modal-exit' : 'modal-enter'
				}`}>
				<div className="w-[90.5%] max-w-[1210px] h-auto p-10 relative bg-white/90 rounded-lg shadow backdrop-blur-[17px]">
					<div className="flex flex-col justify-start items-center gap-10">
						<div className="flex flex-col justify-start items-center gap-[25px]">
							<div className="text-center text-black text-base lg:text-3xl font-medium leading-normal">
								Download the Brochure
							</div>
							<div className="text-center text-zinc-700 text-sm lg:text-xl font-normal leading-none">
								Fill the form to receive the brochure.
							</div>
						</div>
						<div className="flex flex-col justify-start items-center gap-6 lg:gap-12">
							<div className="flex flex-col justify-start items-start gap-5">
								<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 lg:gap-10">
									<div className="flex flex-col gap-2.5 w-full sm:w-auto">
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
											<span className="text-red-500">{errors.name}</span>
										)}
									</div>
									<div className="flex flex-col gap-2.5 w-full sm:w-auto">
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
											<span className="text-red-500">{errors.phone}</span>
										)}
									</div>
								</div>
								<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 lg:gap-10">
									<div className="flex flex-col gap-2.5 w-full sm:w-auto">
										<label className="sr-only" htmlFor="email">
											Email
										</label>
										<input
											id="email"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="Enter your email id"
											value={form.email}
											onChange={handleInputChange}
										/>
										{errors.email && (
											<span className="text-red-500">{errors.email}</span>
										)}
									</div>
									<div className="flex flex-col gap-2.5 w-full sm:w-auto">
										<label className="sr-only" htmlFor="quantity">
											Number Of Quantities
										</label>
										<input
											id="quantity"
											className="w-[300px] md:w-[270px] lg:w-[450px] px-4 py-3.5 rounded-sm border border-gray-400 text-center text-zinc-400 text-base leading-7 focus:outline-none"
											placeholder="Number Of Quantities"
											value={form.quantity}
											onChange={handleInputChange}
										/>
										{errors.quantity && (
											<span className="text-red-500">{errors.quantity}</span>
										)}
									</div>
								</div>
							</div>
							<div className="h-12 flex flex-col justify-start items-center gap-4">
								<button
									className="w-[300px] sm:w-[260px] h-12 bg-black rounded shadow-inner flex justify-center items-center gap-2.5"
									onClick={handleDownloadClick}>
									<div className="text-center text-white text-lg font-medium leading-5">
										DOWNLOAD BROCHURE
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
}

export default CatalogueModal;
