// copy authService.js....customerService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


// let we create a service
const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);
    // backend m route check kro authRoute....for getAllProduct
    // console.log(response.data);
    
    return response.data;
}

const createProduct = async (product) => {
    const response = await axios.post(`${base_url}product/`, product, config);
    return response.data;
}


const productService = {
    getProducts,
    createProduct,
};

export default productService;
