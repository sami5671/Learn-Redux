import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

// slice function

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    allBookSelected: (state, action) => {
      state.filter = action.payload;
    },
    featuredBookSelected: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { allBookSelected, featuredBookSelected } = filterSlice.actions;
export default filterSlice.reducer;
