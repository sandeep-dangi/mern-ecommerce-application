// copy authService.js....customerService.js....productService.js.....brandService.js..........blogService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getBlogs = async () => {
    const response = await axios.get(`${base_url}blog/`);
    // backend m route check kro  index.js m brandRouter ka route dekho
    // console.log(response.data);
    
    return response.data;
}

const blogService = {
    getBlogs,
};

export default blogService;
