import "./App.css";
import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
