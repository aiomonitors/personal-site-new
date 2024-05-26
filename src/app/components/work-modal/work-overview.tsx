import React from 'react';

export function WorkOverview({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col'>{children}</div>
	);
}

function WorkHeader({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<h2 className='text-black font-medium text-2xl'>{children}</h2>
	);
}

function WorkList({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<ul className='text-md font-normal text-black list-disc list-outside'>
			{children}
		</ul>
	);
}

function WorkListItem({
	children,
}: {
	readonly children: string;
}) {
	return (
		<li className='ml-5'>{children}</li>
	);
}

WorkOverview.Header = WorkHeader;
WorkOverview.List = WorkList;
WorkList.Item = WorkListItem;
