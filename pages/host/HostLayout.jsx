import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./HostLayout.css";

export default function HostLayout() {
  return (
    <div>
      <div className="nav hostnav">
        <ul>
          <li>
            <NavLink
              to="/host"
              end
              className={({ isActive }) =>
                isActive ? "selected line" : "line"
              }
            >
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/income"
              className={({ isActive }) =>
                isActive ? "selected line" : "line"
              }
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/reviews"
              className={({ isActive }) =>
                isActive ? "selected line" : "line"
              }
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/vans"
              className={({ isActive }) =>
                isActive ? "selected line" : "line"
              }
            >
              Host
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
