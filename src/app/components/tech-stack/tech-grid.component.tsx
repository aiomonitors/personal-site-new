import type React from 'react';
import {motion} from 'framer-motion';

export function TechGrid({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	const workVariants = {
		initial: {
			translateX: -100,
			opacity: 0,
		},
		visible: {
			translateX: 0,
			opacity: 1,
		},
	};

	return (
		<div
			className='flex flex-row flex-wrap gap-5 text-md w-full h-min-content py-10 px-8'
		>
			{children}
		</div>
	);
}

export function TechCard({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className='flex items-center gap-5 min-w-[45%] md:min-w-[30%] lg:min-w-[20%] text-white text-md py-2 px-1'>
			{children}
		</div>
	);
}

export function TechTitle({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<span className=''>{children}</span>
	);
}
