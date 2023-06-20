export const filterJob = async (
	formDataName,
	formDataValue,
	setData,
	data,
	cacheState
) => {
	let result = [];

	if (result.length > 0 && formDataName !== 'work_location') {
		result = filterData(result, formDataName, formDataValue);
	} else if (formDataName === 'work_location') {
		result = filterData(cacheState, formDataName, formDataValue);
	} else {
		result = filterData(data.data, formDataName, formDataValue);
	}

	setData((prevData) => ({
		...prevData,
		isLoading: false,
		data: result,
		isDataFiltered: true,
	}));
};

const filterData = (data, name, value) => {
	const result = data.filter(
		(job) => job[name].toLowerCase() === value.toLowerCase()
	);
	return result;
};
