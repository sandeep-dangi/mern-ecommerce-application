// copy authService.js....customerService.js....productService.js.....brandService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getBrands = async () => {
    const response = await axios.get(`${base_url}brand/`);
    // backend m route check kro brandRoute.js....for ..  & index.js m brandRouter ka route dekho
    // console.log(response.data);
    
    return response.data;
}

const brandService = {
    getBrands,
};

export default brandService;
