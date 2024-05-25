import React from 'react';
import * as motion from '@/lib/motion';
import {Instagram, Linkedin, Github} from 'lucide-react';

export function Contact() {
	return (
		<div className='w-full min-h-72 contact-gradient rounded-lg mt-10 flex flex-col'>
			<div className='w-full h-full contact-overlay flex flex-1 rounded-lg p-5 flex-col justify-between  gap-5 lg:flex-row'>
				<div className='left-side flex flex-col justify-between gap-5'>
					<span className='text-black text-xl lg:text-3xl font-medium'>
						Want to work together? <br/>
						Reach out and say hi! 👋
					</span>
					<button type='button' className='px-5 py-3 text-white bg-black rounded-3xl drop-shadow-md w-max'>Contact Me</button>
				</div>

				<div className='right-side flex flex-col gap-5 justify-between'>
					<span className='text-black text-xl lg:text-3xl font-medium'>
						Connect with me: <br/>
						sachow168@gmail.com
					</span>
					<div className='flex flex-col gap-2'>
						<span className='text-black text-2xl font-medium'>Follow Me</span>
						<div className='buttons-container flex gap-2'>
							<a href='' className='decoration-none visited:decoration-none p-2 rounded-full bg-primary/30 border-muted/30 border-2 text-muted'>
								<Instagram strokeWidth={2} width={30} height={30}/>
							</a>
							<a href='' className='decoration-none visited:decoration-none p-2 rounded-full bg-primary/30 border-muted/30 border-2 text-muted'>
								<Linkedin strokeWidth={2} width={30} height={30}/>
							</a>
							<a href='' className='decoration-none visited:decoration-none p-2 rounded-full bg-primary/30 border-muted/30 border-2 text-muted'>
								<Github strokeWidth={2} width={30} height={30}/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
