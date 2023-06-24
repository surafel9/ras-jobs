import axios from 'axios';
export const signUpHandler = async (accessFormData) => {
	try {
		const response = await axios.post(
			'http://localhost:3001/signUp',
			accessFormData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response;
	} catch (error) {
		return error;
	}
};
