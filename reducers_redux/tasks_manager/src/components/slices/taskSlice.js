import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  complete: false,
  title: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.title = action.payload.text;
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
