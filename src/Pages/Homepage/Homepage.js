import React from 'react';
import Banner from './Banner';

const Homepage = () => {
	return (
		<div className='relative'>
			<Banner></Banner>
			<div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent'></div>
		</div>
	);
};

export default Homepage;
