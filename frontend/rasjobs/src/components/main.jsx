import React from 'react';
import Search from './search';
import JobList from './jobList';

export default function Main(props) {
	return (
		<div className={props.className}>
			<Search className={'search'} />
			<JobList className={'job-list'} />
		</div>
	);
}
