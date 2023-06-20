import axios from 'axios';

export const fetchUSAJobs = async (keyword = 'Software Developer') => {
	const params = {
		keyword,
	};
	let id = 0;
	try {
		const response = await axios.get('http://localhost:3001/usaJobs', {
			params,
		});
		if (response.data) {
			const dataWithId = response.data.map((job) => ({
				...job,
				id: (id += 1),
			}));
			return dataWithId;
		}
	} catch (error) {
		return error;
	}
};
