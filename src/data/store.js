import { configureStore, createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name: 'cart',
    initialState: [],

    reducers: {
        addItem(state,action){
            state.push(action.payload)
        }
    }
})

export const {addItem} = cart.actions


export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})