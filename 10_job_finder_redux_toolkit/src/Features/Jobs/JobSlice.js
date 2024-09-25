import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addJob,
  deleteJob,
  getFilterJobs,
  getJob,
  getJobs,
  updateJob,
} from "./JobAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  job: [],
};

// async thunk functions (get all jobs)
export const fetchJobs = createAsyncThunk("Jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
// async thunk functions (get one job)
export const fetchJob = createAsyncThunk("Job/fetchJob", async (id) => {
  const job = await getJob(id);
  return job;
});

// async thunk functions (get all jobs)
export const fetchFilterJobs = createAsyncThunk(
  "Jobs/fetchFilterJobs",
  async (query) => {
    const filterJobs = await getFilterJobs(query);
    return filterJobs;
  }
);
// async thunk functions (add job)
export const createJob = createAsyncThunk("Jobs/createJob", async (job) => {
  const aJob = await addJob(job);
  return aJob;
});

// async thunk functions (update job)
export const modifyJob = createAsyncThunk(
  "Job/updateJob",
  async ({ id, jobData }) => {
    const uJob = await updateJob(id, jobData);
    return uJob;
  }
);
// async thunk functions (delete job)
export const removeJob = createAsyncThunk("Job/removeJob", async (id) => {
  const dJob = await deleteJob(id);
  return dJob;
});

// redux slice function

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    searchJob: (state, action) => {
      console.log(action);
      // const searchTerm = action.payload.toLowerCase();

      const searchedJob = state.jobs.filter((job) =>
        job.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.jobs = searchedJob;
    },
    ascendingSortJob: (state) => {
      const aJobs = state.jobs.sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
      );
      state.jobs = aJobs;
    },
    descendingSortJob: (state) => {
      const dJobs = state.jobs.sort(
        (a, b) => new Date(b.deadline) - new Date(a.deadline)
      );
      state.jobs = dJobs;
    },

    highSortJob: (state) => {
      const hJobs = state.jobs.sort((a, b) => b.salary - a.salary);
      state.jobs = hJobs;
    },
    lowSortJob: (state) => {
      const lJobs = state.jobs.sort((a, b) => a.salary - b.salary);
      state.jobs = lJobs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.job = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(fetchFilterJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchFilterJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchFilterJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        const updateJobs = [...state.jobs, action.payload];
        state.jobs = updateJobs;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        const filterJobs = state.jobs.filter(
          (job) => job.id !== action?.meta?.arg
        );
        state.jobs = filterJobs;
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;

export const {
  searchJob,
  ascendingSortJob,
  descendingSortJob,
  lowSortJob,
  highSortJob,
} = jobsSlice.actions;
