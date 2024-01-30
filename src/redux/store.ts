import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./features/user/userSlice"
export const store = configureStore({
  reducer: {
    portfolio:portfolioReducer
  },
});
