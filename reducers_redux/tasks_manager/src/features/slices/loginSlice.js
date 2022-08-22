import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("login")
  ? JSON.parse(localStorage.getItem("login"))
  : { user: "", password: "" };

const loginSlice = createSlice({
  name: "LOGIN",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.user;
      state.password = action.payload.password;
    },
    logOut: (state) => {
      state.user = "";
      state.password = "";
      localStorage.setItem("login", JSON.stringify(state));
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
