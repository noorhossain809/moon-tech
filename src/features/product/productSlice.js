import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    products : [],
    isLoading: false,
    isError: false,
    error: ""
}


const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductData.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        .addCase(fetchProductData.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })
        .addCase(fetchProductData.rejected, (state, action) => {
            state.products = []
            state.isError = true
            state.error = action.error.message
        })
    }
})

export const fetchProductData = createAsyncThunk('products/getProduct', async() => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    return data.data
})

export default productSlice.reducer;