import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

// slice function

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchedSelected: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchedSelected } = searchSlice.actions;
export default searchSlice.reducer;
