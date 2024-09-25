import { getBlogs, removeSaveBlog, saveBlog, updateLike } from "./BlogsAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk function (get blog)
export const fetchBlogs = createAsyncThunk(
  "Blogs/fetchBlogs",
  async ({ sort, filter }) => {
    const blogs = await getBlogs({ sort, filter });
    return blogs;
  }
);
// async thunk function(post like)
export const postLike = createAsyncThunk(
  "Like/fetchLike",
  async ({ id, likes }) => {
    const Like = await updateLike({ id, likes });
    return Like;
  }
);

// async thunk function (post blog save)
export const postSaveBlog = createAsyncThunk(
  "saveBlog/postSaveBlog",
  async (id) => {
    const save = await saveBlog(id);
    return save;
  }
);

// async thunk function (remove blog saved)
export const removeUserSavedBlog = createAsyncThunk(
  "Blog/removeSaveBlog",
  async (id) => {
    const blog = await removeSaveBlog(id);
    return blog;
  }
);

// slice function
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(postLike.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(postLike.fulfilled, (state, action) => {
        state.isLoading = false;

        const findIndexOfBlog = state.blogs.findIndex(
          (blog) => blog.id === action.payload.id
        );

        const updateUserLikes = state.blogs[findIndexOfBlog].likes + 1;
        state.blogs[findIndexOfBlog].likes = updateUserLikes;
      })
      .addCase(postLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(postSaveBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(postSaveBlog.fulfilled, (state, action) => {
        state.isLoading = false;

        // const findIndexOfBlog = state.blogs.findIndex(
        //   (blog) => blog.id === action.payload.id
        // );
      })
      .addCase(postSaveBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeUserSavedBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeUserSavedBlog.fulfilled, (state, action) => {
        state.isLoading = false;

        const findIndexOfBlog = state.blogs.findIndex(
          (blog) => blog.id === action.payload.id
        );
        const updateIsSaved = !state.blogs[findIndexOfBlog].isSaved;
        state.blogs[findIndexOfBlog].isSaved = updateIsSaved;
      })
      .addCase(removeUserSavedBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
