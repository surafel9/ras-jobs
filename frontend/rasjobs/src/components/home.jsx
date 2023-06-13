import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../style/style.scss';
import Profile from './profile';
import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';
import StatCard from './statCard';
import CreateProfile from './createProfile';

export default function Home(props) {
	const data = useLoaderData();
	const [isLoged, setIsLgged] = useState(false);
	return (
		<div className='home'>
			{isLoged ? (
				<Profile className='profile' />
			) : (
				<CreateProfile className='create-profile' />
			)}

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
