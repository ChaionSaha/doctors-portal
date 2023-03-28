import React from 'react';

const Service = ({ service }) => {
	return (
		<div className='card w-80 lg:w-1/4 bg-base-100 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img src={service.img} alt='service-img' className='rounded-xl' />
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{service.header}</h2>
				<p>{service.body}</p>
			</div>
		</div>
	);
};

export default Service;
