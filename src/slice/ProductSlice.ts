import { createSlice } from "@reduxjs/toolkit"
import { AddProduct, deleteProduct, getAllProduct, updateProduct } from "../action/Product"

const initialState = {
    products: [],
    product: {}
} as any

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(AddProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product: any = action.payload
            state.product = state.product.map((item: any) => item.id === product.id ? product : item)
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const id: any = action.payload
            state.products = state.products.filter((item: any) => item.id != id)
        })
    }
})

export const ProductReducer = productSlice.reducer

