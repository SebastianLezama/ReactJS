import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const AdminRoute = ({ children }) => {
  const { admin } = useAuth();

  const location = useLocation();
  return admin ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default AdminRoute;
