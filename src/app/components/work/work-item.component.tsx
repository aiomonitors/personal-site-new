import React from 'react';
import Image from 'next/image';
import {cn} from '@/lib/utils';

export type WorkItemProps = {
	readonly name: string;
	readonly role: string;
	readonly dates: string;
	readonly imageSrc: string;
};

export function WorkItem({
	name,
	role,
	dates,
	imageSrc,
}: WorkItemProps) {
	return (
		<div
			className={cn(
				'bg-card px-4 py-3 flex flex-col gap-3 rounded-md',
				'lg:min-w-[600px]',
			)}
		>
			<div className='flex gap-3 items-center'>
				<Image
					src={imageSrc}
					alt={name}
					width={100}
					height={100}
					className='rounded-lg'
				/>
				<div className='text-container flex-col flex'>
					<span className='text-primary text-lg font-bold'>{name}</span>
					<span className='text-muted text-md font-medium'>{role}r</span>
					<span className='text-muted text-md font-medium'>{dates}</span>
				</div>
			</div>
			<div className='buttons-container flex gap-3 basis-0'>
				<button className='text-sm w-full px-3 py-2 bg-transparent mr-2 border-white border-2 rounded-md font-medium' type='button'>View Site</button>
				<button className='text-sm w-full px-2 bg-white text-button-hover outline-none shadow-none rounded-md font-medium' type='button'>More Info</button>
			</div>
		</div>
	);
}
