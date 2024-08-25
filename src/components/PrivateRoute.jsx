import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust the path as needed

function PrivateRoute({ children, requiredRole }) {
  const { isAuthenticated, userRole } = useAuth(); // Check authentication status and user role

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default PrivateRoute;
