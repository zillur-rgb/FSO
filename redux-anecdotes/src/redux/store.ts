import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/anecdoteReducer";
export const store = configureStore({
  reducer: { anecdotes: reducer },
});
