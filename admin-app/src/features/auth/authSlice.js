import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";


// const userDefaultState = {
//     _id:null,
//     firstname:null,
//     lastname:null,
//     email:null,
//     mobile:null,
//     token:null,
// };
const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserfromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

// export const login = createAsyncThunk(
//     "auth/login", 
export const login = createAsyncThunk(
    "auth/admin-login", 
    async (userData,thunkAPI) => {
    try
    {
        return await authService.login(userData);
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

// for orderSlice copy it from bcategorySlice.js
// copy from authSlice.js
export const getOrders = createAsyncThunk("order/get-orders", async (thunkAPI) => {
    try
    {
        return await authService.getOrders();
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});



export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state,action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "success";
        })
        .addCase(login.rejected, (state,action) => {
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            state.isLoading = false;

            
            // state.isError = true;
            // state.user = null;
        })
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getOrders.fulfilled, (state,action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.orders = action.payload;
            state.message = "success";
        })
        .addCase(getOrders.rejected, (state,action) => {
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            state.isLoading = false;

            
            // state.isError = true;
            // state.user = null;
        });
    },
});

export default authSlice.reducer;
