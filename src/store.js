import { configureStore, createSlice } from "@reduxjs/toolkit";

let nowState = createSlice({
  name: "nowState",
  initialState: 0,
  reducers: {
    changeState(state, action) {
      return action.payload;
    },
  },
});

let weekEnd = createSlice({
  name: "weekEnd",
  initialState: [],
  reducers: {
    setWeekEnd(state, action) {
      return action.payload; // 새로운 주말 날짜를 받아서 상태를 업데이트합니다.
    },
  },
});

export let { changeState } = nowState.actions;
export let { setWeekEnd } = weekEnd.actions;

export default configureStore({
  reducer: {
    nowState: nowState.reducer,
    weekEnd: weekEnd.reducer,
  },
});
