import React, { useState, useEffect } from 'react';
import { fetchUSAJobs } from '../data/fetchUSAJobs';

export default function UsaJobs({ className, searchKey }) {
	const [usaJobs, setUsaJobs] = useState([]);
	const [isComponentLoaded, setIsComponentLoaded] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchUSAJobs(searchKey);
			setUsaJobs(result);
		};
		if (isComponentLoaded) {
			fetchData();
		} else {
			setIsComponentLoaded(true);
		}
	}, [searchKey, isComponentLoaded]);

	return (
		<div className={className}>
			<div className='decimilar'>
				<h3>STOP!</h3>
				<p>This is a real Data </p>
				<p>Feel free to use the links to apply🙂</p>
			</div>
			<div className='gov-jobs'>
				<h3>Government Jobs</h3>
			</div>
			{usaJobs.map((job) => (
				<GovJobsList job={job} />
			))}
		</div>
	);
}

function GovJobsList({ job }) {
	const jobItem = job.MatchedObjectDescriptor;

	//ApplicationCloseDate
	//ApplyURI
	//JobCategory

	//OrganizationName

	//PositionLocationDisplay
	//PositionRemuneration
	//PositionStartDate
	//PositionTitle
	//QualificationSummary
	//PublicationStartDate
	console.log();
	return (
		<div className='gov-card'>
			<h4>Position: {jobItem.PositionTitle}</h4>
			<p>
				Posted on:{' '}
				{new Date(jobItem.PublicationStartDate).toLocaleDateString()}
			</p>
			<p>
				Ends on:{' '}
				{new Date(jobItem.ApplicationCloseDate).toLocaleDateString()}
			</p>
			<p>
				Salary range: {jobItem.PositionRemuneration[0].MinimumRange} to{' '}
				{jobItem.PositionRemuneration[0].MaximumRange} /
				{jobItem.PositionRemuneration[0].Description}
			</p>
			<p>Position Location: {jobItem.PositionLocationDisplay}</p>
			<h5>Application Summary:{jobItem.QualificationSummary} </h5>
			<a href='/'>Apply Here</a> or <a href='/'>see Details here </a>
		</div>
	);
}
