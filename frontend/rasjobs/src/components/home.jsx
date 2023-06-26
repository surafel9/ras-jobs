import React, { useEffect, useReducer, useState } from 'react';

import '../style/style.scss';

import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';

import UsaJobs from './usaJobs';
import { fetchJobs } from '../data/fetchData';
import Loading from './loading';

import { initalState } from '../store/jobsInitalState';
import { jobReducer } from '../store/jobsReducer';
import {
	SET_FORMDATA,
	CLEAR_FORMDATA,
	SET_LOADING,
	SET_DATA,
	SET_CACHESTATE,
	FILTER_DATA,
	SET_SEARCHKEY,
	SET_FILTERED_DATA_BY_KEY_WORD,
} from '../store/types';
import PieChartData from './pieChartData';
import ProfilePromo from './profile/profilePromo';

export default function Home(props) {
	const [state, dispatch] = useReducer(jobReducer, initalState);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch({ type: SET_LOADING, payload: true });
				const jobs = await fetchJobs();
				dispatch({ type: SET_DATA, payload: jobs });
				dispatch({ type: SET_CACHESTATE, payload: jobs });
				dispatch({ type: SET_LOADING, payload: false });
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const filterDataHandler = (event) => {
		const { name, value } = event.target;

		if (name === 'work_location') {
			dispatch({
				type: SET_FORMDATA,
				payload: { name, value, isWork_locationTwice: true },
			});
		} else {
			dispatch({
				type: SET_FORMDATA,
				payload: { name, value, isWork_locationTwice: false },
			});
		}

		dispatch({ type: FILTER_DATA });
	};

	const clearOptionHandler = () => {
		dispatch({ type: SET_LOADING, payload: true });
		dispatch({
			type: CLEAR_FORMDATA,
		});
		dispatch({
			type: SET_DATA,
			payload: state.cahcheState,
		});

		dispatch({ type: SET_LOADING, payload: false });
	};

	const handleSearchKey = (arg) => {
		const processedKeyword = arg.toLowerCase().trim();
		const pattern = /^[a-zA-Z,\-\s]+$/;
		if (processedKeyword.length === 0 || !pattern.test(processedKeyword)) {
			return;
		}
		dispatch({ type: SET_SEARCHKEY, payload: processedKeyword });
		dispatch({ type: SET_LOADING, payload: true });
		dispatch({
			type: SET_FILTERED_DATA_BY_KEY_WORD,
		});
		dispatch({ type: SET_LOADING, payload: false });
	};

	return (
		<div className='home'>
			<div className='profile'>
				<div className='profile-promo-page'>
					<ProfilePromo className='user-demo' />
				</div>
				<div className='pie-chart-jobs-data'>
					{state.data.isLoading ? (
						<Loading />
					) : (
						<PieChartData data={state.data} />
					)}
				</div>
			</div>

			<div className='main'>
				<Search
					className='search'
					handleSearchKey={handleSearchKey}
					filterDataHandler={filterDataHandler}
					formData={state.formData}
					isDataFiltered={state.data.isDataFiltered}
					clearOptionHandler={clearOptionHandler}
				/>
				<JobList className='job-list'>
					{!state.data.isLoading ? (
						<JobCard className='job-card' data={state.data} />
					) : (
						<Loading />
					)}
					<UsaJobs
						className='gov-jobsCard'
						searchKey={state.searchKey}
					/>
				</JobList>
			</div>
		</div>
	);
}
