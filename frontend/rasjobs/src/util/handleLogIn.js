import axios from 'axios';
export const loginHandler = async (accessFormData) => {
	try {
		const response = await axios.post('http://localhost:3001/logIn', {
			accessFormData,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200 || response.statusText === 'OK') {
			return response.data;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
};
