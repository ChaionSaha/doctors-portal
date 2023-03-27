import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, title }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? 'bg-accent text-slate-200 font-normal' : ''
			}
		>
			{title}
		</NavLink>
	);
};

export default CustomNavLink;
