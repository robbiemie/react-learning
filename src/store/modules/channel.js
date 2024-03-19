import { createSlice } from "@reduxjs/toolkit";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channels: []
  },
  reducers: {
    setChannels(state, {payload}) {
      state.channels = state.channels.concat(payload || [])
    }
  }
})

const { 
  setChannels
} = channelStore.actions


// 处理异步函数
const fetchChannelAction = () => {
  return async (dispatch) => {
    const res = await Promise.resolve({list: [{
      id: 1,
      name: 'test1'
    }]});
    dispatch(setChannels(res.list))
  }
}

const channelReducer = channelStore.reducer;

export { fetchChannelAction }

export default channelReducer;