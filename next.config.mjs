/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api-files-connect-saas.s3.ap-south-1.amazonaws.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
