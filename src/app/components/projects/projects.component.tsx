import React from 'react';
import * as motion from '@/lib/motion';
import {ProjectCard, type ProjectCardProps} from './project-item.component';

const DefaultProjectCard = {
	name: 'NFT Tracker',
	position: 'Freelance',
	date: '2021',
	description: 'A tool that assisted users in tracking NFT assets, analyze profits and create mass listings',
	imageSrc: '/nfttracker.png',
	index: 0,
} satisfies ProjectCardProps;

const visionProjectCard = {
	name: 'Vision',
	position: 'Backend & Systems Design',
	date: '2021 - 2022',
	description: 'Vision was an NFT tracking tool that allowed easy viewing and tracking of NFT collection rarity rankings. \n Acquired in 2022',
	imageSrc: '/vision.png',
	index: 1,
} satisfies ProjectCardProps;

const discodersProjectCard = {
	name: 'Discoders & OnDemand',
	position: 'Founder, Backend Engineer',
	date: '2018 - 2020',
	description: 'Discoders was a SaaS company dedicated to creating software solutions for sneaker reselling communities on Discord. Project was shut down in 2020 to pursue other career opportunities. Max ARR - $55K/year',
	imageSrc: '/discodersbanner.png',
	index: 2,
};

export function Projects() {
	const variants = {
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
		<motion.div
			className='w-full mt-20 flex flex-col'
			variants={variants}
			initial='initial'
			whileInView='visible'
			viewport={{once: true}}
		>
			<h1 className='section-header text-primary text-3xl font-bold mb-2'>Selected Works</h1>
			<motion.div
				className='cards-container w-full flex flex-col gap-3'
			>
				<ProjectCard {...DefaultProjectCard}/>
				<ProjectCard {...visionProjectCard}/>
				<ProjectCard {...discodersProjectCard}/>
			</motion.div>
		</motion.div>
	);
}
