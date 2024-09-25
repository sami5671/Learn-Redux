import axios from "../../axios/axios";

export const getBlogs = async ({ sort, filter }) => {
  console.log(sort);

  let queryString = "";

  if (sort === "most_liked") {
    queryString += "_sort=likes&_order=desc";
  } else if (sort === "newest") {
    queryString += "_sort=createdAt&_order=desc";
  }

  // Filtering logic
  if (filter === "saved") {
    if (queryString) queryString += "&";
    queryString += "isSaved=true";
  }

  const response = await axios.get(`/blogs?${queryString}`);
  return response.data;
};

export const updateLike = async ({ id, likes }) => {
  const updateLikes = likes + 1;

  const response = await axios.patch(`/blogs/${id}`, {
    likes: updateLikes,
  });
  return response.data;
};

export const saveBlog = async (id) => {
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved: true,
  });
  return response.data;
};

export const removeSaveBlog = async (id) => {
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved: false,
  });
  return response.data;
};
