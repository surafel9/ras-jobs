import React from 'react';
import { getPageNumbers } from './redicule';

import '../style/pagination.scss';

export default function Pagination({
	maxPageNumbers,
	currentPage,
	totalPages,
	handleNextPage,
	handlePrevPage,
	handlePageChange,
	result = [],
}) {
	const pages =
		result.length > 0
			? result
			: getPageNumbers(maxPageNumbers, currentPage, totalPages);
	return (
		<div className='pagination'>
			<button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className='skip-menu'
			>
				&lt;
			</button>

			{pages.map((pageNumber) => (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					className={`${pageNumber === currentPage ? 'active' : ''}`}
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
