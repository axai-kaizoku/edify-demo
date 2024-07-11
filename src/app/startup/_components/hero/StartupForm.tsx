import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function StartupForm({ onClose, onDownload }: any) {
	const [isClosing, setIsClosing] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		startupName: '',
		role: '',
		phone: '',
		email: '',
		teamSize: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		startupName: '',
		role: '',
		phone: '',
		email: '',
		teamSize: '',
	});

	const [errorMessage, setErrorMessage] = useState('');

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

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = {
			name: '',
			startupName: '',
			role: '',
			phone: '',
			email: '',
			teamSize: '',
		};
		let errorMessage = '';

		if (!formData.name) {
			newErrors.name = 'Name is required';
			errorMessage += 'Name is required. ';
			isValid = false;
		}
		if (!formData.role) {
			newErrors.role = 'Role is required';
			errorMessage += 'Role is required. ';
			isValid = false;
		}
		if (!formData.phone) {
			newErrors.phone = 'Phone number is required';
			errorMessage += 'Phone number is required. ';
			isValid = false;
		}
		if (!formData.email) {
			newErrors.email = 'Email is required';
			errorMessage += 'Email is required. ';
			isValid = false;
		}
		if (!formData.startupName) {
			newErrors.startupName = 'Startup Name is required';
			errorMessage += 'Startup Name is required. ';
			isValid = false;
		}
		if (!formData.teamSize) {
			newErrors.teamSize = 'Team Size is required';
			errorMessage += 'Team Size is required. ';
			isValid = false;
		}

		setErrors(newErrors);

		// Set the final error message
		setErrorMessage(errorMessage);

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

	const handleTeamSizeChange = (size: any) => {
		setFormData({
			...formData,
			teamSize: size,
		});
	};

	return (
		<div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-80">
			<div
				className={` relative max-w-sm w-full sm:max-w-2xl lg:max-w-5xl bg-white rounded-lg shadow-lg transition-transform transform ${
					isClosing ? 'scale-95 modal-exit' : 'scale-100 modal-enter'
				} ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
				<button
					className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-gray-800"
					onClick={handleClose}>
					<img
						src="/assets/b2b/cross.svg"
						alt="close"
					/>
				</button>
				<div className="flex justify-center items-center w-full flex-col p-2 sm:p-4 gap-3 sm:gap-4">
					<div className="text-base sm:text-2xl lg:text-3xl font-semibold font-manuale ">
						Start your Journey with us!
					</div>
					<div className="text-sm sm:text-base lg:text-xl text-neutral-500 ">
						Leave your details here to get a callback from our sales experts.
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className="w-full lg:w-1/2 p-4 sm:p-6">
						<form className="space-y-6 sm:space-y-6">
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2.5 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<input
								type="text"
								name="startupName"
								placeholder="Enter your Startup Name"
								value={formData.startupName}
								onChange={handleChange}
								className="w-full px-4 py-2.5 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<input
								type="text"
								name="role"
								placeholder="Your Role"
								value={formData.role}
								onChange={handleChange}
								className="w-full px-4 py-2.5 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<input
								type="text"
								name="phone"
								placeholder="+91 Enter your phone number"
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-4 py-2.5 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2.5 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<div className="space-y-2">
								<div className="text-base font-normal text-zinc-400">
									Team Size
								</div>
								<div className="flex space-x-2">
									{['5 - 25', '26 - 50', '51 - 100', '100 +'].map((size) => (
										<div
											key={size}
											onClick={() => handleTeamSizeChange(size)}
											className={`flex-1 py-2 border rounded-sm text-center cursor-pointer transition-colors ${
												formData.teamSize === size
													? 'bg-black text-white'
													: 'bg-white text-zinc-400 border-zinc-400 hover:bg-gray-100'
											}`}>
											{size}
										</div>
									))}
								</div>
							</div>
							{errorMessage && (
								<div className="text-red-500">All fields are required</div>
							)}
							<button
								onClick={handleDownloadClick}
								type="button"
								className="w-full py-3 bg-black text-white text-lg font-medium rounded-sm focus:outline-none hover:bg-gray-800">
								TALK TO A HUMAN
							</button>
						</form>
					</div>
					<div className="hidden  w-full lg:w-1/2 lg:flex justify-center items-center  p-8">
						<Image
							width={626}
							height={450}
							alt="human illustration"
							src="/assets/startup/human-image.png"
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
