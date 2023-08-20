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

// 로그인 -> 이거를 원래 session 했는데 생각해보니 session그게아니라 전역변수로 만들어놓는게 맞다고생각했어요
// 전역변수로 만들려고 store.js에서 user만든거고 
// 로그인 - > 로그인정보가지고 -> shopdetail -> 상품선택 -> loginUser값과 상품 재고랑 사이즈랑 -> cart
// cart에서도 그러면 로그인 유저 값과 이값이 필요하다
// userCart를 만듬 -> loginUser와 데이터 - > 
// 1번째 loginUser != loginuser


let userCart = createSlice({
  name: 'userCart',
  initialState: [], 
  reducers: {
    addtoCart: (state, action) => {
      let { loginUser, ShopItems } = action.payload;
      let existingCart = state.find(() => this.loginUser === loginUser);
      if (!existingCart) {
        state.push({ loginUser, cart: [ShopItems] });
      } else {
        existingCart.cart.push(ShopItems);
      }
    },
    plusCount: (state, action) => {
      let { loginUser, itemId } = action.payload;
      let userCart = state.find((cart) => cart.loginUser === loginUser);
      if (userCart) {
        let item = userCart.cart.find((item) => item.id === itemId);
        if (item) {
          item.count += 1;
        }
      }
    },
    minusCount: (state, action) => {
      let { loginUser, itemId } = action.payload;
      let userCart = state.find((cart) => cart.loginUser === loginUser);
      if (userCart) {
        let item = userCart.cart.find((item) => item.id === itemId);
        if (item && item.count > 0) {
          item.count -= 1;
        }
      }
    },
  },
});

export const { setLoginUser, logoutUser } = user.actions;
export let { addtoCart, plusCount, minusCount } = userCart.actions;
export let { changeAge, changeName } = user.actions;




export default configureStore({
  reducer: { 
    user : user.reducer,
    userCart : userCart.reducer
   
    
  }
}) 

