/** @type {import('next').NextConfig} */

// const nextConfig = {
// 	images: {
// 		domains: ['images.pexels.com'],
// 	},
// };

const nextConfig = {
	// experimental: {
	// 	instrumentationHook: true,
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
		],
	},
};

export default nextConfig;
