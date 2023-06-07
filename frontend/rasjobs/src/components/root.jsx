import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';
import { fetchJobs } from '../data/fetchData';

export async function loader() {
	const jobs = await fetchJobs();
	return jobs;
}
export default function Root(props) {
	return (
		<div className='root'>
			<div className='navigation'>
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
