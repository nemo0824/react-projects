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
//1번문제 장바구니
// 로그인 -> 이거를 원래 session 했는데 생각해보니 session그게아니라 전역변수로 만들어놓는게 맞다고생각했어요
// 전역변수로 만들려고 store.js에서 user만든거고 
// 로그인 - > 로그인정보가지고 -> shopdetail -> 상품선택 -> loginUser값과 상품 재고랑 사이즈랑 -> cart
// cart에서도 그러면 로그인 유저 값과 이값이 필요하다
// userCart를 만듬 -> loginUser와 데이터 - > 
// 1번째 loginUser != loginuser
// ---결론 ---- 
// 장바구니 굳이 이렇게 만들필요없이 바로 db에 상품재고,사이즈, 로그인유저, 갯수 만넘기면 됨


//2번문제 바로구매 
//그렇다면 바로구매? -> 전역 state store.js에 저장해야함
//필요한 데이터 : loinUser, stock, size, count, 
//바로구매 눌렀을떄 -> 로그인 여부 확인 -> 로그인 o -> 구매페이지 이동 -> 





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

let immediateBuy = createSlice({
  name : 'immediateBuy',
  initialState : {},
  reducers :{
    setImmediate : (state, action) =>{
      return action.payload
      
    }
  }
})

export const { setLoginUser, logoutUser } = user.actions;
export let { addtoCart, plusCount, minusCount } = userCart.actions;
export let { changeAge, changeName } = user.actions;
export let {setImmediate} = immediateBuy.actions;



export default configureStore({
  reducer: { 
    user : user.reducer,
    userCart : userCart.reducer,
    immediateBuy : immediateBuy.reducer
   
    
  }
}) 

