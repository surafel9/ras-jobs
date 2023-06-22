import React, { useEffect, useReducer, useState } from 'react';

import '../style/style.scss';
import Profile from './profile';
import Search from './search';
import JobList from './jobList';
import JobCard from './jobCard';

import CreateProfile from './createProfile';
import UsaJobs from './usaJobs';
import { fetchJobs } from '../data/fetchData';
import Loading from './loading';

import { initalState } from '../store/initalState';
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
	console.log(state.data);
	const handleSearchKey = (arg) => {
		dispatch({ type: SET_SEARCHKEY, payload: arg });
		dispatch({ type: SET_LOADING, payload: true });
		dispatch({
			type: SET_FILTERED_DATA_BY_KEY_WORD,
		});
		dispatch({ type: SET_LOADING, payload: false });
	};

	return (
		<div className='home'>
			{isLogged ? (
				<Profile className='profile' />
			) : (
				!state.data.isLoading && (
					<CreateProfile
						className='profile create-profile'
						data={state.data}
					/>
				)
			)}

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
						<JobCard className='job-card' data={state.data.data} />
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
