import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HANDLE_USER } from "../actions/loginActions";
import { initialLoginState, loginReducer } from "../reducers/loginReducer";
import { logIn } from "../store/slices/loginSlice";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Login.scss";
import { TextField } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    loginDispatch({
      type: HANDLE_USER,
      payload: value,
      field: name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", JSON.stringify(loginState));
    dispatch(logIn(loginState));
    navigate("/");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="User"
          name="user"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="buttonSubmit"
          label="login"
          variant="contained"
          disabled={
            loginState.user.length === 0 || loginState.password.length === 0
          }
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
