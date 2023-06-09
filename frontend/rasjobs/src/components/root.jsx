import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';
import { fetchJobs } from '../data/fetchData';

export async function loader() {
	const jobs = await fetchJobs();
	return jobs;
}
export default function Root(props) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<div className={`root ${theme}`}>
			<div className={`navigation ${theme}`}>
				<button onClick={toggleTheme}>toggle</button>
				<div className='logo'>Ras - Jobs</div>

				<div className='nav'>
					<ul>
						<li>
							<NavLink to='/'>jobs</NavLink>
						</li>
						<li>
							<NavLink to='/login'>sign in</NavLink>
						</li>

						<li>
							<NavLink to='/createProfile'>
								create profile
							</NavLink>
						</li>
						<li>
							<NavLink to='postJob'>Post jobs</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet id='details' />
			<Footer className='footer' />
		</div>
	);
}
