import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer';
import '../style/style.scss';

export default function Main(props) {
	const [isPieChartOpen, setIsPieChartOpen] = useState(false);

	return (
		<div className='root'>
			<div className='navigation'>
				<div className='logo'>
					<NavLink to='/' onClick={() => setIsPieChartOpen(false)}>
						Ras - Jobs
					</NavLink>
				</div>

				<div className='nav'>
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
							<NavLink to='/login'>Sign In</NavLink>
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
							<NavLink to='postJob'>Post Jobs</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet id='details' context={[isPieChartOpen]} />
			<Footer className='footer' />
		</div>
	);
}
