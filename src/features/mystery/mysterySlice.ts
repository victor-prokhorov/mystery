import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface MysteryState {
  value: "left" | "right";
}

const initialState: MysteryState = {
  value: "left",
};

export const mysterySlice = createSlice({
  name: "mystery",
  initialState,
  reducers: {
    randPos: (state) => {
      if (Math.random() > 0.5) {
        state.value = "right";
      } else {
        state.value = "left";
      }
    },
    l: (state) => {
      state.value = "left";
    },
    r: (state) => {
      state.value = "right";
    },
  },
});

export const { randPos, l, r } = mysterySlice.actions;

export const selectPos = (state: RootState) => state.mystery.value;

export default mysterySlice.reducer;
