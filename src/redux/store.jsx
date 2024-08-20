import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import {persistStore, persistReducer } from "redux-persist";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export default store;
