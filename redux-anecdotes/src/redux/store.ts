import { configureStore } from "@reduxjs/toolkit";
import anecdotesReducer from "./reducers/anecdotesReducer";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: { anecdotes: anecdotesReducer },
});
