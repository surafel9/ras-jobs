import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/main.scss';

import { useAuth } from './authProvider';

export default function Main(props) {
	const [isPieChartOpen, setIsPieChartOpen] = useState(false);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { state } = useAuth();
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className='root'>
			<div className='navigation'>
				<div className='logo'>
					<NavLink to='/' onClick={() => setIsPieChartOpen(false)}>
						Ras - Jobs
					</NavLink>
				</div>

				<div
					className={`nav ${isMenuOpen ? 'active' : ''}`}
					onClick={toggleMenu}
				>
					<ul>
						<li>
							<NavLink
								to='/'
								onClick={() => setIsPieChartOpen(false)}
							>
								Jobs
							</NavLink>
						</li>
						<li>
							<NavLink
								to={
									state.userStats.isLoggedIn
										? '/signout'
										: '/signin'
								}
							>
								{state.userStats.isLoggedIn
									? 'Sign Out'
									: 'Sign In'}
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/createProfile'
								onClick={() => setIsPieChartOpen(true)}
							>
								Create Profile
							</NavLink>
						</li>
						<li>
							<NavLink
								to={
									state.userStats.isLoggedIn
										? '/postJob'
										: '/signin'
								}
							>
								Post Jobs
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='hamburger' onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<Outlet id='details' context={[isPieChartOpen]} />
			<Footer className='footer' />
		</div>
	);
}
