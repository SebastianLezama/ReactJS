import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../features/slices/loginSlice";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Login.scss";
import { TextField } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    user: "",
    password: "",
  });

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setLoginState((current) => ({ ...current, user: value }));
    } else {
      setLoginState((current) => ({ ...current, password: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("login", JSON.stringify(loginState));
    dispatch(logIn(loginState));
    navigate("/");
  };

  useEffect(() => {
    login.length !== 0 && navigate("/");
  }, [login]);

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
