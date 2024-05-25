
import React from 'react';
import Image from 'next/image';
import {type Variants} from 'framer-motion';
import * as motion from '@/lib/motion';
import {Nav} from './components/nav.component';
import {Bio} from './components/bio.component';
import {Hero} from './components/hero.component';
import {WorkSection} from './components/work/work.component';
import {
	SiSolidity,
	SiTypescript,
	SiDocker,
	SiJavascript,
	SiGoland,
	SiNextdotjs,
	SiStyledcomponents,
	SiSass,
	SiGit,
	SiReact,
	SiPostgresql,
	SiMongodb,
	SiVercel,
} from 'react-icons/si';
import {TechGrid, TechCard, TechTitle} from './components/tech-stack/tech-grid.component';
import {Projects} from './components/projects/projects.component';
import {Contact} from './components/contact/contact.component';

export default function Home() {
	const workVariants = {
		initial: {
			translateX: 100,
			opacity: 0,
		},
		visible: {
			translateX: 0,
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.5,
			},
		},
	} satisfies Variants;

	const childVariants = {
		initial: {
			translateY: -100,
			opacity: 0,
		},
		visible: {
			translateY: 0,
			opacity: 1,
		},
	} satisfies Variants;

	return (
		<main className='flex min-h-screen flex-col p-5 bg-background items-center'>
			<div className='max-w-[1200px]'>
				<Nav/>
				<Hero/>
				<Bio/>
				<motion.div className='mt-20 w-full flex flex-col gap-10 lg:flex-row'>
					<WorkSection/>

					<motion.div
						className='flex flex-col items-end w-full'
						variants={workVariants}
						initial='initial'
						whileInView='visible'
						viewport={{once: true}}
					>
						<motion.div
							className='flex flex-col items-start lg:items-end'
							variants={childVariants}
						>
							<span className='work-section-header text-3xl text-primary font-bold mb-2'>My Technology</span>
							<div className='bg-pink-500 w-min-content h-min-content rounded-lg'>
								<TechGrid>
									<TechCard>
										<SiReact/>
										<TechTitle>React</TechTitle>
									</TechCard>
									<TechCard>
										<SiSass/>
										<TechTitle>SASS</TechTitle>
									</TechCard>
									<TechCard>
										<SiNextdotjs/>
										<TechTitle>NextJS</TechTitle>
									</TechCard>
									<TechCard>
										<SiTypescript/>
										<TechTitle>TypeScript</TechTitle>
									</TechCard>
									<TechCard>
										<SiGoland/>
										<TechTitle>GoLang</TechTitle>
									</TechCard>
									<TechCard>
										<SiSolidity/>
										<TechTitle>Solidity</TechTitle>
									</TechCard>
									<TechCard>
										<SiJavascript/>
										<TechTitle>Javascript</TechTitle>
									</TechCard>
									<TechCard>
										<SiDocker/>
										<TechTitle>Docker</TechTitle>
									</TechCard>
									<TechCard>
										<SiPostgresql/>
										<TechTitle>Postgres</TechTitle>
									</TechCard>
									<TechCard>
										<SiMongodb/>
										<TechTitle>Mongo</TechTitle>
									</TechCard>
									<TechCard>
										<SiVercel/>
										<TechTitle>Vercel</TechTitle>
									</TechCard>
									<TechCard>
										<SiGit/>
										<TechTitle>Git</TechTitle>
									</TechCard>
									<TechCard>
										<SiStyledcomponents/>
										<TechTitle>styled-components</TechTitle>
									</TechCard>
								</TechGrid>
							</div>
						</motion.div>

						<motion.div
							className='w-full relative mt-5 h-80'
							variants={childVariants}
						>
							<Image
								fill
								src='/berlin.jpg'
								objectFit='cover'
								alt=''
								className='rounded-lg'
							/>
						</motion.div>
					</motion.div>
				</motion.div>
				<Projects/>
				<Contact/>
			</div>
		</main>
	);
}
