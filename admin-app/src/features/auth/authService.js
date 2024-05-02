import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const login = async(userData) => {
    const response = await axios.post(`${base_url}user/admin-login`,userData);
    // console.log(response.data);
    if(response.data) {
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data;
}

const authService = {
    login,
};

export default authService;