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
import Loading from './loading';

export default function Home(props) {
	const [searchKey, setSerachKey] = useState('');

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

	//we need to update the state before the second filter or keep track of original state for each filter and also manage the data passed to the pie chart not to change on each filter or should update accordinglly

	//issue after reaching last page!

	useEffect(() => {
		(async function () {
			const jobs = await fetchJobs();
			setData((prevData) => ({
				...prevData,
				isLoading: false,
				data: jobs,
			}));
			setCacheState(jobs);
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filterDataHandler = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		filterJob(name, value);
	};

	const filterJob = async (formDataName, formDataValue) => {
		try {
			if (data.isDataFiltered === true) {
				const filterdJobs = cacheState.filter(
					(job) =>
						job[formDataName].toLowerCase() ===
						formDataValue.toLowerCase()
				);
				setData((prevData) => ({
					...prevData,
					isLoading: false,
					data: filterdJobs,
					isDataFiltered: true,
				}));
			} else {
				const filterdJobs = data.data.filter(
					(job) =>
						job[formDataName].toLowerCase() ===
						formDataValue.toLowerCase()
				);

				setData((prevData) => ({
					...prevData,
					isLoading: false,
					data: filterdJobs,
					isDataFiltered: true,
				}));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearchKey = (arg) => {
		setSerachKey(arg);
	};

	//const usaJobs = useLoaderData();

	const [isLoged, setIsLgged] = useState(false);

	return (
		<div className='home'>
			{isLoged ? (
				<Profile className='profile' />
			) : data.isLoading ? (
				<Loading />
			) : (
				<CreateProfile
					className='profile create-profile'
					data={data.data}
					isLoading={data.isLoading}
				/>
			)}

			<div className='main'>
				<Search
					className='search'
					handleSearchKey={handleSearchKey}
					filterDataHandler={filterDataHandler}
					formData={formData}
				/>
				<JobList className='job-list'>
					{data.isLoading ? (
						<Loading />
					) : (
						<JobCard
							className='job-card'
							data={data.data}
							cacheState={cacheState}
						/>
					)}

					<UsaJobs className='gov-jobsCard' searchKey={searchKey} />
				</JobList>
			</div>
		</div>
	);
}
