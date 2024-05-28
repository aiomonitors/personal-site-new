'use client';
import React, {useState} from 'react';
import * as motion from '@/lib/motion';
import {WorkItem, type WorkItemProps} from './work-item.component';
import {WorkModal} from '../work-modal/work-modal.component';
import {PrismWorkModal} from '../work-modal/prism-work-moda.component';
import PrismModalImages from '../work-modal/prism-modal-images';
import {ScoutWorkModal} from '../work-modal/scout-work-modal.component';

const items = [
	{
		name: 'Prudential Financial',
		role: 'Senior Software Engineer',
		dates: 'September 2022 - Present',
		imageSrc: '/pru.png',
		itemId: 'pru',
	},
	{
		name: 'Prism Technologies',
		role: 'Senior Software Engineer',
		dates: 'June 2021 - September 2022',
		imageSrc: '/prism.png',
		itemId: 'prism',
	},
	{
		name: 'Scout',
		role: 'Software Engineer (Web)',
		dates: 'Dates',
		imageSrc: '/scout.png',
		itemId: 'scout',
	},
] satisfies Array<Omit<WorkItemProps, 'onClick'> & {itemId: string}>;

export function WorkSection() {
	const [showWorkModal, setShowWorkModal] = useState('none');

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

	const onWorkItemClick = (item: string) => () => {
		setShowWorkModal(item);
		console.log('onClick');
	};

	const onWorkItemClose = () => {
		setShowWorkModal('none');
	};

	return (
		<>
			<PrismWorkModal isVisible={showWorkModal === 'prism'} onClose={onWorkItemClose}>
				<PrismModalImages/>
			</PrismWorkModal>

			<WorkModal isVisible={showWorkModal === 'pru'} onClose={onWorkItemClose}/>
			<ScoutWorkModal isVisible={showWorkModal === 'scout'} onClose={onWorkItemClose}/>

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
							<WorkItem {...item} onClick={onWorkItemClick(item.itemId)}/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
}
