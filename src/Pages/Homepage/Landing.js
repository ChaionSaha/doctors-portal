import React from 'react';

import { ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Landing = () => {
	return (
		<div className='mt-9 px-12 w-full flex flex-col lg:flex-row gap-8 justify-between items-center text-white'>
			<div className='h-56 px-6 card card-side w-full lg:max-w-lg lg:w-1/3 bg-base-100 shadow-xl border-accent bg-gradient-to-r from-secondary to-primary'>
				<figure>
					<ClockIcon className='h-36 w-36'></ClockIcon>
				</figure>
				<div className='card-body justify-center '>
					<h2 className='card-title grow text-2xl font-bold'>Opening Hours</h2>
					<p className='max-h-max h-fit text-lg'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
						rerum. Dolore
					</p>
				</div>
			</div>
			<div className='h-56 px-6 card card-side w-full lg:max-w-lg lg:w-1/3 shadow-xl border-accent bg-accent'>
				<figure>
					<MapPinIcon className=' h-20 w-20'></MapPinIcon>
				</figure>
				<div className='card-body justify-center '>
					<h2 className='card-title grow text-2xl font-bold'>
						Visit Our Location
					</h2>
					<p className='max-h-max h-fit text-lg'>
						Brooklyn, NY 10036, United States
					</p>
				</div>
			</div>
			<div className='h-56 px-6 card card-side w-full lg:max-w-lg lg:w-1/3 bg-base-100 shadow-xl border-accent bg-gradient-to-r from-secondary to-primary'>
				<figure>
					<PhoneIcon className='h-20 w-20'></PhoneIcon>
				</figure>
				<div className='card-body justify-center '>
					<h2 className='card-title grow text-2xl font-bold'>Contact Us Now</h2>
					<p className='max-h-max h-fit text-lg'>+000 123 456789</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
