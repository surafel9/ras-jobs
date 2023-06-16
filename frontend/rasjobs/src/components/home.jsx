import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../style/style.scss';
import Profile from './profile';
import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';

import CreateProfile from './createProfile';
import UsaJobs from './usaJobs';

export default function Home(props) {
	const [searchKey, setSerachKey] = useState('');

	const handleSearchKey = (arg) => {
		setSerachKey(arg);
	};
	const data = useLoaderData();
	//const usaJobs = useLoaderData();

	const [isLoged, setIsLgged] = useState(false);
	return (
		<div className='home'>
			{isLoged ? (
				<Profile className='profile' />
			) : (
				<CreateProfile className='create-profile' data={data} />
			)}

			<div className='main'>
				<Search className='search' handleSearchKey={handleSearchKey} />
				<JobList className='job-list'>
					<JobCard className='job-card' data={data} />
					<UsaJobs className='stat-card' searchKey={searchKey} />
				</JobList>
			</div>
		</div>
	);
}
