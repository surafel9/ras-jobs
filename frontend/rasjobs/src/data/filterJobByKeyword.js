export const filterJobByKeyWord = (keyword, data, cacheState) => {
	const processedKeyword = keyword.toLowerCase().trim();
	const pattern = /^[a-zA-Z,\-\s]+$/;
	const result = [];

	if (processedKeyword.length === 0 || !pattern.test(processedKeyword)) {
		return [];
	}

	const whichData = data.isDataFiltered ? cacheState : data.data;
	console.log(whichData);
	const keywords = processedKeyword.split(' ');

	const filteredData = whichData.filter((item) => {
		const properties = [
			item.job_category.toLowerCase(),
			item.job_description.toLowerCase(),
			item.org_city.toLowerCase(),
			item.org_state.toLowerCase(),
			item.title.toLowerCase(),
			item.work_location.toLowerCase(),
		];

		return keywords.every((keyword) =>
			properties.some(
				(property) =>
					property.includes(keyword) ||
					property.includes(processedKeyword)
			)
		);
	});

	if (filteredData.length > 0) {
		const addedIds = {};

		for (let i of filteredData) {
			if (!addedIds[i.id]) {
				addedIds[i.id] = true;
				result.push(i);
			}
		}
	}

	return result;
};
