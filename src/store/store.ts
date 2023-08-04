
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ProductReducer, } from "../slice/ProductSlice";

const store = configureStore({
    reducer: {
        products: ProductReducer
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;