import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    addToNum(state, {payload}) {
      state.count += payload
    }
  }
})

// 解构出 actions
const { increase, decrease, addToNum } = counterStore.actions;

// 获取 reducer 函数
const counterReducer = counterStore.reducer;

// 导出创建 action 对象的函数
export { increase, decrease, addToNum }

export default counterReducer