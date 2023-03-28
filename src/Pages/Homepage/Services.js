import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
	const services = [
		{
			id: 1,
			img: fluoride,
			header: 'Fluoride Treatment',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magnam incidunt. Ullam placeat numquam incidunt ',
		},
		{
			id: 2,
			img: cavity,
			header: 'Cavity Filling',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magnam incidunt. Ullam placeat numquam incidunt ',
		},
		{
			id: 3,
			img: whitening,
			header: 'Teeth Whitening',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magnam incidunt. Ullam placeat numquam incidunt ',
		},
	];
	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className='text-secondary uppercase font-bold text-xl mb-5'>
				Our Services
			</h2>
			<h1 className='text-4xl text-accent mb-12 lg:mb-20'>
				Services We Provide
			</h1>
			<div className='w-full flex flex-col lg:flex-row gap-10 lg:justify-evenly justify-center items-center box-content mb-14 lg:mb-48'>
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Services;
