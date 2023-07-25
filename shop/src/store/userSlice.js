import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
      changeName(state){
        state.name = 'park'
      },
      increase(state, action){
        state.age += action.payload 
      },
    }
  })
  export let {changeName, increase}  = user.actions // 안에있는 함수들을 state변경함수 가져오는거
  // 오른쪽 자료를 변수로 뺴는 문법 
  export default user