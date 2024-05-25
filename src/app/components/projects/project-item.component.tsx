import Image from 'next/image';
import React from 'react';
import {ChevronRight} from 'lucide-react';
import {type Variants} from 'framer-motion';
import * as motion from '@/lib/motion';
import {getPlaiceholder} from 'plaiceholder';
import {headers} from 'next/headers';

export type ProjectCardProps = {
	readonly name: string;
	readonly position: string;
	readonly date: string;
	readonly description: string;
	readonly imageSrc: string;
	readonly index: number;
};

const getImage = async (src: string) => {
	const buffer = await fetch(src).then(async res =>
		Buffer.from(await res.arrayBuffer()),
	);

	const {
		metadata: {height, width},
		...plaiceholder
	} = await getPlaiceholder(buffer, {size: 10});

	return {
		...plaiceholder,
		img: {src, height, width},
	};
};

export async function ProjectCard({
	name,
	position,
	date,
	description,
	imageSrc,
	index,
}: ProjectCardProps) {
	const variants = {
		initial: index % 2 === 0 ? {
			translateX: -200,
			opacity: 0,
		} : {
			translateX: 200,
			opacity: 1,
		},
		visible: {
			translateX: 0,
			opacity: 1,
		},
	} satisfies Variants;

	// Const {base64, img} = await getImage(
	// 	`${process.env.DOMAIN}${imageSrc}`,
	// );

	return (
		<motion.div
			className='flex flex-col rounded-md bg-card w-full lg:flex-row p-4 gap-3'
			variants={variants}
			whileInView='visible'
			initial='initial'
			viewport={{once: true}}
		>
			<div className='left-section flex flex-col justify-between gap-10 lg:max-w-72 lg:min-h-80'>
				<div className='project-text-container flex flex-col'>
					<span className='text-lg text-primary font-medium'>{name}</span>
					<span className='text-muted text-md font-medium'>{position}</span>
					<span className='text-muted text-md font-medium mb-4'>{date}</span>
					<p className='text-muted text-md'>{description}</p>
				</div>
				<motion.button
					type='button'
					className='w-full p-3 bg-primary text-background justify-between rounded-3xl project-button-drop-shadow hidden lg:flex'
					whileHover={{
						scale: 1.03,
					}}
				>
					<span>View  More</span>
					<ChevronRight/>
				</motion.button>

			</div>
			<div className='right-section w-full flex h-80 items-center bg-project-image/20 rounded-md lg:min-h-96'>
				<div className='image-wrapper w-full h-80 relative lg:h-full lg'>
					<Image
						fill
						src={imageSrc}
						objectFit='cover'
						alt={name}
						quality={100}
						className='rounded-md'
						// BlurDataURL={base64}
						// placeholder='blur'
					/>
				</div>
			</div>
			<button
				type='button'
				className='w-full p-3 bg-primary text-background justify-between rounded-md project-button-drop-shadow flex lg:hidden'
			>
				<span>View  More</span>
				<ChevronRight/>
			</button>
		</motion.div>
	);
}
