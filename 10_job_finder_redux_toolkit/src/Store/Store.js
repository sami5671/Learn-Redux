import { configureStore } from "@reduxjs/toolkit";
import JobsReducer from "../Features/Jobs/JobSlice";
export const store = configureStore({
  reducer: {
    jobs: JobsReducer,
  },
});
