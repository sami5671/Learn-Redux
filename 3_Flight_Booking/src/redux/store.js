import { createStore } from "redux";
import formReducer from "./FormData/FormReducer";

const store = createStore(formReducer);

export default store;
