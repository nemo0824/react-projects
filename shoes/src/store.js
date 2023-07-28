import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState: 'kim'
})

let cart = createSlice({
  name : 'cart',
  initialState : 
  [
{
    id: 0,
    title : "나이키 코르테즈",
    count : 1,
    price : 119000
},
{
    id: 1,
    title : "나이키 에어 포스 1 '07",
    count : 2,
    price : 139000
}

],
  reducers : {
    changeCount(state, action){
      let 번호 =  state.findIndex((a)=>{
       return a.id == action.payload
      })
      state[번호].count++
    }
  }
})

export let {changeCount} = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer

  }
}) 

