import React from 'react';
import {type StringComponent, type ComponentWithChildren} from '@/types/component.types';

export function WorkDialogHeader({
	children,
}: ComponentWithChildren) {
	return (
		<div className='flex w-full justify-between items-center'>
			{children}
		</div>
	);
}

function WorkDialogTextContainer({
	children,
}: ComponentWithChildren) {
	return (
		<div className='flex flex-col'>
			{children}
		</div>

	);
}

function WorkDialogTextName({
	children,
}: StringComponent) {
	return (
		<h1 className='text-black font-bold text-3xl'>{children}</h1>

	);
}

function WorkDialogSubtext({
	children,
}: StringComponent) {
	return (
		<span className='text-muted font-medium text-2xl'>{children}</span>
	);
}

WorkDialogHeader.TextContent = WorkDialogTextContainer;
WorkDialogHeader.Header = WorkDialogTextName;
WorkDialogHeader.Subtext = WorkDialogSubtext;
