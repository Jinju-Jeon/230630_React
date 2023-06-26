import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {order: []},

    reducers:{
        addItem(state,action){

        }
    }


})

export default configureStore({
    reducer:{
        cart: cart.reducer,
    }
})