import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
const HomeAppointment = () => {
	return (
		<div
			className='flex justify-center items-center text-center text-white h-[533px] mb-20'
			style={{
				backgroundImage: `url(${appointment})`,
			}}
		>
			<div className='hidden lg:flex flex-1  justify-center'>
				<img
					src={doctor}
					alt='doctor'
					className=' h-[636px] w-[606px] mt-[-100px]'
				></img>
			</div>
			<div className='flex-1 flex flex-col lg:items-start items-center px-7'>
				<h1 className='mb-5 font-bold text-xl text-secondary lg:text-left'>
					Appointment
				</h1>
				<h1 className='mb-5 text-5xl font-bold lg:text-left'>
					Make An Appointment Today
				</h1>
				<p className='mb-5 lg:text-left'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsumis that it has a more-or-less normal distribution of
					letters,as opposed to using 'Content here, content here', making it
					look like readable English. Many desktop publishing packages and web
					page
				</p>
				<button className='btn btn-primary'>Get Started</button>
			</div>
		</div>
	);
};

export default HomeAppointment;
