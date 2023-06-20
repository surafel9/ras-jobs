/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';

import '../style/style.scss';
import Profile from './profile';
import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';

import CreateProfile from './createProfile';
import UsaJobs from './usaJobs';
import { fetchJobs } from '../data/fetchData';
import { filterJob } from '../data/filterJobs';
import Loading from './loading';
import { filterJobByKeyWord } from '../data/filterJobByKeyword';

export default function Home(props) {
	const [searchKey, setSearchKey] = useState('');
	const [formData, setFormData] = useState({
		job_category: '',
		work_location: '',
		org_state: '',
	});
	const [data, setData] = useState({
		isLoading: true,
		data: null,
		isDataFiltered: false,
	});
	const [cacheState, setCacheState] = useState();
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const jobs = await fetchJobs();
			setData({
				isLoading: false,
				data: jobs,
				isDataFiltered: false,
			});
			setCacheState(jobs);
		};
		fetchData();
	}, []);

	const filterDataHandler = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		filterJob(name, value, setData, data, cacheState);
	};

	const clearOptionHandler = (e) => {
		setFormData((prevState) => ({
			...prevState,
			job_category: '',
			work_location: '',
			org_state: '',
		}));
	};

	//filterDataHandler;

	const handleSearchKey = (arg) => {
		setSearchKey(arg);
		filterJobByKeyWord(arg, data, cacheState, setData);
	};

	return (
		<div className='home'>
			{isLogged ? (
				<Profile className='profile' />
			) : (
				!data.isLoading && (
					<CreateProfile
						className='profile create-profile'
						data={data}
					/>
				)
			)}

			<div className='main'>
				<Search
					className='search'
					handleSearchKey={handleSearchKey}
					filterDataHandler={filterDataHandler}
					formData={formData}
					clearOptionHandler={clearOptionHandler}
				/>
				<JobList className='job-list'>
					{!data.isLoading ? (
						<JobCard
							className='job-card'
							data={data.data}
							cacheState={cacheState}
						/>
					) : (
						<Loading />
					)}
					<UsaJobs className='gov-jobsCard' searchKey={searchKey} />
				</JobList>
			</div>
		</div>
	);
}
