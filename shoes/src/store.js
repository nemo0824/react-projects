import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: null, // 로그인 정보가 없는 경우에는 초기값을 null로 설정
  reducers: {
    setLoginUser: (state, action) => {
      return action.payload; // 로그인 정보를 payload로 설정
    },
    logoutUser: (state) => {
      return null; // 로그아웃 시 로그인 정보를 null로 설정
    },
  },
});


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
  

}



  
})

let userCart = createSlice({
  name : 'userCart',
  initialState : {},
  reducers:{
    addtoCart : (state, action) =>{
      let  {loginUser, ShopItems} = action.payload;
      if(!state[loginUser]){
        state[loginUser] ={cart : []};
      }
      state[loginUser].cart.push(ShopItems)
    },
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

export const { setLoginUser, logoutUser } = user.actions;
export let {addtoCart} = userCart.actions;
export let {changeAge, changeName} = user.actions
export let {plusCount, minusCount} = cart.actions


export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer,
    userCart : userCart.reducer
   
    
  }
}) 

