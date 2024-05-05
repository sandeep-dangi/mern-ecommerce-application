// copy authService.js....customerService.js....productService.js.....brandService.js....pcategoryService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getColors = async () => {
    const response = await axios.get(`${base_url}color/`);
    // backend m route check kro...productCategoryRoute.js and index.js file (categoryRouter)
    // console.log(response.data);
    
    return response.data;
}

const colorService = {
    getColors,
};

export default colorService;
