'use client';
import {AnimatePresence, type Variants} from 'framer-motion';
import React, {useEffect} from 'react';
import * as motion from '@/lib/motion';
import {useScrollLock} from 'usehooks-ts';
import {X} from 'lucide-react';
import Image from 'next/image';
import {useHotkeys} from 'react-hotkeys-hook';
import {WorkOverview} from './work-overview';
import {WorkDialogHeader} from './work-dialog-header';

type WorkModalProps = {
	readonly isVisible: boolean;
	readonly onClose?: () => unknown;
	readonly children: React.ReactNode;
};

export function PrismWorkModal({
	isVisible,
	onClose,
	children,
}: WorkModalProps) {
	const {lock, unlock} = useScrollLock({
		autoLock: false,
		lockTarget: 'body',
	});

	useHotkeys('escape', () => onClose?.());

	useEffect(() => {
		if (isVisible) {
			lock();
		} else {
			unlock();
		}

		return () => {
			unlock();
		};
	}, [isVisible, lock, unlock]);

	const bgVariants = {
		initial: {
			opacity: 0,
			transition: {staggerDirection: -1, delay: 0.2},
		},
		animate: {
			opacity: 1,
		},
	} satisfies Variants;

	const cardVariants = {
		initial: {
			translateY: 400,
			opacity: 0,
			transition: {
				duration: 0.3,
			},
		},
		animate: {
			translateY: 0,
			opacity: 1,
			transition: {
				staggerChildren: 0.4,
				duration: 0.3,
			},
		},
	} satisfies Variants;

	const navVariants = {
		initial: {
			translateY: -100,
			opacity: 0,
			translateX: '-50%',
			transition: {
				duration: 0.3,
			},
		},
		animate: {
			translateY: 0,
			opacity: 1,
			translateX: '-50%',
			transition: {
				duration: 0.3,
			},
		},
	} satisfies Variants;

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className='w-full h-screen fixed bg-white top-0 left-0 z-20 overflow-hidden flex justify-center'
					initial='initial'
					animate='animate'
					exit='initial'
					variants={bgVariants}
				>
					<motion.div
						className='w-full max-w-5xl left-[50%] min-h-12 -translate-x-2/4 fixed p-1 lg:p-1 z-30 mt-2 bg-white rounded-full border-2 border-muted/20'
						variants={navVariants}
						initial='initial'
						animate='animate'
						exit='initial'
					>
						<button type='button' className='nav-button p-2 rounded-full border-muted/20 border-2 text-black hover:bg-black hover:text-white transition-all duration-200 ease-in-out' onClick={onClose}>
							<X/>
						</button>
					</motion.div>
					<motion.div
						className='max-w-5xl h-screen rounded-md w-full mt-20 flex flex-col p-5 lg:p-0 overflow-auto'
						variants={cardVariants}
						initial='initial'
						animate='animate'
						exit='initial'
					>
						<WorkDialogHeader>
							<WorkDialogHeader.TextContent>
								<WorkDialogHeader.Header>Prism Technologies</WorkDialogHeader.Header>
								<WorkDialogHeader.Subtext>Software Engineer (Full-Stack)</WorkDialogHeader.Subtext>
								<WorkDialogHeader.Subtext>June 2021 - September 2022t</WorkDialogHeader.Subtext>
							</WorkDialogHeader.TextContent>
							<Image
								src='/prism.png'
								className='rounded-lg'
								width={120}
								height={120}
								quality={100}
								alt='Prism'
							/>
						</WorkDialogHeader>
						<WorkOverview>
							<WorkOverview.Header>Overview</WorkOverview.Header>
							<WorkOverview.List>
								<WorkOverview.List.Item>Lead development of new desktop app, Refract, which gained almost 1,000 daily active subscribed users within 6 months of release</WorkOverview.List.Item>
								<WorkOverview.List.Item>Planned and executed code refactors leading to a large decrease in update release time, significantly altering our CI process</WorkOverview.List.Item>
								<WorkOverview.List.Item>Planned, communicated, and lead a small team of engineers to lead an infrastructure abstraction allowing us to build new apps on top of an internal framework, speeding up the release of Refract.</WorkOverview.List.Item>
								<WorkOverview.List.Item>Executed a refactor of the user dashboard into Next.JS, leading in massive load time improvements</WorkOverview.List.Item>
							</WorkOverview.List>
						</WorkOverview>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

