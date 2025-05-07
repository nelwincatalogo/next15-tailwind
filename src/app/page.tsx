'use client';

import CounterSample from '@/components/samples/counter.sample';

export default function Home() {
	return (
		<div className="p-8">
			<h1 className="text-center text-4xl font-bold text-red-500">
				Next-Tailwind Starter Template
			</h1>

			<div className="mt-8 grid place-items-center bg-gray-200 p-8">
				<CounterSample />
			</div>
		</div>
	);
}
