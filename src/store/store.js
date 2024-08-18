import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./reducers/node";

export const store = configureStore({
  reducer: {
    nodes: nodesReducer,
  },
});
