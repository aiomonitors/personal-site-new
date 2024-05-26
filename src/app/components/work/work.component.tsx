'use client';
import React, {useState} from 'react';
import * as motion from '@/lib/motion';
import {WorkItem, type WorkItemProps} from './work-item.component';
import {WorkModal} from '../work-modal/work-modal.component';

const items = [
	{
		name: 'Prudential Financial',
		role: 'Senior Software Engineer',
		dates: 'September 2022 - Present',
		imageSrc: '/pru.png',
	},
	{
		name: 'Prism Technologies',
		role: 'Senior Software Engineer',
		dates: 'June 2021 - September 2022',
		imageSrc: '/prism.png',
	},
	{
		name: 'Scout',
		role: 'Software Engineer (Web)',
		dates: 'Dates',
		imageSrc: '/scout.png',
	},
] satisfies Array<Omit<WorkItemProps, 'onClick'>>;

export function WorkSection() {
	const [showWorkModal, setShowWorkModal] = useState(false);

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

	const itemVariants = {
		initial: {
			opacity: 0,
			translateY: -40,
		},
		visible: (i: number) => ({
			translateY: 0,
			opacity: 1,
		}),
	};

	const onWorkItemClick = () => {
		setShowWorkModal(true);
	};

	const onWorkItemClose = () => {
		setShowWorkModal(false);
	};

	return (
		<>
			<WorkModal isVisible={showWorkModal} onClose={onWorkItemClose}/>
			<motion.div
				className='work-section flex flex-col'
				variants={workVariants}
				initial='initial'
				whileInView='visible'
				viewport={{once: true}}
			>
				<span className='work-section-header text-3xl text-primary font-bold mb-2'>Work Experience</span>

				<motion.div
					className='work-items flex flex-col gap-5'
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.5,
							},
						},
					}}
				>
					{items.map((item, i) => (
						<motion.div key={`${item.name}`} variants={itemVariants} custom={i}>
							<WorkItem {...item} onClick={onWorkItemClick}/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
}
