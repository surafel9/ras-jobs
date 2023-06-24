import React from 'react';
import { getPageNumbers } from './generatePages';

export default function Pagination({
	maxPageNumbers,
	currentPage,
	totalPages,
	handleNextPage,
	handlePrevPage,
	showPageNumbers,
	handlePageChange,
}) {
	const pageNumbers = getPageNumbers({
		maxPageNumbers,
		currentPage,
		totalPages,
	});
	console.log(currentPage);
	return (
		<div className='pagination'>
			<button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className='skip-menu'
			>
				&lt;
			</button>

			{showPageNumbers &&
				pageNumbers.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => handlePageChange(pageNumber)}
						style={{
							backgroundColor: '#0049b7',
						}}
					>
						{pageNumber}
					</button>
				))}

			<button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				className='skip-menu'
				style={{
					cursor:
						currentPage === totalPages ? 'not-allowed' : 'pointer',
				}}
			>
				&gt;
			</button>
		</div>
	);
}
