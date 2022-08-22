import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import tasksSlice from "./slices/tasksSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    tasks: tasksSlice,
  },
});
