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
				<div className="w-[60%] max-w-[1210px] h-auto p-10 relative bg-white rounded-lg shadow backdrop-blur-[17px]">
			    <BulkOrderForm  />
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
