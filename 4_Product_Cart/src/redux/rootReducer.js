import { combineReducers } from "redux";
import productAddReducer from "./productAdd/productAddReducer";

const rootReducer = combineReducers({
  products: productAddReducer,
});

export default rootReducer;
