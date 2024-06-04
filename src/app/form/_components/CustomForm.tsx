export default function CustomForm() {
	return (
		<>
			<div
				className="seo-card"
				id="web-form-tabs">
				<h3 className="font-semibold text-[28px]">Enquire Now</h3>
				<div style={{ width: '100%' }}>
					{/* web form tab-header */}
					<div style={{ backgroundColor: '#ffffff', borderRadius: 8 }}>
						<ul
							className="flex flex-wrap -mb-px text-md font-medium text-center justify-center"
							id="myTab1"
							data-tabs-toggle="#myTabContent"
							role="tablist">
							<li
								className="mr-2"
								role="presentation">
								<button
									className="inline-block p-4 border-b-2 rounded-t-lg"
									id="profile-tab"
									data-tabs-target="#profile"
									type="button"
									role="tab"
									aria-controls="profile"
									aria-selected="true">
									Shop
								</button>
							</li>
							<li
								className="mr-2"
								role="presentation">
								<button
									className="inline-block p-4 border-b-2 rounded-t-lg"
									id="dashboard-tab"
									data-tabs-target="#dashboard"
									type="button"
									role="tab"
									aria-controls="dashboard"
									aria-selected="false">
									Bulk Order
								</button>
							</li>
							<li
								className="mr-2"
								role="presentation">
								<button
									className="inline-block p-4 border-b-2 rounded-t-lg"
									id="settings-tab"
									data-tabs-target="#settings"
									type="button"
									role="tab"
									aria-controls="settings"
									aria-selected="false">
									Affiliate
								</button>
							</li>
						</ul>
					</div>
					{/* web form tab-content */}
					<div
						id="myTabContent"
						className="hidden md:block"
						style={{ backgroundColor: '#ffffff', paddingTop: 22 }}>
						{/* web Shop Form*/}
						<form
							id="profile"
							role="tabpanel"
							aria-labelledby="profile-tab">
							<div className="seo-purchase-form">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="individual-name"
										className="block mb-2 text-sm font-medium text-gray-900">
										Full Name
									</label>
									<input
										type="name"
										id="individual-name"
										style={{ border: '1px solid #dde2e7' }}
										className="bg-white-new-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Enter your Full Name"
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="individual-phone"
										className="block mb-2 text-sm font-medium text-gray-900">
										Phone Number
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
											+91
										</span>
										<input
											type="number"
											style={{ border: '1px solid #dde2e7' }}
											id="individual-phone"
											className="bg-white-new-50 rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 w-full p-2.5"
											placeholder="Enter your Phone Number"
											required
											pattern="/^(7\d|8\d|9\d)\d{9}$/"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<p className="block mb-2 text-sm font-medium text-gray-900">
										Budget
									</p>
									<div
										id="budget-btns"
										className="flex gap-2"
										style={{ flexWrap: 'wrap' }}>
										<div className="form-input button-input-text">15k-20k</div>
										<div className="form-input button-input-text">20k-25k</div>
										<div className="form-input button-input-text">25k-30k</div>
									</div>
									<p
										className="name-error"
										id="shop-budget-error">
										Select a budget
									</p>
								</div>
							</div>
							<div
								style={{ marginTop: 24 }}
								id="shop-now-active">
								<button className="card-button">Shop Now</button>
							</div>
							<div
								id="shop-now-loading"
								className="mx-auto w-48 mt-10 mb-10 card-button hidden"
								style={{ width: '12rem', padding: 0, alignItems: 'center' }}>
								<button className="card-button">
									<svg
										aria-hidden="true"
										role="status"
										className="inline w-4 h-4 mr-3 text-white animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</form>
						{/* web Bulk Form */}
						<form
							id="dashboard"
							role="tabpanel"
							aria-labelledby="dashboard-tab"
							className="hidden show-tab-data">
							<div className="seo-purchase-form">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="bulk-name"
										className="block mb-2 text-sm font-medium text-gray-900">
										Full Name
									</label>
									<input
										type="name"
										id="bulk-name"
										style={{ border: '1px solid #dde2e7' }}
										className="bg-white-new-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Enter your Full Name"
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="bulk-city"
										className="block mb-2 text-sm font-medium text-gray-900">
										City
									</label>
									<input
										type="city"
										id="bulk-city"
										style={{ border: '1px solid #dde2e7' }}
										className="bg-white-new-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Select your City"
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="bulk-phone"
										className="block mb-2 text-sm font-medium text-gray-900">
										Phone Number
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
											+91
										</span>
										<input
											type="number"
											style={{ border: '1px solid #dde2e7' }}
											id="bulk-phone"
											className="bg-white-new-50 rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 w-full p-2.5"
											placeholder="Enter your Phone Number"
											required
											pattern="/^(7\d|8\d|9\d)\d{9}$/"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<p className="block mb-2 text-sm font-medium text-gray-900">
										No. of Laptops
									</p>
									<div
										id="laptop-count-btns"
										className="flex gap-2"
										style={{ flexWrap: 'wrap' }}>
										<div className="form-input button-input-text">5-25</div>
										<div className="form-input button-input-text">26-50</div>
										<div className="form-input button-input-text">51-100</div>
										<div className="form-input button-input-text">
											More than 100
										</div>
									</div>
									<p
										className="name-error"
										id="bulk-laptop-count-error">
										Select no. of laptops
									</p>
								</div>
							</div>
							<div
								style={{ marginTop: 24 }}
								id="enquire-now-active">
								<button className="card-button">Enquire Now</button>
							</div>
							<div
								id="enquire-now-loading"
								className="mx-auto w-48 mt-10 mb-10 card-button hidden"
								style={{ width: '12rem', padding: 0, alignItems: 'center' }}>
								<button className="card-button">
									<svg
										aria-hidden="true"
										role="status"
										className="inline w-4 h-4 mr-3 text-white animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</form>
						{/* web affiliate Form */}
						<form
							id="settings"
							role="tabpanel"
							aria-labelledby="settings-tab"
							className="hidden show-tab-data">
							<div className="seo-purchase-form">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="reselling-name"
										className="block mb-2 text-sm font-medium text-gray-900">
										Name
									</label>
									<input
										type="name"
										id="reselling-name"
										style={{ border: '1px solid #dde2e7' }}
										className="bg-white-new-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Enter your Full Name"
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="reselling-phone"
										className="block mb-2 text-sm font-medium text-gray-900">
										Phone Number
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
											+91
										</span>
										<input
											type="number"
											style={{ border: '1px solid #dde2e7' }}
											id="reselling-phone"
											className="bg-white-new-50 rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 w-full p-2.5"
											placeholder="Enter your Phone Number"
											required
											pattern="/^(7\d|8\d|9\d)\d{9}$/"
										/>
									</div>
								</div>
							</div>
							<div
								style={{ marginTop: 24 }}
								id="start-selling-active">
								<button className="card-button">Start Selling</button>
							</div>
							<div
								id="start-selling-loading"
								className="mx-auto w-48 mt-10 mb-10 card-button hidden"
								style={{ width: '12rem', padding: 0, alignItems: 'center' }}>
								<button className="card-button">
									<svg
										aria-hidden="true"
										role="status"
										className="inline w-4 h-4 mr-3 text-white animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
