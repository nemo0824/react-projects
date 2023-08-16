import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState: { name : 'kim', age : 28},
  reducers : {
    changeName(state){
      state.name = "LIM"
    },
    changeAge(state){
      state.age += 1
    }

  }
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
},

],
reducers : {
  plusCount(state, action){
    let idNumber = state.findIndex((a)=> {
      return a.id == action.payload }) 
    state[idNumber].count +=1
  },
  minusCount(state, action){
    let idNumber = state.findIndex((a)=>{
      return a.id == action.payload})
    state[idNumber].count -=1
    
  }

}



  
})

export let {changeAge, changeName} = user.actions
export let {plusCount, minusCount} = cart.actions
export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer

  }
}) 

