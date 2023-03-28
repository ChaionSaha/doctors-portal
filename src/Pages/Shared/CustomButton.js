import React from 'react';

const CustomButton = ({ children }) => {
	return (
		<button className=' border-0 w-32 h-16 z-50 btn text-white font-bold self-start bg-gradient-to-r from-secondary to-primary'>
			{children}
		</button>
	);
};

export default CustomButton;
