import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal";
import nodesReducer from "./reducers/node";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    nodes: nodesReducer,
  },
});
