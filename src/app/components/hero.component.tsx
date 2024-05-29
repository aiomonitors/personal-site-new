/* eslint-disable react/jsx-key */
'use client';
import React from 'react';
import * as motion from '@/lib/motion';
import Image from 'next/image';

const textComponents = [
	<span className='text-primary'>👋&nbsp;</span>,
	<span className='text-muted'>Hey, I&apos;m <span className='text-primary'>Shihab. </span></span>,
	<span>
		<span className='text-muted'>I&apos;m a</span><br/> Senior Software Engineer <br/>
	</span>,
	<span>
		specializing <br/>in creating <span className='text-violet-400'>fast</span>, <span className='text-sky-400'>efficient</span>, and <span className='text-rose-400'>beautiful</span> experiences for clients.
	</span>,
];

export function Hero() {
	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			translateY: 0,
			transition: {
				delay: 0.4 + (i * 0.2),
			},
		}),
		hidden: {opacity: 0, translateY: -100},
	};

	return (
		<motion.div
			className='mt-20 w-full h-hero rounded-md flex items-center justify-between p-5 border-box md:p-10'
			initial={{
				translateY: -200,
				opacity: 0,
			}}
			animate={{
				translateY: 0,
				opacity: 1,
				transition: {
					delay: 0.3,
				},
			}}
		>
			<span className='text-primary text-3xl w-full leading-tight md:text-6xl md:max-w-3xl'>
				{textComponents.map(((c, i) => (
					<motion.span
						custom={i}
						animate='visible'
						variants={variants}
						initial='hidden'
					>{c}
					</motion.span>
				)))}
			</span>
			<motion.div
				className='object-cover rounded-md hidden lg:block'
				animate={{
					opacity: 1,
					transition: {
						delay: 1.2,
					},
				}}
				initial={{
					opacity: 0,
				}}
			>
				<Image
					src='/empire.jpg'
					alt='Empire State Building'
					width={418}
					height={700}
					quality={100}
					className='rounded-md'
				/>
			</motion.div>
		</motion.div>
	);
}
