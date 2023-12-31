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

const reviews = createSlice({
    name: "reviews",
    initialState: [],
    reducers: {
        addReview(state,action){
            state.push(action.payload)
        },
        removeReview(state,action){
            let i = state.findIndex((item)=>(item.key===action.payload))
            state.splice(i,1)
        }
    }
})

const qnas = createSlice({
    name: 'qnas',
    initialState: [],

    reducers: {
        addQuestion(state,action){
            state.push(action.payload)
        },
        removeQuestion(state,action){
            let i = state.findIndex((item)=>(item.key===action.payload))
            state.splice(i,1)
        },
        addAnswer(state,action){
            let i = state.findIndex((item)=>(item.key===action.payload.key))
            state[i].answer=action.payload.answer
        }

    }

})

export const {addItem, deleteItem, quantUp, quantDown, quantChange} = cart.actions
export const {addReview, removeReview} = reviews.actions
export const {addQuestion, removeQuestion, addAnswer} = qnas.actions

export default configureStore({
    reducer: {
        cart: cart.reducer,
        reviews: reviews.reducer,
        qnas: qnas.reducer
    }
})