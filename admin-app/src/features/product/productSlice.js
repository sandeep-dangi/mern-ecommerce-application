// copy customerSlice....productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";



// copy from authSlice.js
export const getProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
    try
    {
        return await productService.getProducts();
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const createProducts = createAsyncThunk("product/create-products", async (productData, thunkAPI) => {
    try
    {
        return await productService.createProduct(productData);
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

// lets create state
const initialState = {
    products: [],
    createdProduct: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
      builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload; 
        })      
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(createProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdproduct = action.payload; 
        })      
        .addCase(createProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
    },
});

export default productSlice.reducer;


