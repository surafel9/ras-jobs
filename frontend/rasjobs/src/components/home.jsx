import React from 'react';

import '../style/style.scss';
import Profile from './profile';
import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';
import StatCard from './statCard';
import { useLoaderData } from 'react-router-dom';

export default function Home(props) {
	const data = useLoaderData();

	return (
		<div className='home'>
			<Profile className='profile' />
			<div className='main'>
				<Search className='search' />
				<JobList className='job-list'>
					<JobCard className='job-card' data={data} />
					<StatCard className='stat-card' />
				</JobList>
			</div>
		</div>
	);
}
