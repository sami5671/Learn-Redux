import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./RelatedBlogsAPI";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk function
export const fetchRelatedBlogs = createAsyncThunk(
  "blogs/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const relatedBlogs = await getRelatedBlogs({ tags, id });
    return relatedBlogs;
  }
);

// slice function
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
