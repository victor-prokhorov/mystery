import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mysteryReducer from "../features/mystery/mysterySlice";

export const store = configureStore({
  reducer: {
    mystery: mysteryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
