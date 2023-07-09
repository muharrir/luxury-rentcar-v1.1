import { configureStore } from "@reduxjs/toolkit";
import dataCarReducer from "./carSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    dataCar: dataCarReducer,
    user: userReducer,
  },
});

export default store;
