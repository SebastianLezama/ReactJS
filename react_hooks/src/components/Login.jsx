import React from "react";
import { useNavigate } from "react-router-dom";
import { useFrom } from "../../src/useFrom";

const Login = () => {
  const [values, handleChange] = useFrom({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem("login", JSON.stringify(values));
    if ((values.email === "") | (values.password === "")) {
      alert("Please Enter email and password!");
    } else navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default Login;
