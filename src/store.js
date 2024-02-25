import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
}); //useState 비슷

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
