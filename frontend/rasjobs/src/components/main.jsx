import React, { useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';

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

				<div className={`nav ${isMenuOpen ? 'active' : ''}`}>
					<ul>
						<li>
							<NavLink
								to='/'
								onClick={() => {
									setIsPieChartOpen(true);
									toggleMenu();
								}}
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
								onClick={() => {
									setIsPieChartOpen(true);
									toggleMenu();
								}}
							>
								{state.userStats.isLoggedIn
									? 'Sign Out'
									: 'Sign In'}
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/createProfile'
								onClick={() => {
									setIsPieChartOpen(true);
									toggleMenu();
								}}
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
								onClick={toggleMenu}
							>
								Post Jobs
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='hamburger'>
					<span onClick={toggleMenu}></span>
					<span onClick={toggleMenu}></span>
					<span onClick={toggleMenu}></span>
				</div>
			</div>
			<Outlet id='details' context={[isPieChartOpen]} />
			<Footer />
		</div>
	);
}
