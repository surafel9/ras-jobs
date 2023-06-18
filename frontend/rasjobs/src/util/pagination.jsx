import React from 'react';
import { getPageNumbers } from './generatePages';

export default function Pagination(props) {
	const pageNumbers = getPageNumbers(
		props.maxPageNumbers,
		props.currentPage,
		props.totalPages
	);
	return (
		<div className='pagination'>
			<button
				onClick={props.handlePrevPage}
				disabled={props.currentPage === 1}
				className='skip-menu'
			>
				&lt;
			</button>

			{props.showPageNumbers &&
				pageNumbers.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => props.handlePageChange(pageNumber)}
						style={{
							backgroundColor: '#0049b7',
						}}
					>
						{pageNumber}
					</button>
				))}

			<button
				onClick={props.handleNextPage}
				disabled={props.currentPage === props.totalPages}
				className='skip-menu'
				style={{
					cursor:
						props.currentPage === props.totalPages
							? 'not-allowed'
							: 'pointer',
				}}
			>
				&gt;
			</button>
		</div>
	);
}
