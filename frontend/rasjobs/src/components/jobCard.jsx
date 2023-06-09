import React, { useState } from 'react';

export default function JobCard({ className, data }) {
	const [activeCard, setActiveCard] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 10;
	const maxPageNumbers = 5;

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

	const getPageNumbers = () => {
		const middlePage = Math.floor(maxPageNumbers / 2);
		let startPage = currentPage - middlePage;
		let endPage = currentPage + middlePage;

		if (startPage <= 0) {
			endPage += Math.abs(startPage) + 1;
			startPage = 1;
		}

		if (endPage > totalPages) {
			startPage -= endPage - totalPages;
			endPage = totalPages;
		}

		startPage = Math.max(startPage, 1);
		endPage = Math.min(endPage, totalPages);

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, index) => startPage + index
		);
	};

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

			<div className='pagination'>
				<button onClick={handlePrevPage} disabled={currentPage === 1}>
					&lt;
				</button>

				{getPageNumbers().map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => handlePageChange(pageNumber)}
						className={currentPage === pageNumber ? 'active' : ''}
					>
						{pageNumber}
					</button>
				))}

				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
				>
					&gt;
				</button>
			</div>
		</div>
	);
}

function JobItem({ item, handleCardClick }) {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [showFullRequirements, setShowFullRequirements] = useState(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};
	const toggleRequirements = () => {
		setShowFullRequirements(!showFullRequirements);
	};

	const handleClick = () => {
		handleCardClick(item.id);
		console.log(item.id);
	};

	return (
		<div className='card' onFocus={handleClick}>
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
