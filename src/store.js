import { configureStore, createSlice } from "@reduxjs/toolkit";

let nowState = createSlice({
  name: "nowState",
  initialState: 0,
  reducers: {
    changeState(state, a) {
      return a.payload;
    },
  },
});

export let { changeState } = nowState.actions;

export default configureStore({
  reducer: {
    nowState: nowState.reducer,
  },
});
