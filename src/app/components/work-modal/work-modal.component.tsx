import {AnimatePresence, type Variants} from 'framer-motion';
import React, {useEffect} from 'react';
import * as motion from '@/lib/motion';
import {useScrollLock} from 'usehooks-ts';
import {X} from 'lucide-react';
import Image from 'next/image';

type WorkModalProps = {
	readonly isVisible: boolean;
	readonly onClose: () => unknown;
};

export function WorkModal({
	isVisible,
	onClose,
}: WorkModalProps) {
	const {lock, unlock} = useScrollLock({
		autoLock: false,
		lockTarget: 'body',
	});

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
						className='w-full max-w-5xl left-[50%] min-h-12 -translate-x-2/4 fixed p-1 lg:p-1 z-30 mt-2 bg-white rounded-3xl border-2 border-muted/20'
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
						className='max-w-5xl h-screen rounded-md w-full mt-20 flex flex-col'
						variants={cardVariants}
						initial='initial'
						animate='animate'
						exit='initial'
					>
						<div className='flex w-full justify-between items-center'>
							<div className='flex flex-col'>
								<h1 className='text-black font-bold text-3xl'>Prudential Financial</h1>
								<span className='text-muted font-medium text-2xl'>Senior Software Engineer</span>
								<span className='text-muted font-medium text-2xl'>September 2022 - Present</span>
							</div>
							<Image
								src='/pru.png'
								className='rounded-lg'
								width={120}
								height={120}
								quality={100}
								alt='Pru'
							/>
						</div>
						<div className='flex flex-col'>
							<h2 className='text-black font-medium text-2xl'>Overview</h2>
							<ul className='text-md font-normal text-black list-disc list-outside'>
								<li className='ml-5'>Lead a development team of 7 engineers in planning and developing a new life insurance web application, enforcing modern standards and introducing new tools to create a betterdevelopment lifecycle for engineers.</li>
								<li className='ml-5'>Assisted early talent team with intern interviews for over 20 candidates</li>
								<li className='ml-5'>Held year-round bi-weekly developer touchpoint to help mentor and guide junior developers on the team</li>
								<li className='ml-5'>Used wide knowledge and proficiency in working with React applications to quickly respond and resolve 25+ production bugs in first months, resulting in faster bug fixes for our users</li>
								<li className='ml-5'>Created documentation for an agile journey of over 150 developers to emphasize and enforce modern development standards</li>
							</ul>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
