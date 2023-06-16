import axios from 'axios';

export const fetchUSAJobs = async (keyword = 'Software Developer') => {
	const params = {
		keyword,
	};
	try {
		const response = await axios.get('http://localhost:3001/usaJobs', {
			params,
		});
		if (response.data) {
			return response.data;
		}
	} catch (error) {
		return error;
	}
};
