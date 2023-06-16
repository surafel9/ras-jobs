import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';
import { fetchJobs } from '../data/fetchData';

export async function loader() {
	const jobs = await fetchJobs();

	return jobs;
}

console.log(await loader());
export default function Root(props) {
	return (
		<div className='root'>
			<div className='navigation'>
				<div className='logo'>
					<NavLink to='/'>Ras - Jobs</NavLink>
				</div>

				<div className='nav'>
					<ul>
						<li>
							<NavLink to='/'>Jobs</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Sign In</NavLink>
						</li>

						<li>
							<NavLink to='/createProfile'>
								Create Profile
							</NavLink>
						</li>
						<li>
							<NavLink to='postJob'>Post Jobs</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet id='details' />
			<Footer className='footer' />
		</div>
	);
}
