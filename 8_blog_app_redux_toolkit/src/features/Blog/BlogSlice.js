import { getBlog } from "./BlogAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk function
export const fetchBlog = createAsyncThunk("Blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// slice function
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateUserLikes: (state) => {
      const updateLikes = state.blog.likes + 1;
      state.blog.likes = updateLikes;
    },
    saveBlogType: (state) => {
      state.blog.isSaved = !state.blog.isSaved;
    },
    removeBlogType: (state) => {
      state.blog.isSaved = !state.blog.isSaved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
export const { updateUserLikes, saveBlogType, removeBlogType } =
  blogSlice.actions;
