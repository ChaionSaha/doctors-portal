import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Banner = () => {
	return (
		<div
			className='hero min-h-screen relative bg-base-100'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='hero-content max-w-full px-36 flex-col lg:flex-row-reverse lg:gap-x-48'>
				<img
					src={chair}
					alt='chair'
					className='max-w-sm lg:max-w-xl rounded-lg shadow-2xl ml-12'
				/>
				<div className='flex flex-col w-1/2'>
					<h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
					<p className='py-6'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
						aperiam itaque corporis tempore repellat alias quam quis est quasi
						dolorum omnis magnam quisquam, in rem cumque dicta voluptas eos
						natus!
					</p>
					<button className='btn btn-primary text-white font-bold lg:self-start self-center'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
