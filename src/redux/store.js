import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);

export default root;
