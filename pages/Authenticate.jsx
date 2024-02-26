import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Authenticate() {
  let authenticate = localStorage.getItem("logged");
  const location = useLocation();
  if (!authenticate) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location, message: "Please Login in first!" }}
      />
    );
  }
  return <Outlet />;
}
