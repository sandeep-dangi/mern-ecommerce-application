// copy authService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getUsers = async () => {
    const response = await axios.get(`${base_url}user/all-users`);
    // backend m route check kro authRoute....for getallUsers
    // console.log(response.data);
    
    return response.data;
}

const customerService = {
    getUsers,
};

export default customerService;
