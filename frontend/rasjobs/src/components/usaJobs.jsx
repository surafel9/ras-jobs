import React, { useState, useEffect } from 'react';
import { fetchUSAJobs } from '../data/fetchUSAJobs';
import { DoubleChevronDownSvg } from '../util/doubleCheveronSVG';
import Pagination from '../util/pagination';
import { getPageNumbers } from '../util/redicule';

export default function UsaJobs({ className, searchKey }) {
	const [usaJobs, setUsaJobs] = useState([]);
	const [isComponentLoaded, setIsComponentLoaded] = useState(false);

	//const [activeCard, setActiveCard] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 5;
	const maxPageNumbers = 5;

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
	const currentCards = usaJobs.slice(indexOfFirstCard, indexOfLastCard);
	const totalPages = Math.ceil(usaJobs.length / cardsPerPage);

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
				<h3>Attention!</h3>
				<p>
					This is a real Data,{' '}
					<span>Feel free to use the links to apply 🙂 🤞</span>{' '}
				</p>
			</div>
			<div className='gov-jobs'>
				<h3>Government Jobs</h3>
			</div>

			{currentCards.map((job) => (
				<GovJobsList key={job.id} job={job} />
			))}

			{isComponentLoaded && (
				<Pagination
					handlePrevPage={handlePrevPage}
					handlePageChange={handlePageChange}
					handleNextPage={handleNextPage}
					maxPageNumbers={maxPageNumbers}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
}

function GovJobsList({ job }) {
	const [showFullSummary, setShowFullSummary] = useState(false);
	const toggleSummary = () => {
		setShowFullSummary(!showFullSummary);
	};
	//console.log(job.MatchedObjectId);
	//const jobItem = job.MatchedObjectDescriptor;

	return (
		<div className='gov-card'>
			<h4>Position: {job.MatchedObjectDescriptor.PositionTitle}</h4>
			<p>
				Posted on:{' '}
				{new Date(
					job.MatchedObjectDescriptor.PublicationStartDate
				).toLocaleDateString()}
			</p>
			<p>
				Ends on:{' '}
				{new Date(
					job.MatchedObjectDescriptor.ApplicationCloseDate
				).toLocaleDateString()}
			</p>
			<p>
				Salary range:{' '}
				{
					job.MatchedObjectDescriptor.PositionRemuneration[0]
						.MinimumRange
				}{' '}
				to{' '}
				{
					job.MatchedObjectDescriptor.PositionRemuneration[0]
						.MaximumRange
				}{' '}
				/
				{
					job.MatchedObjectDescriptor.PositionRemuneration[0]
						.Description
				}
			</p>
			<p>
				Position Location:{' '}
				{job.MatchedObjectDescriptor.PositionLocationDisplay}
			</p>
			<h5>Application Summary:</h5>
			<p>
				{showFullSummary
					? job.MatchedObjectDescriptor.QualificationSummary
					: job.MatchedObjectDescriptor.QualificationSummary.slice(
							0,
							100
					  )}{' '}
				... <DoubleChevronDownSvg toggle={toggleSummary} />
			</p>
			<button className='apply-link'>
				<a
					href={job.MatchedObjectDescriptor.ApplyURI}
					target='_blank'
					rel='noopener noreferrer'
				>
					Apply Here
				</a>
			</button>
			OR
			<button className='apply-link'>
				<a
					href={job.MatchedObjectDescriptor.PositionURI}
					target='_blank'
					rel='noopener noreferrer'
				>
					see Details{' '}
				</a>
			</button>
		</div>
	);
}
