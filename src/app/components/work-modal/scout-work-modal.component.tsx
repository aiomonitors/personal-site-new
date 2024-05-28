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
	readonly onClose: () => unknown;
};

export function ScoutWorkModal({
	isVisible,
	onClose,
}: WorkModalProps) {
	const {lock, unlock} = useScrollLock({
		autoLock: false,
		lockTarget: 'body',
	});

	useHotkeys('escape', () => onClose());

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
						className='max-w-5xl h-screen rounded-md w-full mt-20 flex flex-col p-5 lg:p-0'
						variants={cardVariants}
						initial='initial'
						animate='animate'
						exit='initial'
					>
						<WorkDialogHeader>
							<WorkDialogHeader.TextContent>
								<WorkDialogHeader.Header>Scout</WorkDialogHeader.Header>
								<WorkDialogHeader.Subtext>Software Engineer (Frontend)</WorkDialogHeader.Subtext>
								<WorkDialogHeader.Subtext>October 2020 - March 2021</WorkDialogHeader.Subtext>
							</WorkDialogHeader.TextContent>
							<Image
								src='/scout.png'
								className='rounded-lg'
								width={120}
								height={120}
								quality={100}
								alt='Pru'
							/>
						</WorkDialogHeader>
						<WorkOverview>
							<WorkOverview.Header>Overview</WorkOverview.Header>
							<WorkOverview.List>
								<WorkOverview.List.Item>Worked with a small team of developers to plan and rewrite the Ruby on Rails app in React. </WorkOverview.List.Item>
								<WorkOverview.List.Item>Worked with modern frameworks such as Next.JS and MobX.</WorkOverview.List.Item>
								<WorkOverview.List.Item>Scout was acquired by StockX</WorkOverview.List.Item>
							</WorkOverview.List>
						</WorkOverview>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

