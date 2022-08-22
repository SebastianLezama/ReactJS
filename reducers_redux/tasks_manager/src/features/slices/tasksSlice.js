import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const tasksSlice = createSlice({
  name: "TASKS",
  initialState: { tasks: initialState },
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        complete: false,
        edit: false,
      });
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeThisTask(state, action) {
      state.tasks.map((task) => {
        return task.id === action.payload
          ? (task.complete = !task.complete)
          : task;
      });
    },
    editThisTask(state, action) {
      state.tasks.map((task) => {
        return task.id === action.payload ? (task.edit = !task.edit) : task;
      });
    },
    saveThisTask(state, action) {
      state.tasks.map((task) => {
        return task.id === action.payload.id
          ? (task.title = action.payload.value)
          : task;
      });
    },
    removeTasks(state) {
      state.tasks = [];
    },
  },
});

export const {
  deleteTask,
  addTask,
  completeThisTask,
  editThisTask,
  saveThisTask,
  removeTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
