/* eslint-disable @next/next/no-img-element */
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, ChangeEvent } from 'react';

interface FormData {
	name: string;
	startupName: string;
	role: string;
	phone: string;
	email: string;
	teamSize: string;
}

interface FormErrors {
	name: string;
	startupName: string;
	role: string;
	phone: string;
	email: string;
	teamSize: string;
}

export default function StartupForm({ onClose, onDownload }: any) {
	const [isClosing, setIsClosing] = useState(false);
	const [phone, setPhone] = useState<string>('');
	const [formData, setFormData] = useState<FormData>({
		name: '',
		startupName: '',
		role: '',
		phone: '',
		email: '',
		teamSize: '',
	});

	const [errors, setErrors] = useState<FormErrors>({
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

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Remove error state when user starts typing
		if (errors[name as keyof FormErrors] && value.trim()) {
			setErrors({
				...errors,
				[name as keyof FormErrors]: '',
			});
		}
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors: FormErrors = {
			name: '',
			startupName: '',
			role: '',
			phone: '',
			email: '',
			teamSize: '',
		};
		let errorMessage = '';

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
			errorMessage += 'Name is required. ';
			isValid = false;
		}
		if (!formData.startupName.trim()) {
			newErrors.startupName = 'Startup Name is required';
			errorMessage += 'Startup Name is required. ';
			isValid = false;
		}
		if (!formData.role.trim()) {
			newErrors.role = 'Role is required';
			errorMessage += 'Role is required. ';
			isValid = false;
		}
		if (!phone.trim() || !/^\+91\d{10}$/.test(phone.trim())) {
			newErrors.phone =
				'Phone number is invalid and it should starts with +91 ';
			errorMessage += 'Phone number should starts with +91 . ';
			isValid = false;
		}
		if (
			!formData.email.trim() ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
		) {
			newErrors.email = 'Email is invalid';
			errorMessage += 'Email is invalid. ';
			isValid = false;
		}
		if (!formData.teamSize.trim()) {
			newErrors.teamSize = 'Team Size is required';
			errorMessage += 'Team Size is required. ';
			isValid = false;
		}

		setErrors(newErrors);
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

	const handleTeamSizeChange = (size: string) => {
		setFormData({
			...formData,
			teamSize: size,
		});
	};

	const roleOptions = [
		'Co-founder',
		'Product Manager',
		'Head of HR',
		'Office Manager',
		'IT Admin/Manager',
		'Finance Manager',
		'Others',
	];

	return (
		<div className="fixed  mt-28 sm:mt-20 inset-0 z-40 flex justify-center items-center bg-black bg-opacity-80">
			<div
				className={`relative w-full max-sm:w-[90%] max-w-sm md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow-lg transition-transform transform ${
					isClosing ? 'scale-95 modal-exit' : 'scale-100 modal-enter'
				} ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
				<button
					className="absolute top-4 right-4 w-6 h-6 text-gray-600 hover:text-gray-800"
					onClick={handleClose}>
					<img src="/assets/b2b/cross.svg" alt="close" />
				</button>
				<div className="flex justify-center items-center w-full flex-col py-2 gap-3">
					<div className="text-base sm:text-2xl font-semibold font-manuale">
						Start your Journey with us!
					</div>
					<div className="text-xs sm:text-base text-neutral-500 px-2">
						Leave your details here to get a callback from our sales experts.
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className=" w-full  lg:w-1/2 p-4">
						<form className="space-y-3">
							<input
								type="text"
								required
								name="name"
								placeholder="Enter your name"
								value={formData.name}
								onChange={handleChange}
								className={`w-full px-4 py-2 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
									errors.name ? 'border-red-500' : ''
								}`}
							/>
							<input
								type="text"
								required
								name="startupName"
								placeholder="Enter your Startup Name"
								value={formData.startupName}
								onChange={handleChange}
								className={`w-full px-4 py-2 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
									errors.startupName ? 'border-red-500' : ''
								}`}
							/>
							<div className="relative">
								<select
									required
									name="role"
									value={formData.role}
									onChange={handleChange}
									className={`w-full appearance-none px-4 py-2 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
										errors.role ? 'border-red-500' : ''
									}`}>
									<option value="">Select Role</option>
									{roleOptions.map((role, index) => (
										<option key={index} value={role}>
											{role}
										</option>
									))}
								</select>
								<ArrowDown
									size={16}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
								/>
							</div>
							<input
								type="tel"
								required
								name="phone"
								placeholder="+91 Enter your phone number"
								prefix="+91"
								maxLength={13}
								value={`${phone}`}
								onChange={(e) => setPhone(e.target.value)}
								className={`w-full px-4 py-2 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
									errors.phone ? 'border-red-500' : ''
								}`}
							/>
							<input
								type="email"
								required
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								className={`w-full px-4 py-2 border rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
									errors.email ? 'border-red-500' : ''
								}`}
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
								<p className="text-red-500 text-xs">{errorMessage}</p>
							)}
							<button
								onClick={handleDownloadClick}
								type="button"
								className="w-full py-3 bg-black text-white text-lg font-medium rounded-sm focus:outline-none hover:bg-gray-800">
								TALK TO A HUMAN
							</button>
						</form>
					</div>
					<div className="hidden w-full lg:w-1/2 lg:flex justify-center items-center p-8">
						<img
							alt="human illustration"
							src="/assets/startup/startup-form.webp"
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
