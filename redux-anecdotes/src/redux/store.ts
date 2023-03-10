import { configureStore } from "@reduxjs/toolkit";
import anecdotesReducer from "./reducers/anecdotesReducer";
import notificationReducer from "./reducers/notificationReducer";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: { anecdotes: anecdotesReducer, noti: notificationReducer },
});
