import React from 'react';
import * as motion from '@/lib/motion';
import {cn} from '@/lib/utils';

export function Nav() {
	const navChipClass = cn(
		'nav-chip text-muted hover:bg-button-hover hover:text-primary transition-all cursor-pointer px-3 py-1 rounded-md hidden',
		'sm:block md:block',
	);

	return (
		<motion.div
			className='w-full max-w-[1200px] left-[50%] -translate-x-2/4 fixed px-5 lg:px-0 z-10'
			initial={{
				translateY: -100,
				opacity: 0,
				translateX: '-50%',
			}}
			animate={{
				translateY: 0,
				opacity: 1,
				translateX: '-50%',
			}}
		>
			<div className='w-full bg-card-alt py-3 px-2 rounded-lg flex items-center justify-between h-16 border-muted/30 border-2'>
				<div className='flex items-center gap-2'>
					<span className='bg-button-hover text-3xl rounded-full flex items-center justify-center w-10 h-10'>🤒</span>
					<span className='text-black text-md'>Shihab Chowdhury</span>
				</div>
				<div className='nav-chips-container flex items-center gap-2'>
					<div className={navChipClass}>About Me</div>
					<div className={navChipClass}>Work Experience</div>
					<div className={navChipClass}>Projects</div>
					<div className='nav-chip text-muted bg-black text-white hover:bg-button-hover hover:text-primary transition-all cursor-pointer px-3 py-1 rounded-md'>Say Hello!</div>
				</div>
			</div>
		</motion.div>
	);
}
