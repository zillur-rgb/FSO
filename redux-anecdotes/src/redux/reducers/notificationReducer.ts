import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: false,
  reducers: {
    showHideNoti(state) {
      return !state;
    },
  },
});

export const { showHideNoti } = notificationSlice.actions;

export default notificationSlice.reducer;
