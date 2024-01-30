import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./features/user/portfolioSlice"
export const store = configureStore({
  reducer: {
    portfolio:portfolioReducer
  },
});
