import axios from "../utils/axios";

// get transaction api
export const getTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

// add transaction api
export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};

// update transaction api
export const updateTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};
// delete transaction api
export const deleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
