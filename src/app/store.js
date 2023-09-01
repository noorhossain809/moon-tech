import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import cartSlice from "../features/cart/cartSlice"
import filterSlice from "../features/filter/filterSlice"
import productSlice from "../features/product/productSlice"


export const store = configureStore({
    reducer : {
        products: productSlice,
        filter: filterSlice,
        cart: cartSlice
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})