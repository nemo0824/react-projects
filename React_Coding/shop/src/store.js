import { configureStore, createSlice } from "@reduxjs/toolkit";

// 전역으로 state를 활용할수있는방법 - 1. context api 2. 라이브러리(redux, recoil)

let user = createSlice({
  // usestate랑 비슷한역할
  name: "user",
  initialState: "Lim",

  //   state 수정하는 함수 만들기
  reducers: {
    changeName(state) {
      return "john" + state;
    },
  },
});

export let { changeName } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "white and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      state[action.payload].count++;
    },
  },
});
export let { changeCount } = product.actions;

export default configureStore({
  reducer: {
    // 여기서 등록
    // 작명 : user.reducer
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
  },
});
