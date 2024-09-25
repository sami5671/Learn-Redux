import axios from "../../axios/axios";

export const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};
