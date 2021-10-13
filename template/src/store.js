/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "auth/auth.slice";

import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,

  devTools: process.env.NODE_ENV !== "production",
});
