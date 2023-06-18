import React, { useState, useContext } from 'react';
import { DoubleChevronDownSvg } from '../util/doubleCheveronSVG';

import Pagination from '../util/pagination';

export default function JobCard({ className, data }) {
	const [activeCard, setActiveCard] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 10;
	const maxPageNumbers = 5;
	const showPageNumbers = true;

	const handleCardClick = (id) => {
		setActiveCard(id);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;

	const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
	const totalPages = Math.ceil(data.length / cardsPerPage);

	//should we use Cache State to update current cards back to default when reaching to the end? or make it fall back one step to show results from the end?
	return (
		<div className={className}>
			{currentCards.map((item) => (
				<JobItem
					key={item.id}
					item={item}
					handleCardClick={handleCardClick}
					active={item.id === activeCard}
				/>
			))}
			<Pagination
				handlePrevPage={handlePrevPage}
				handlePageChange={handlePageChange}
				handleNextPage={handleNextPage}
				maxPageNumbers={maxPageNumbers}
				currentPage={currentPage}
				totalPages={totalPages}
				showPageNumbers={showPageNumbers}
			/>
		</div>
	);
}

function JobItem({ item, handleCardClick }) {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [showFullRequirements, setShowFullRequirements] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [savedJob, setSavedJob] = useState(null);

	const handleHeartFill = (id) => {
		setIsSaved(!isSaved);
		setSavedJob(id);
	};
	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};
	const toggleRequirements = () => {
		setShowFullRequirements(!showFullRequirements);
	};

	const handleClick = () => {
		handleCardClick(item.id);
	};

	return (
		<div className='card' onFocus={handleClick}>
			<div className='job-details'>
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
						<DoubleChevronDownSvg toggle={toggleDescription} />
					</p>
				)}
				<h4>Job Requirements</h4>
				{showFullRequirements ? (
					<p>{item.job_requirements}</p>
				) : (
					<p>
						{item.job_requirements.slice(0, 100)} ...{' '}
						<DoubleChevronDownSvg toggle={toggleRequirements} />
					</p>
				)}
			</div>
			<div className='application-action'>
				<button>Apply</button>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='26'
					height='26'
					fill={isSaved ? '#ff8c00' : '#c75c00'}
					viewBox='0 0 16 16'
					onClick={(item) => handleHeartFill(item.id)}
				>
					<path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />

					{isSaved && (
						<path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' />
					)}
				</svg>
			</div>
		</div>
	);
}
