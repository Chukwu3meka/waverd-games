import { layoutReducer } from "./layout";
import { accountReducer } from "./account";
import { combineReducers } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  account: accountReducer,
});
