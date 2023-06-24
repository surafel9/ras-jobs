export const getPageNumbers = (maxPageNumbers, currentPage, totalPages) => {
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
