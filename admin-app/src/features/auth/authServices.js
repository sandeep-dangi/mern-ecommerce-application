//authService.js

import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

// ye file Utils...axiosconfig.js m rkh diya is code ko
// const getTokenFromLocalStorage = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

//     const config = {
//         headers: {
//             Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
//             Accept: "application/json",
//         },
//     };

// let we create a service
const login = async(user) => {
    const response = await axios.post(`${base_url}user/admin-login`,user);
    // console.log(response.data);
    if(response.data) {
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data;
}
const getOrders = async () => {
    // console.log(getTokenFromLocalStorage.token);

    const response = await axios.get(`${base_url}user/getallorders`,config);
    // backend m route check kro..index.js file & userCtrl.js m getOrders h....authRoute(getOrders)
    // console.log(response.data);
    
    return response.data;
}

const authService = {
    login,
    getOrders,
};

export default authService;
