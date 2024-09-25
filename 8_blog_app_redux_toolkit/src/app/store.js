import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/Blogs/BlogsSlice";
import blogReducer from "../features/Blog/BlogSlice";
import relatedBlogsReducer from "../features/RelatedBlogs/RelatedBlogsSlice";
import sortAndFilterReducer from "../features/SortAndFilter/SortAndFilterSlice";
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    sortAndFilter: sortAndFilterReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
