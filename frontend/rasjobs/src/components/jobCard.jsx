import React, { useState } from 'react';

export default function JobCard({ className, data }) {
	return (
		<div className={className}>
			{data.map((item) => (
				<JobItem key={item.id} item={item} />
			))}
		</div>
	);
}

function JobItem({ item }) {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [showFullRequirements, setShowFullRequirements] = useState(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};
	const toggleRequirements = () => {
		setShowFullRequirements(!showFullRequirements);
	};
	return (
		<div className='card'>
			<h3>Title: {item.title}</h3>
			<p>Expected Salary: {item.salary}</p>
			<p>
				Work location: {item.work_location}, {item.org_city} -{' '}
				{item.org_state}
			</p>
			<h4>Job Description</h4>

			{showFullDescription ? (
				<p>{item.job_description}</p>
			) : (
				<p>
					{item.job_description.slice(0, 100)} ...{' '}
					<button onClick={toggleDescription}>Read More</button>
				</p>
			)}
			<h4>Job Requirements</h4>
			{showFullRequirements ? (
				<p>{item.job_requirements}</p>
			) : (
				<p>
					{item.job_requirements.slice(0, 100)} ...{' '}
					<button onClick={toggleRequirements}>Read More</button>
				</p>
			)}
			<button>Apply</button>
			<button>Save</button>
		</div>
	);
}
