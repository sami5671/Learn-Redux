import axios from "../../Axios/axios";

// get api (all)
export const getJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};
// get api (one job)
export const getJob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};

// get api (filter jobs)
export const getFilterJobs = async (query) => {
  let queryString = "";

  if (query) {
    queryString = query;
  }
  const response = await axios.get(`/jobs?type=${queryString}`);
  return response.data;
};

// post api
export const addJob = async (job) => {
  const response = await axios.post("/jobs", job);
  return response.data;
};

// update api

export const updateJob = async (id, jobData) => {
  // console.log(id, jobData);
  const response = await axios.put(`/jobs/${id}`, jobData);
  return response.data;
};

// delete api
export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
