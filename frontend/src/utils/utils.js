import Axios from '../api/Axios.Api';

export const getAllUsers = async (setState) => {
	try {
		const data = await Axios.getUsers();
		setState(data);
		// return data;
	} catch (error) {
		console.error(error);
	}
}

