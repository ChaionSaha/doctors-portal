import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Banner = () => {
	return (
		<div
			className='hero min-h-screen relative bg-base-100'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='hero-content max-w-full lg:px-36 flex-col lg:flex-row-reverse lg:gap-x-48 '>
				<img
					src={chair}
					alt='chair'
					className='max-w-xs lg:max-w-xl rounded-lg shadow-2xl lg:ml-12'
				/>
				<div className='z-20 px-4 lg:px-0 w-full flex flex-col lg:w-1/2'>
					<h1 className='text-5xl font-bold mb-4'>
						Your New Smile Starts Here
					</h1>
					<p className=' text- py-6 mb-7'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
						aperiam itaque corporis tempore repellat alias quam quis est quasi
						dolorum omnis magnam quisquam, in rem cumque dicta voluptas eos
						natus!
					</p>
					<button className='w-32 h-16 z-50 btn btn-primary text-white font-bold self-start '>
						Get Started
					</button>
				</div>
			</div>
			<div className='z-10 absolute bottom-0 lg:bottom-0 w-full h-7 lg:h-1/4 bg-gradient-to-t from-white to-transparent'></div>
		</div>
	);
};

export default Banner;
