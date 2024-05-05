// copy authService.js....customerService.js....productService.js.....brandService.js....pcategoryService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getBlogCategories = async () => {
    const response = await axios.get(`${base_url}blogcategory/`);
    // backend m route check kro... index.js file 
    // console.log(response.data);
    
    return response.data;
}

const bCategoryService = {
    getBlogCategories,
};

export default bCategoryService;
