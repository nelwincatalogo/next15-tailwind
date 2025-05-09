import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/** @type {import('next').NextConfig} */
const nextConfig = (
	phase: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	{ defaultConfig }: { defaultConfig: any }
) => {
	const baseConfig = {
		...defaultConfig,
		output: 'export', // To enable a static export
		trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
		swcMinify: true, // minify code
		reactStrictMode: true,
	};

	// Apply production-only configurations here
	if (phase === PHASE_PRODUCTION_BUILD) {
		return {
			...baseConfig,
			compiler: {
				removeConsole: {
					exclude: ['error', 'warn'],
				},
			},
		};
	}

	return {
		...baseConfig,
	};
};

module.exports = nextConfig;
