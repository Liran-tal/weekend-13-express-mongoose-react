import Axios from '../api/Axios.Api';

export const getAllUsers = async (setUsers) => {
	try {
		const data = await Axios.getUsers();
		setUsers(data);
	} catch (error) {
		console.error(error);
	}
}

