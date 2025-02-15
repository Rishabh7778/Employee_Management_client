import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RoleBaseRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  // Wait until the authentication process is complete
  if (loading) return <div>Loading...</div>;

  // If there's no authenticated user, redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // If the authenticated user doesn't have the required role, redirect to unauthorized page
  if (!requiredRole.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  // If everything checks out, render the children components
  return children;
};

export default RoleBaseRoute;
