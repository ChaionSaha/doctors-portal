import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
	return (
		<div>
			<div className='hero min-h-screen bg-base-100 border-primary border-2'>
				<div className='hero-content flex-col lg:flex-row-reverse w-full h-full border-secondary border-2'>
					<img
						src={chair}
						alt='chair'
						className='max-w-sm rounded-lg shadow-2xl ml-12'
					/>
					<div>
						<h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
						<p className='py-6'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
							aperiam itaque corporis tempore repellat alias quam quis est quasi
							dolorum omnis magnam quisquam, in rem cumque dicta voluptas eos
							natus!
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
