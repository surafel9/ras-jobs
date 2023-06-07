import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';

export default function Navigation(props) {
	return (
		<div className={props.className}>
			<button onClick={() => props.toggleMode()}>toggle</button>
			<div className='logo'>Logo</div>
			<div className='nav'>
				<ul>
					<li>
						<NavLink to='/'>jobs</NavLink>
					</li>
					<li>
						<NavLink to='/login'>sign in</NavLink>
					</li>

					<li to='/createProfile'>
						<NavLink>create profile</NavLink>
					</li>
					<li>
						<NavLink to='postJob'>Post jobs</NavLink>
					</li>
				</ul>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
}
