export const rediculeFunc = (currentPage, cardsPerPage, jobs) => {
	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const totalPages = Math.ceil(jobs.length / cardsPerPage);
	const currentCards = jobs.slice(indexOfFirstCard, indexOfLastCard);

	return { indexOfFirstCard, indexOfLastCard, totalPages, currentCards };
};

export const getPageNumbers = (maxPageNumbers, currentPage, totalPages) => {
	const middlePage = Math.floor(maxPageNumbers / 2);
	const excessPages = Math.max(0, totalPages - maxPageNumbers);
	let startPage = currentPage - middlePage + excessPages;
	let endPage = currentPage + middlePage - excessPages;

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
