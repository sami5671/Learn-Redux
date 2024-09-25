import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/TransactionSlice";
export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
