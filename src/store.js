import { configureStore } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });

export default store;
