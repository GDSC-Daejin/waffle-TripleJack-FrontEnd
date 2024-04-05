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

const today = createSlice({
  name: "today",
  initialState: "",
  reducers: {
    setToday(state, action) {
      return action.payload; // 새로운 주말 날짜를 받아서 상태를 업데이트합니다.
    },
  },
});

export let { changeState } = nowState.actions;
export const { setToday } = today.actions;
export let { setWeekEnd } = weekEnd.actions;

export default configureStore({
  reducer: {
    nowState: nowState.reducer, //등하교 정할때 쓰는 거임 운전자 페이지
    weekEnd: weekEnd.reducer,
    today: today.reducer,
  },
});
