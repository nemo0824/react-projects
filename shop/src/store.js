import { configureStore, createSlice } from "@reduxjs/toolkit";

// 전역으로 state를 활용할수있는방법 - 1. context api 2. 라이브러리(redux, recoil)

let user = createSlice({
  // usestate랑 비슷한역할
  name: "user",
  initialState: "Lim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    // 여기서 등록
    // 작명 : user.reducer
    user: user.reducer,
    stock: stock.reducer,
  },
});
