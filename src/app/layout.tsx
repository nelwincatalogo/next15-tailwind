import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { isDevMode } from '@/core/constants';
import ReactQueryProvider from '@/core/providers/lib/react-query';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://vercel.com'),
	title: 'Next-Tailwind Starter Template',
	description: 'Starter Template',
	keywords: ['nextjs', 'tailwindcss', 'template', 'starter', 'kit'],
	openGraph: {
		siteName: 'Next-Tailwind Starter Template',
		title: 'Next-Tailwind Starter Template',
		description: 'Starter Template',
		images: '/banner.png',
		type: 'website',
	},
	twitter: {
		title: 'Next-Tailwind Starter Template',
		description: 'Starter Template',
		images: '/banner.png',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{isDevMode && (
					<script
						src="https://unpkg.com/react-scan/dist/auto.global.js"
						async
					/>
				)}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
