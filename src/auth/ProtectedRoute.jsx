import React from "react";
import { Navigate } from "react-router-dom";
import { getSession } from "./session";

export default function ProtectedRoute({ children }) {
  const s = getSession();
  if (!s || !s.token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
