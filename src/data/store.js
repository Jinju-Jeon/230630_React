import { configureStore, createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name: 'cart',
    initialState: [],

    reducers: {
        addItem(state,action){
            const id = action.payload.id
            const i = state.findIndex((element)=>(element.id===id))
            if(i>=0){
                alert('이미 장바구니에 존재하는 상품입니다.')
            } else{
                state.push(action.payload)
                alert('장바구니에 추가되었습니다.')
            }
            
        },
        deleteItem(state,action){
            const i = state.findIndex((element)=>(element.id === action.payload.id))
            state.splice(i,1)
        }
    }
})

export const {addItem, deleteItem} = cart.actions


export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})