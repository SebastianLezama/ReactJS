import React from "react";
import { useAuth } from "../AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to={"/login"} />;
};

export default AdminRoute;
