import Axios from './api/Axios.Api';

const handleAllUsers = async () => {
	const {data} = await Axios.getUsers();
	console.log(data);
}