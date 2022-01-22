import axios from "axios";


const ApiHeader = axios.create({ baseURL: "http://localhost:8080/users/", })


export default class Axios {

  static getUsers = async (id) => {
		try {
			const {data} = await ApiHeader.get("get-users", id); 
			return data;
			
		} catch (error) {
			console.error(error);
			return error
		}
  } 

  static addItem = async (item) => {
    return await ApiHeader.post("",item);
  }
  
  static editItem = async (itemId, newItem) => {
    return await ApiHeader.put(itemId, newItem);
  }
  
  static deleteItem = async (itemId) => {
    return await ApiHeader.delete(itemId);
  }
  
  
}