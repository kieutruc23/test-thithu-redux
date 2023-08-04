import { instace } from "../api/instance"
import { createAsyncThunk } from '@reduxjs/toolkit'
export const getAllProduct = createAsyncThunk('product/getallproduct', async () => {
    try {
        const data = await instace.get("/products")
        console.log(data)
        return data
    } catch (error) {

    }
})


export const AddProduct = createAsyncThunk('product/addproduct', async (product: any) => {
    try {
        const data = await instace.post("/products", product)
        return data
    } catch (error) {

    }
})


export const deleteProduct = createAsyncThunk('product/deleteproduct', async (id: any) => {
    try {
        await instace.delete(`/products/${id}`)
        return id
    } catch (error) {

    }
})



export const updateProduct = createAsyncThunk('product/updateproduct', async (product: any) => {
    try {
        const data = await instace.put(`/products/${product.id}`, product)

        return data
    } catch (error) {

    }
})