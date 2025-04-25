import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['images.pexels.com'],
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
		],
	},
};

export default nextConfig;
