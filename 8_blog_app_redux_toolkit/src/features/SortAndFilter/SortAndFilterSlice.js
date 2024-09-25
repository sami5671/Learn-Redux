import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  filter: "",
};

// slice function

const sortAndFilterSlice = createSlice({
  name: "sortAndFilter",
  initialState,
  reducers: {
    defaultSelected: (state, action) => {
      state.sort = "";
    },
    newestSelected: (state, action) => {
      state.sort = action.payload;
    },
    mostLikedSelected: (state, action) => {
      state.sort = action.payload;
    },
    allSelected: (state, action) => {
      state.filter = action.payload;
    },
    savedSelected: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default sortAndFilterSlice.reducer;
export const {
  defaultSelected,
  newestSelected,
  mostLikedSelected,
  allSelected,
  savedSelected,
} = sortAndFilterSlice.actions;
