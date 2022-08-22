import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/slices/loginSlice";
import tasksSlice from "../features/slices/tasksSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    tasks: tasksSlice,
  },
});
