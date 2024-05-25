import React from 'react';

export function MutedText({children}: {readonly children: React.ReactNode}) {
	return (
		<span className='text-muted'>
			{children}
		</span>
	);
}
