import React from 'react';
import * as motion from '@/lib/motion';
import Image from 'next/image';
import {MutedText} from './shared/text.component';
import {getImage} from '@/lib/image';

export async function Bio() {
	const {base64, img} = await getImage(
		'/me.jpg',
	);

	return (
		<motion.div
			className='mt-20 w-full flex items-center justify-center flex-col gap-10 lg:flex-row lg:gap-40 lg:px-20 lg:py-10'
		>
			<motion.div
				className='polaroid-container bg-white p-4 flex flex-col items-center gap-3'
				initial={{
					translateX: -200,
					opacity: 0,
				}}
				whileInView={{
					translateX: 0,
					opacity: 1,
					transition: {
						duration: 0.3,
					},
				}}
				viewport={{once: true}}
			>
				<div className='w-80 h-80 relative'>
					<Image
						fill
						src={img.src}
						alt='Me'
						objectFit='cover'
						quality={100}
						className='drop-shadow-lg'
						placeholder='blur'
						blurDataURL={base64}
					/>
				</div>
				<span className='text-md text-black font-medium'>📍 Brooklyn, NY</span>
			</motion.div>

			<motion.div
				className='text-lg font-medium max-w-xl text-primary'
				initial={{
					translateX: 200,
					opacity: 0,
				}}
				whileInView={{
					translateX: 0,
					opacity: 1,
					transition: {
						duration: 0.3,
					},
				}}
				viewport={{once: true}}
			>
				<MutedText>Born, raised, and still thriving in </MutedText> New York City. <MutedText>I’ve been</MutedText> developing software for over four years new, focusing on highly efficient and scalable automation systems, web applications, and desktop apps.
				<br/>
				<br/>
				<MutedText>I’m always learning new things, and </MutedText> my current obsession is software design and system design (very different I know). <MutedText>When I’m not coding or designing, you’ll find me DJing, or at a EDM show. I also enjoy photography a lot, and you can find more of my photos on this page.</MutedText>
			</motion.div>
		</motion.div>
	);
}
