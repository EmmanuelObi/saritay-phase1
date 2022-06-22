import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../models/appModels";

const initialState: AppState = {
  options: [
    {
      name: "CATS",
      votes: 10,
    },
    {
      name: "DOGS",
      votes: 10,
    },
  ],
  totalVotes: 20,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOptions(state, action: PayloadAction<string>) {
      let copiedOptions = [...state.options];
      copiedOptions.forEach((option) => {
        if (option.name === action.payload) {
          option.votes += 1;
        }
      });
      state.options = copiedOptions;
    },
    setTotalVotes(state, action: PayloadAction<AppState["totalVotes"]>) {
      state.totalVotes = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
