import React from 'react';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import Landing from './Landing';
import ServiceShowcase from './ServiceShowcase';
import Services from './Services';

const Homepage = () => {
	return (
		<div className='relative'>
			<Banner />
			<Landing />
			<Services />
			<ServiceShowcase />
			<HomeAppointment />
		</div>
	);
};

export default Homepage;
