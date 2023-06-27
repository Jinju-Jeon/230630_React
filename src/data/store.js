import { configureStore, createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name: 'cart',
    initialState: [],

    reducers: {
        addItem(state,action){
            const id = action.payload.id
            const i = state.findIndex((element)=>(element.id===id))
            if(i>=0){
                alert('이미 장바구니에 존재하는 상품입니다. 수량 조정은 장바구니에서 가능합니다.')
            } else{
                state.push(action.payload)
                alert('장바구니에 추가되었습니다.')
            }
            
        },
        deleteItem(state,action){
            const i = state.findIndex((element)=>(element.id === action.payload.id))
            state.splice(i,1)
        },
        quantUp(state, action){
            const i = state.findIndex((element)=>(element.id === action.payload))
            state[i].quant++
        },
        quantDown(state,action){
            const i = state.findIndex((element)=>(element.id === action.payload))
            if(state[i].quant<=1){
                alert('1개 이상부터 주문이 가능합니다.')
            }else{
                state[i].quant--
            }
        },//quantDown
        quantChange(state,action){
            if(action.payload.newValue<1){
                alert('1개 이상부터 주문이 가능합니다.')
            }else{
                const i = state.findIndex((element)=>(element.id === action.payload.id))
                state[i].quant = action.payload.newValue
            }
            
            
        }

    }//reducers
})

export const {addItem, deleteItem, quantUp, quantDown, quantChange} = cart.actions


export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})