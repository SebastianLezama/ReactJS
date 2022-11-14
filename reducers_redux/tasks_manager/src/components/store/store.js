import { configureStore } from "@reduxjs/toolkit";
import { addTask } from "../slices/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: addTask,
  },
});
