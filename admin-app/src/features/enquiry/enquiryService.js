// copy authService.js....customerService.js....productService.js.....brandService.js....pcategoryService.js
import axios from "axios";
import { base_url } from "../../utils/base_url";


// let we create a service
const getEnquiries = async () => {
    const response = await axios.get(`${base_url}enquiry/`);
    // backend m route check kro...
    // console.log(response.data);
    
    return response.data;
}

const enquiryService = {
    getEnquiries,
};

export default enquiryService;
