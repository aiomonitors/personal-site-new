import React, {useState} from 'react';
import OptimizedImage from '../optimized-img';
import {AnimatePresence} from 'framer-motion';
import * as motion from '@/lib/motion';
import Image from 'next/image';

export default function PrismModalImages() {
	const [selectedImage, setSelectedImage] = useState<string>();

	return (
		<div className='flex flex-wrap gap-2 mb-40 mt-10'>
			<motion.div className='image-wrapper p-1 bg-muted/20 rounded-lg flex gap-2 flex-wrap' layoutId='/refract-dashboard.png'>
				<OptimizedImage
					src='/refract-dashboard.png'
					width={650}
					height={600}
					style={{
						objectFit: 'cover',
					}}
					alt='Prism'
					onClick={() => {
						setSelectedImage('/refract-dashboard.png');
					}}
				/>
			</motion.div>

			<motion.div className='image-wrapper p-1 bg-muted/20 rounded-lg flex gap-2 flex-wrap' layoutId='/refract-login.png'>
				<OptimizedImage
					src='/refract-login.png'
					width={300}
					height={250}
					style={{
						objectFit: 'contain',
					}}
					alt='Prism'
					onClick={() => {
						setSelectedImage('/refract-login.png');
					}}
				/>
			</motion.div>

			<motion.div className='image-wrapper p-1 bg-muted/20 rounded-lg flex gap-2 flex-wrap' layoutId='/refract-tasks.png'>
				<OptimizedImage
					src='/refract-tasks.png'
					width={650}
					height={600}
					style={{
						objectFit: 'cover',
					}}
					alt='Prism'
					onClick={() => {
						setSelectedImage('/refract-tasks.png');
					}}
				/>
			</motion.div>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						key='modal'
						className='w-full h-screen fixed bg-muted/40 z-30 left-0 top-0 flex items-center justify-center'
						onClick={() => {
							setSelectedImage(undefined);
						}}
					>
						<motion.div className='w-[90%] h-[90%] relative' layoutId={selectedImage}>
							<Image
								fill
								src={selectedImage}
								style={{
									objectFit: 'contain',
								}}
								alt='Prism'
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
