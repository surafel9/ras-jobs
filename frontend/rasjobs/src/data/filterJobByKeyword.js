export const filterJobByKeyWord = (processedKeyword, data, cacheState) => {
	const result = [];

	const whichData = data.isDataFiltered ? cacheState : data.data;

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
